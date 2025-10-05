const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const User = require('../models/User');
const Course = require('../models/Course');
const Inquiry = require('../models/Inquiry');

// Sample data
const users = [
  {
    name: 'Admin User',
    email: 'admin@organicclasses.com',
    password: 'admin123',
    role: 'admin'
  },
  {
    name: 'Dr. Rajesh Kumar',
    email: 'rajesh@organicclasses.com',
    password: 'teacher123',
    role: 'teacher'
  },
  {
    name: 'Ms. Priya Sharma',
    email: 'priya@organicclasses.com',
    password: 'teacher123',
    role: 'teacher'
  }
];

const courses = [
  {
    title: 'Science Foundation',
    description: 'Complete foundation course for Science students preparing for board exams with practical approach.',
    class: '9th-10th',
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology'],
    duration: '12 months',
    batchType: 'Regular',
    teacher: 'Dr. Rajesh Kumar',
    fee: {
      monthly: 1500,
      yearly: 15000,
      currency: 'INR'
    },
    timing: 'Mon-Fri: 4:00 PM - 6:00 PM',
    schedule: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      startTime: '16:00',
      endTime: '18:00'
    },
    capacity: 25,
    enrolled: 18,
    syllabus: [
      {
        topic: 'Physics Fundamentals',
        description: 'Basic concepts of motion, force, and energy',
        duration: '2 months'
      },
      {
        topic: 'Chemistry Basics',
        description: 'Atomic structure, periodic table, and chemical bonding',
        duration: '2 months'
      }
    ],
    features: [
      'Regular Tests',
      'Doubt Clearing Sessions',
      'Study Material Provided',
      'Progress Tracking'
    ],
    level: 'Beginner',
    tags: ['science', 'foundation', 'board-exam'],
    isActive: true
  },
  {
    title: 'Commerce Excellence',
    description: 'Comprehensive Commerce course for higher secondary students with focus on practical applications.',
    class: '11th-12th',
    subjects: ['Accountancy', 'Economics', 'Business Studies'],
    duration: '24 months',
    batchType: 'Regular',
    teacher: 'Ms. Priya Sharma',
    fee: {
      monthly: 1800,
      yearly: 18000,
      currency: 'INR'
    },
    timing: 'Mon-Sat: 2:00 PM - 4:00 PM',
    schedule: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      startTime: '14:00',
      endTime: '16:00'
    },
    capacity: 20,
    enrolled: 15,
    features: [
      'Case Study Method',
      'Real-world Examples',
      'Mock Tests',
      'Career Guidance'
    ],
    level: 'Intermediate',
    tags: ['commerce', 'higher-secondary', 'practical'],
    isActive: true
  },
  {
    title: 'Government School Special',
    description: 'Special batch designed for government school students with affordable fees and extra support.',
    class: '8th-10th',
    subjects: ['Physics', 'Chemistry', 'Mathematics'],
    duration: '10 months',
    batchType: 'Government School',
    teacher: 'Dr. Rajesh Kumar',
    fee: {
      monthly: 800,
      yearly: 8000,
      currency: 'INR'
    },
    timing: 'Sat-Sun: 10:00 AM - 1:00 PM',
    schedule: {
      days: ['Saturday', 'Sunday'],
      startTime: '10:00',
      endTime: '13:00'
    },
    capacity: 30,
    enrolled: 22,
    features: [
      'Free Study Material',
      'Extra Doubt Sessions',
      'Scholarship Guidance',
      'Parent Counseling'
    ],
    level: 'Beginner',
    tags: ['government-school', 'affordable', 'special-batch'],
    isActive: true
  },
  {
    title: 'Science Advanced (Medical Prep)',
    description: 'Advanced Science course for competitive exam preparation with focus on NEET/JEE.',
    class: '11th-12th',
    subjects: ['Physics', 'Chemistry', 'Biology'],
    duration: '24 months',
    batchType: 'Medical',
    teacher: 'Dr. Rajesh Kumar',
    fee: {
      monthly: 2500,
      yearly: 25000,
      currency: 'INR'
    },
    timing: 'Mon-Fri: 6:00 PM - 8:00 PM',
    schedule: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      startTime: '18:00',
      endTime: '20:00'
    },
    capacity: 15,
    enrolled: 12,
    features: [
      'NEET/JEE Focused',
      'Mock Tests',
      'Previous Year Papers',
      'Rank Prediction'
    ],
    level: 'Advanced',
    tags: ['medical', 'neet', 'competitive'],
    isActive: true
  }
];

