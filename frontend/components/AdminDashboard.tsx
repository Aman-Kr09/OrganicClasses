'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  BarChart3, 
  Users, 
  BookOpen, 
  MessageSquare,
  TrendingUp,
  Calendar,
  Phone,
  Mail
} from 'lucide-react'

// This would typically be a separate admin app or protected routes
const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalInquiries: 156,
    newInquiries: 23,
    totalCourses: 12,
    activeCourses: 8,
    totalStudents: 487,
    monthlyGrowth: 15.3
  })

  const [recentInquiries] = useState([
    {
      id: 1,
      name: 'Priya Sharma',
      class: '12th',
      subject: 'Physics',
      phone: '9876543210',
      status: 'new',
      createdAt: '2024-01-15'
    },
    {
      id: 2,
      name: 'Rahul Kumar',
      class: '10th',
      subject: 'Mathematics',
      phone: '9876543211',
      status: 'contacted',
      createdAt: '2024-01-14'
    },
    {
      id: 3,
      name: 'Anjali Gupta',
      class: '11th',
      subject: 'Chemistry',
      phone: '9876543212',
      status: 'new',
      createdAt: '2024-01-14'
    }
  ])

  const StatCard = ({ icon: Icon, title, value, change, color }: any) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          {change && (
            <p className={`text-sm ${change > 0 ? 'text-green-500' : 'text-red-500'} flex items-center mt-1`}>
              <TrendingUp className="w-4 h-4 mr-1" />
              {change > 0 ? '+' : ''}{change}%
            </p>
          )}
        </div>
        <div className={`p-3 rounded-full ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </motion.div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600">Welcome back! Here's what's happening at Organic Classes.</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">Admin User</p>
                <p className="text-sm text-gray-500">admin@organicclasses.com</p>
              </div>
              <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                <span className="text-white font-medium">A</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={MessageSquare}
            title="Total Inquiries"
            value={stats.totalInquiries}
            change={12.5}
            color="bg-blue-500"
          />
          <StatCard
            icon={Users}
            title="New Inquiries"
            value={stats.newInquiries}
            change={8.3}
            color="bg-green-500"
          />
          <StatCard
            icon={BookOpen}
            title="Active Courses"
            value={stats.activeCourses}
            change={5.2}
            color="bg-purple-500"
          />
          <StatCard
            icon={Users}
            title="Total Students"
            value={stats.totalStudents}
            change={15.3}
            color="bg-primary-500"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Inquiries */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-lg"
            >
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Recent Inquiries</h2>
                <p className="text-gray-600 text-sm">Latest student inquiries and their status</p>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  {recentInquiries.map((inquiry) => (
                    <div key={inquiry.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                          <span className="text-primary-600 font-medium">
                            {inquiry.name[0]}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{inquiry.name}</h3>
                          <p className="text-sm text-gray-600">
                            {inquiry.class} • {inquiry.subject}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="flex items-center text-gray-600 text-sm">
                            <Phone className="w-4 h-4 mr-1" />
                            {inquiry.phone}
                          </div>
                          <p className="text-xs text-gray-500">{inquiry.createdAt}</p>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          inquiry.status === 'new' 
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {inquiry.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <button className="btn-primary">
                    View All Inquiries
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Actions */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 mb-6"
            >
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full bg-primary-500 hover:bg-primary-600 text-white py-2 px-4 rounded-lg transition-colors text-left">
                  Add New Course
                </button>
                <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-colors text-left">
                  Export Inquiries
                </button>
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors text-left">
                  Send Bulk SMS
                </button>
                <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg transition-colors text-left">
                  Generate Report
                </button>
              </div>
            </motion.div>

            {/* Monthly Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h2 className="text-lg font-semibold text-gray-900 mb-4">This Month</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">New Inquiries</span>
                  <span className="font-semibold text-gray-900">45</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Enrollments</span>
                  <span className="font-semibold text-gray-900">32</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Demo Classes</span>
                  <span className="font-semibold text-gray-900">28</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Follow-ups</span>
                  <span className="font-semibold text-gray-900">67</span>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-900 font-medium">Conversion Rate</span>
                    <span className="font-bold text-green-600">71.1%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard