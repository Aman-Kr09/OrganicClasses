# 🏫 Organic Classes - Complete Educational Website

A modern, full-stack educational coaching website built with Next.js, Node.js, Express, and MongoDB. This project includes a beautiful frontend with smooth animations and a robust backend with admin dashboard for managing inquiries and courses.

## 🌟 Features

### Frontend Features
- **Modern Design**: Clean, responsive UI with Tailwind CSS and Framer Motion animations
- **Home Page**: Hero section, features, testimonials, and stats
- **Courses Page**: Filterable course catalog with detailed information
- **About Page**: Faculty profiles, mission/vision, and company story
- **Results Page**: Student achievements and success stories
- **Contact Page**: Inquiry form with validation and Google Maps integration
- **Mobile Responsive**: Optimized for all device sizes

### Backend Features
- **RESTful API**: Well-structured Express.js API with proper error handling
- **Authentication**: JWT-based admin authentication system
- **Database**: MongoDB with Mongoose ODM
- **Inquiry Management**: Complete CRUD operations for student inquiries
- **Course Management**: Add, edit, and manage courses
- **Statistics Dashboard**: Analytics and performance metrics
- **Rate Limiting**: Protection against spam and abuse
- **Input Validation**: Comprehensive data validation with Joi

### Admin Dashboard Features
- **Secure Login**: JWT-based authentication
- **Inquiry Management**: View, update, and manage student inquiries
- **Course Management**: Add, edit, and delete courses
- **Analytics**: Dashboard with statistics and performance metrics
- **User Management**: Manage admin and teacher accounts

## 🚀 Tech Stack

### Frontend
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Beautiful icons
- **React Hot Toast**: Toast notifications
- **Axios**: HTTP client

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB ODM
- **JWT**: Authentication tokens
- **Joi**: Data validation
- **Bcrypt**: Password hashing
- **Helmet**: Security headers
- **Morgan**: HTTP request logger
- **CORS**: Cross-origin resource sharing

## 📁 Project Structure

```
Organic_Classes/
├── frontend/                 # Next.js frontend application
│   ├── app/                 # App router pages
│   │   ├── about/           # About page
│   │   ├── contact/         # Contact page
│   │   ├── courses/         # Courses page
│   │   ├── results/         # Results page
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   ├── components/          # Reusable components
│   │   ├── Features.tsx     # Features section
│   │   ├── Footer.tsx       # Footer component
│   │   ├── Hero.tsx         # Hero section
│   │   ├── Navbar.tsx       # Navigation bar
│   │   └── Testimonials.tsx # Testimonials carousel
│   ├── package.json         # Frontend dependencies
│   ├── tailwind.config.js   # Tailwind configuration
│   └── next.config.js       # Next.js configuration
├── backend/                 # Express.js backend API
│   ├── models/              # Database models
│   │   ├── User.js          # User model
│   │   ├── Course.js        # Course model
│   │   └── Inquiry.js       # Inquiry model
│   ├── routes/              # API routes
│   │   ├── auth.js          # Authentication routes
│   │   ├── courses.js       # Course management routes
│   │   ├── inquiries.js     # Inquiry management routes
│   │   └── stats.js         # Statistics routes
│   ├── middleware/          # Custom middleware
│   │   └── auth.js          # JWT authentication middleware
│   ├── scripts/             # Utility scripts
│   │   └── seedData.js      # Database seeding script
│   ├── package.json         # Backend dependencies
│   ├── server.js            # Express server
│   └── .env.example         # Environment variables template
└── README.md                # Project documentation
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local installation or MongoDB Atlas)
- Git

### 1. Clone the Repository
```bash
git clone <repository-url>
cd Organic_Classes
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Edit .env file with your configuration
# Update MongoDB URI, JWT secret, and other settings
```

#### Environment Variables (.env)
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/organic_classes
JWT_SECRET=your_super_secret_jwt_token_here
ADMIN_EMAIL=admin@organicclasses.com
ADMIN_PASSWORD=admin123
FRONTEND_URL=http://localhost:3000
```

### 3. Database Setup

```bash
# Start MongoDB service (if running locally)
# For Windows: mongod
# For macOS/Linux: sudo service mongod start

# Seed the database with sample data
npm run seed
```

### 4. Start Backend Server

```bash
# Development mode
npm run dev

# Production mode
npm start
```

The backend server will start on `http://localhost:5000`

### 5. Frontend Setup

```bash
# Navigate to frontend directory (new terminal)
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend will start on `http://localhost:3000`

## 🎯 Usage

### For Students/Parents
1. **Browse Courses**: Visit `/courses` to see available courses
2. **Learn About Us**: Visit `/about` to know more about the institute
3. **View Results**: Check `/results` for student achievements
4. **Contact Us**: Use `/contact` to submit inquiries or book demo classes

### For Administrators
1. **Login**: Access admin dashboard (you'll need to build this separately or use API directly)
2. **Manage Inquiries**: View and respond to student inquiries
3. **Manage Courses**: Add, edit, or remove courses
4. **View Analytics**: Check statistics and performance metrics

## 📊 API Endpoints

### Authentication
- `POST /api/auth/login` - Admin login
- `POST /api/auth/register` - Register new admin/teacher
- `GET /api/auth/me` - Get current user info
- `POST /api/auth/change-password` - Change password

### Inquiries
- `POST /api/inquiries` - Create new inquiry
- `GET /api/inquiries` - Get all inquiries (admin)
- `GET /api/inquiries/:id` - Get single inquiry
- `PUT /api/inquiries/:id` - Update inquiry
- `DELETE /api/inquiries/:id` - Delete inquiry
- `GET /api/inquiries/stats/summary` - Get inquiry statistics

### Courses
- `GET /api/courses` - Get all courses (public)
- `GET /api/courses/:id` - Get single course
- `POST /api/courses` - Create new course (admin)
- `PUT /api/courses/:id` - Update course (admin)
- `DELETE /api/courses/:id` - Delete course (admin)
- `POST /api/courses/:id/enroll` - Enroll in course
- `GET /api/courses/stats/summary` - Get course statistics

### Statistics
- `GET /api/stats` - Get dashboard statistics
- `GET /api/stats/inquiries` - Get detailed inquiry stats
- `GET /api/stats/courses` - Get detailed course stats

## 🔐 Default Admin Credentials

After running the seed script, use these credentials to access admin features:

- **Email**: admin@organicclasses.com
- **Password**: admin123

**⚠️ Important**: Change these credentials in production!

## 🚀 Deployment

### Frontend Deployment (Vercel)
1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variables if needed
4. Deploy

### Backend Deployment (Railway/Heroku)
1. Create account on Railway/Heroku
2. Connect GitHub repository
3. Set environment variables
4. Deploy

### Database (MongoDB Atlas)
1. Create MongoDB Atlas account
2. Create cluster and database
3. Update `MONGODB_URI` in environment variables
4. Whitelist deployment server IP

## 🎨 Customization

### Colors & Branding
- Update `tailwind.config.js` for color scheme
- Modify logo and branding in components
- Update metadata in `layout.tsx`

### Content
- Update course data in backend
- Modify testimonials and success stories
- Update faculty information in About page
- Customize contact information

### Features
- Add new pages as needed
- Extend API with additional endpoints
- Implement email notifications
- Add payment integration

## 🧪 Testing

### Manual Testing
1. Test all forms and validations
2. Verify API endpoints with Postman
3. Check responsive design on different devices
4. Test authentication flow

### Sample API Requests

#### Create Inquiry
```bash
curl -X POST http://localhost:5000/api/inquiries \
-H "Content-Type: application/json" \
-d '{
  "name": "Test Student",
  "phone": "9876543210",
  "email": "test@example.com",
  "class": "10th",
  "subject": "Physics",
  "message": "I need help with Physics"
}'
```

#### Admin Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
-H "Content-Type: application/json" \
-d '{
  "email": "admin@organicclasses.com",
  "password": "admin123"
}'
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and questions:
- Email: support@organicclasses.com
- Phone: +91 98765 43210
- Instagram: [@organic_classes](https://www.instagram.com/organic_classes/)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
- MongoDB team for the database
- All open-source contributors

---

**Made with ❤️ for Organic Classes**