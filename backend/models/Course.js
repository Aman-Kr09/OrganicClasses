const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Course title is required'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Course description is required'],
    trim: true,
    maxlength: [500, 'Description cannot be more than 500 characters']
  },
  class: {
    type: String,
    required: [true, 'Class range is required'],
    trim: true
  },
  subjects: [{
    type: String,
    required: true,
    enum: [
      'Physics',
      'Chemistry', 
      'Mathematics',
      'Biology',
      'Accountancy',
      'Economics',
      'Business Studies',
      'English',
      'Hindi',
      'Social Science'
    ]
  }],
  duration: {
    type: String,
    required: [true, 'Duration is required'],
    trim: true
  },
  batchType: {
    type: String,
    required: [true, 'Batch type is required'],
    enum: ['Regular', 'Government School', 'Medical', 'Engineering', 'Commerce', 'Special'],
    default: 'Regular'
  },
  teacher: {
    type: String,
    required: [true, 'Teacher name is required'],
    trim: true,
    maxlength: [50, 'Teacher name cannot be more than 50 characters']
  },
  teacherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  fee: {
    monthly: {
      type: Number,
      min: [0, 'Fee cannot be negative']
    },
    yearly: {
      type: Number,
      min: [0, 'Fee cannot be negative']
    },
    currency: {
      type: String,
      default: 'INR'
    }
  },
  timing: {
    type: String,
    required: [true, 'Class timing is required'],
    trim: true
  },
  schedule: {
    days: [{
      type: String,
      enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    }],
    startTime: String,
    endTime: String
  },
  capacity: {
    type: Number,
    default: 20,
    min: [1, 'Capacity must be at least 1'],
    max: [50, 'Capacity cannot exceed 50']
  },
  enrolled: {
    type: Number,
    default: 0,
    min: [0, 'Enrolled count cannot be negative']
  },
  syllabus: [{
    topic: String,
    description: String,
    duration: String
  }],
  features: [{
    type: String,
    trim: true
  }],
  prerequisites: [{
    type: String,
    trim: true
  }],
  isActive: {
    type: Boolean,
    default: true
  },
  startDate: {
    type: Date
  },
  endDate: {
    type: Date
  },
  registrationDeadline: {
    type: Date
  },
  level: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    default: 'Beginner'
  },
  tags: [{
    type: String,
    trim: true
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Virtual for availability
courseSchema.virtual('availableSeats').get(function() {
  return this.capacity - this.enrolled;
});

// Virtual for fee display
courseSchema.virtual('feeDisplay').get(function() {
  if (this.fee.yearly) {
    return `₹${this.fee.yearly.toLocaleString()}/year`;
  } else if (this.fee.monthly) {
    return `₹${this.fee.monthly.toLocaleString()}/month`;
  }
  return 'Contact for fee details';
});

// Update the updatedAt field before saving
courseSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Ensure virtuals are included when converting to JSON
courseSchema.set('toJSON', { virtuals: true });

// Index for faster queries
courseSchema.index({ class: 1, batchType: 1 });
courseSchema.index({ subjects: 1 });
courseSchema.index({ isActive: 1, startDate: 1 });

module.exports = mongoose.model('Course', courseSchema);