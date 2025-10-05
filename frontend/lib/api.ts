import axios from 'axios'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('authToken')
      window.location.href = '/admin/login'
    }
    return Promise.reject(error)
  }
)

// API functions
export const inquiryAPI = {
  create: (data: any) => api.post('/inquiries', data),
  getAll: (params?: any) => api.get('/inquiries', { params }),
  getById: (id: string) => api.get(`/inquiries/${id}`),
  update: (id: string, data: any) => api.put(`/inquiries/${id}`, data),
  delete: (id: string) => api.delete(`/inquiries/${id}`),
  getStats: () => api.get('/inquiries/stats/summary'),
}

export const courseAPI = {
  getAll: (params?: any) => api.get('/courses', { params }),
  getById: (id: string) => api.get(`/courses/${id}`),
  create: (data: any) => api.post('/courses', data),
  update: (id: string, data: any) => api.put(`/courses/${id}`, data),
  delete: (id: string) => api.delete(`/courses/${id}`),
  enroll: (id: string) => api.post(`/courses/${id}/enroll`),
  getStats: () => api.get('/courses/stats/summary'),
}

export const authAPI = {
  login: (credentials: any) => api.post('/auth/login', credentials),
  register: (data: any) => api.post('/auth/register', data),
  getProfile: () => api.get('/auth/me'),
  changePassword: (data: any) => api.post('/auth/change-password', data),
}

export const statsAPI = {
  getDashboard: () => api.get('/stats'),
  getInquiries: (period?: string) => api.get('/stats/inquiries', { params: { period } }),
  getCourses: () => api.get('/stats/courses'),
}

export default api