const inquiries = [
  {
    name: 'Rahul Sharma',
    phone: '9876543210',
    email: 'rahul@example.com',
    class: '10th',
    subject: 'Physics',
    message: 'I need help with Physics for board exams',
    status: 'new',
    priority: 'medium',
    source: 'website'
  },
  {
    name: 'Priya Gupta',
    phone: '9876543211',
    email: 'priya@example.com',
    class: '12th',
    subject: 'Chemistry',
    message: 'Looking for Chemistry coaching for competitive exams',
    status: 'contacted',
    priority: 'high',
    source: 'website'
  },
  {
    name: 'Amit Kumar',
    phone: '9876543212',
    class: '9th',
    subject: 'Mathematics',
    message: 'Need help with Mathematics fundamentals',
    status: 'new',
    priority: 'medium',
    source: 'website'
  },
  {
    name: 'Sneha Patel',
    phone: '9876543213',
    email: 'sneha@example.com',
    class: '11th',
    subject: 'Accountancy',
    message: 'Want to join Commerce batch',
    status: 'enrolled',
    priority: 'low',
    source: 'website'
  },
  {
    name: 'Vikash Singh',
    phone: '9876543214',
    class: '8th',
    subject: 'General Inquiry',
    message: 'Information about government school batch',
    status: 'contacted',
    priority: 'medium',
    source: 'phone'
  }
];

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/organic_classes');
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    await Course.deleteMany({});
    await Inquiry.deleteMany({});
    console.log('🗑️  Cleared existing data');

    // Create users
    const createdUsers = await User.insertMany(users);
    console.log(`👥 Created ${createdUsers.length} users`);

    // Link courses to teachers
    const rajeshUser = createdUsers.find(user => user.name === 'Dr. Rajesh Kumar');
    const priyaUser = createdUsers.find(user => user.name === 'Ms. Priya Sharma');

    // Update courses with teacher IDs
    courses.forEach(course => {
      if (course.teacher === 'Dr. Rajesh Kumar') {
        course.teacherId = rajeshUser._id;
      } else if (course.teacher === 'Ms. Priya Sharma') {
        course.teacherId = priyaUser._id;
      }
    });

    // Create courses
    const createdCourses = await Course.insertMany(courses);
    console.log(`📚 Created ${createdCourses.length} courses`);

    // Create inquiries with some assigned to admin
    const adminUser = createdUsers.find(user => user.role === 'admin');
    inquiries.forEach((inquiry, index) => {
      if (index % 2 === 0) {
        inquiry.assignedTo = adminUser._id;
      }
    });

    const createdInquiries = await Inquiry.insertMany(inquiries);
    console.log(`📝 Created ${createdInquiries.length} inquiries`);

    console.log('\n🎉 Database seeded successfully!');
    console.log('\n📋 Admin Credentials:');
    console.log('Email: admin@organicclasses.com');
    console.log('Password: admin123');
    console.log('\n📋 Teacher Credentials:');
    console.log('Dr. Rajesh Kumar - rajesh@organicclasses.com / teacher123');
    console.log('Ms. Priya Sharma - priya@organicclasses.com / teacher123');

  } catch (error) {
    console.error('❌ Error seeding database:', error);
  } finally {
    // Close connection
    await mongoose.connection.close();
    console.log('🔐 MongoDB connection closed');
    process.exit(0);
  }
}

// Run the seed function
seedDatabase();