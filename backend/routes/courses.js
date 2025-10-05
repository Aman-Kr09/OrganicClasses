const express = require('express');
const Joi = require('joi');
const Course = require('../models/Course');
const auth = require('../middleware/auth');

const router = express.Router();

// Validation schemas
const courseSchema = Joi.object({
  title: Joi.string().max(100).required(),
  description: Joi.string().max(500).required(),
  class: Joi.string().required(),
  subjects: Joi.array().items(
    Joi.string().valid(
      'Physics', 'Chemistry', 'Mathematics', 'Biology',
      'Accountancy', 'Economics', 'Business Studies',
      'English', 'Hindi', 'Social Science'
    )
  ).min(1).required(),
  duration: Joi.string().required(),
  batchType: Joi.string().valid(
    'Regular', 'Government School', 'Medical', 'Engineering', 'Commerce', 'Special'
  ).required(),
  teacher: Joi.string().max(50).required(),
  teacherId: Joi.string().pattern(/^[0-9a-fA-F]{24}$/),
  fee: Joi.object({
    monthly: Joi.number().min(0),
    yearly: Joi.number().min(0),
    currency: Joi.string().default('INR')
  }),
  timing: Joi.string().required(),
  schedule: Joi.object({
    days: Joi.array().items(
      Joi.string().valid('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday')
    ),
    startTime: Joi.string(),
    endTime: Joi.string()
  }),
  capacity: Joi.number().min(1).max(50).default(20),
  syllabus: Joi.array().items(
    Joi.object({
      topic: Joi.string(),
      description: Joi.string(),
      duration: Joi.string()
    })
  ),
  features: Joi.array().items(Joi.string()),
  prerequisites: Joi.array().items(Joi.string()),
  startDate: Joi.date(),
  endDate: Joi.date(),
  registrationDeadline: Joi.date(),
  level: Joi.string().valid('Beginner', 'Intermediate', 'Advanced').default('Beginner'),
  tags: Joi.array().items(Joi.string()),
  isActive: Joi.boolean().default(true)
});

// @route   GET /api/courses
// @desc    Get all courses (public)
// @access  Public
router.get('/', async (req, res) => {
  try {
    const {
      page = 1,
      limit = 12,
      class: studentClass,
      subject,
      batchType,
      isActive = true,
      sort = '-createdAt',
      search
    } = req.query;

    // Build filter object
    const filter = { isActive };
    
    if (studentClass) {
      filter.class = { $regex: studentClass, $options: 'i' };
    }
    
    if (subject) {
      filter.subjects = { $in: [subject] };
    }
    
    if (batchType) {
      filter.batchType = batchType;
    }
    
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { teacher: { $regex: search, $options: 'i' } },
        { subjects: { $in: [new RegExp(search, 'i')] } }
      ];
    }

    // Calculate pagination
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const skip = (pageNum - 1) * limitNum;

    // Get courses
    const [courses, total] = await Promise.all([
      Course.find(filter)
        .populate('teacherId', 'name email')
        .sort(sort)
        .skip(skip)
        .limit(limitNum),
      Course.countDocuments(filter)
    ]);

    res.json({
      success: true,
      data: {
        courses,
        pagination: {
          current: pageNum,
          pages: Math.ceil(total / limitNum),
          total,
          limit: limitNum
        }
      }
    });
  } catch (error) {
    console.error('Get courses error:', error);
    res.status(500).json({
      error: 'Server Error',
      message: 'Failed to fetch courses'
    });
  }
});

// @route   GET /api/courses/:id
// @desc    Get single course
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id)
      .populate('teacherId', 'name email');

    if (!course) {
      return res.status(404).json({
        error: 'Course not found',
        message: 'The requested course does not exist'
      });
    }

    res.json({
      success: true,
      course
    });
  } catch (error) {
    console.error('Get course error:', error);
    res.status(500).json({
      error: 'Server Error',
      message: 'Failed to fetch course'
    });
  }
});

