# Organic Classes - Quick Setup Guide

## 🚀 Quick Start (5 minutes)

### 1. Install Dependencies

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd frontend  
npm install
```

### 2. Setup Database

**Option A: Local MongoDB**
```bash
# Install MongoDB locally and start service
# Windows: Download from mongodb.com
# macOS: brew install mongodb-community
# Ubuntu: sudo apt install mongodb

# Start MongoDB
mongod
```

**Option B: MongoDB Atlas (Recommended)**
1. Go to [MongoDB Atlas](https://cloud.mongodb.com)
2. Create free account and cluster
3. Get connection string
4. Update `.env` file

### 3. Environment Setup

**Backend** - Create `backend/.env`:
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/organic_classes
JWT_SECRET=your_super_secret_jwt_token_change_this_in_production
ADMIN_EMAIL=admin@organicclasses.com
ADMIN_PASSWORD=admin123
FRONTEND_URL=http://localhost:3000
```

### 4. Seed Database
```bash
cd backend
npm run seed
```

### 5. Start Application

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

### 6. Access Application

- **Website**: http://localhost:3000
- **API**: http://localhost:5000
- **Admin Login**: admin@organicclasses.com / admin123

---

## 📱 Features Checklist

### ✅ Completed Features
- [x] Responsive landing page with hero section
- [x] Course catalog with filtering
- [x] Contact form with validation
- [x] About page with faculty profiles
- [x] Results page with student achievements
- [x] Testimonials carousel
- [x] Complete REST API with authentication
- [x] Inquiry management system
- [x] Course management system
- [x] Statistics and analytics
- [x] Database models and seeding
- [x] Rate limiting and security
- [x] Mobile-responsive design
- [x] Smooth animations with Framer Motion

### 🔄 Optional Enhancements
- [ ] Admin dashboard UI (basic structure provided)
- [ ] Email notifications
- [ ] Payment integration
- [ ] Student portal
- [ ] Online classes integration
- [ ] SMS notifications
- [ ] Advanced analytics
- [ ] Multi-language support

---

## 🛠️ Development Commands

### Backend
```bash
npm run dev      # Start development server
npm start        # Start production server  
npm run seed     # Seed database with sample data
```

### Frontend
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

---

## 🚀 Deployment Options

### Frontend (Vercel - Recommended)
1. Push code to GitHub
2. Connect to Vercel
3. Deploy automatically

### Backend (Railway/Render)
1. Connect GitHub repository
2. Set environment variables
3. Deploy

### Database (MongoDB Atlas)
1. Create cluster
2. Get connection string
3. Update environment variables

---

## 📞 Support

If you encounter any issues:

1. **Check Common Issues** below
2. **Contact**: support@organicclasses.com
3. **Phone**: +91 98765 43210

---

## ❗ Common Issues & Solutions

### Issue: MongoDB Connection Error
**Solution**: 
- Ensure MongoDB is running
- Check connection string in `.env`
- For Atlas: Check IP whitelist

### Issue: Port Already in Use
**Solution**:
```bash
# Kill process on port 5000
npx kill-port 5000

# Kill process on port 3000  
npx kill-port 3000
```

### Issue: Missing Dependencies
**Solution**:
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: CORS Errors
**Solution**:
- Check `FRONTEND_URL` in backend `.env`
- Ensure both frontend and backend are running

---

## 🔐 Security Notes

**Important**: Change these in production:
- JWT_SECRET
- Admin credentials
- Database passwords
- API keys

**Recommended**:
- Use environment variables
- Enable HTTPS
- Regular security updates
- Backup database regularly

---

## 📈 Performance Tips

1. **Optimize Images**: Use WebP format
2. **Enable Caching**: Add Redis for production
3. **CDN**: Use for static assets
4. **Database**: Add indexes for queries
5. **Bundle Size**: Analyze and optimize

---

Made with ❤️ for Organic Classes