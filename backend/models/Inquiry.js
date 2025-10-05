const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot be more than 100 characters']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
    match: [/^[6-9]\d{9}$/, 'Please provide a valid 10-digit phone number']
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please provide a valid email'
    ]
  },
  class: {
    type: String,
    required: [true, 'Class is required'],
    enum: ['5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th']
  },
  subject: {
    type: String,
    required: [true, 'Subject is required'],
    enum: [
      'Physics',
      'Chemistry', 
      'Mathematics',
      'Biology',
      'Accountancy',
      'Economics',
      'Business Studies',
      'General Inquiry'
    ]
  },
  message: {
    type: String,
    trim: true,
    maxlength: [500, 'Message cannot be more than 500 characters']
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'enrolled', 'not_interested'],
    default: 'new'
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium'
  },
  source: {
    type: String,
    enum: ['website', 'phone', 'social_media', 'referral', 'walk_in'],
    default: 'website'
  },
  notes: {
    type: String,
    trim: true,
    maxlength: [1000, 'Notes cannot be more than 1000 characters']
  },
  followUpDate: {
    type: Date
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt field before saving
inquirySchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Index for faster queries
inquirySchema.index({ status: 1, createdAt: -1 });
inquirySchema.index({ phone: 1 });
inquirySchema.index({ class: 1, subject: 1 });

module.exports = mongoose.model('Inquiry', inquirySchema);