// @route   POST /api/courses
// @desc    Create new course
// @access  Private
router.post('/', auth, async (req, res) => {
  try {
    // Validate input
    const { error } = courseSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        error: 'Validation Error',
        message: error.details[0].message
      });
    }

    // Create course
    const course = new Course(req.body);
    await course.save();

    // Populate teacher info before sending response
    await course.populate('teacherId', 'name email');

    res.status(201).json({
      success: true,
      message: 'Course created successfully',
      course
    });
  } catch (error) {
    console.error('Create course error:', error);
    res.status(500).json({
      error: 'Server Error',
      message: 'Failed to create course'
    });
  }
});

// @route   PUT /api/courses/:id
// @desc    Update course
// @access  Private
router.put('/:id', auth, async (req, res) => {
  try {
    // Validate input
    const { error } = courseSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        error: 'Validation Error',
        message: error.details[0].message
      });
    }

    const course = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('teacherId', 'name email');

    if (!course) {
      return res.status(404).json({
        error: 'Course not found',
        message: 'The requested course does not exist'
      });
    }

    res.json({
      success: true,
      message: 'Course updated successfully',
      course
    });
  } catch (error) {
    console.error('Update course error:', error);
    res.status(500).json({
      error: 'Server Error',
      message: 'Failed to update course'
    });
  }
});

// @route   DELETE /api/courses/:id
// @desc    Delete course
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);

    if (!course) {
      return res.status(404).json({
        error: 'Course not found',
        message: 'The requested course does not exist'
      });
    }

    res.json({
      success: true,
      message: 'Course deleted successfully'
    });
  } catch (error) {
    console.error('Delete course error:', error);
    res.status(500).json({
      error: 'Server Error',
      message: 'Failed to delete course'
    });
  }
});

// @route   GET /api/courses/stats/summary
// @desc    Get course statistics
// @access  Private
router.get('/stats/summary', auth, async (req, res) => {
  try {
    const stats = await Course.aggregate([
      {
        $group: {
          _id: '$batchType',
          count: { $sum: 1 },
          totalEnrolled: { $sum: '$enrolled' },
          totalCapacity: { $sum: '$capacity' }
        }
      }
    ]);

    const classStats = await Course.aggregate([
      {
        $group: {
          _id: '$class',
          count: { $sum: 1 }
        }
      },
      { $sort: { _id: 1 } }
    ]);

    const subjectStats = await Course.aggregate([
      { $unwind: '$subjects' },
      {
        $group: {
          _id: '$subjects',
          count: { $sum: 1 }
        }
      },
      { $sort: { count: -1 } }
    ]);

    const totalCourses = await Course.countDocuments({ isActive: true });
    const totalEnrolled = await Course.aggregate([
      { $group: { _id: null, total: { $sum: '$enrolled' } } }
    ]);

    res.json({
      success: true,
      stats: {
        byBatchType: stats,
        byClass: classStats,
        bySubject: subjectStats,
        totalCourses,
        totalEnrolled: totalEnrolled[0]?.total || 0
      }
    });
  } catch (error) {
    console.error('Get course stats error:', error);
    res.status(500).json({
      error: 'Server Error',
      message: 'Failed to fetch course statistics'
    });
  }
});

// @route   POST /api/courses/:id/enroll
// @desc    Enroll student in course
// @access  Public (for now, can be made private later)
router.post('/:id/enroll', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({
        error: 'Course not found',
        message: 'The requested course does not exist'
      });
    }

    if (course.enrolled >= course.capacity) {
      return res.status(400).json({
        error: 'Course full',
        message: 'This course has reached its maximum capacity'
      });
    }

    if (!course.isActive) {
      return res.status(400).json({
        error: 'Course inactive',
        message: 'This course is not currently accepting enrollments'
      });
    }

    // Increment enrolled count
    course.enrolled += 1;
    await course.save();

    res.json({
      success: true,
      message: 'Enrollment successful',
      course: {
        id: course._id,
        title: course.title,
        enrolled: course.enrolled,
        availableSeats: course.capacity - course.enrolled
      }
    });
  } catch (error) {
    console.error('Enroll in course error:', error);
    res.status(500).json({
      error: 'Server Error',
      message: 'Failed to enroll in course'
    });
  }
});

module.exports = router;