const express = require('express');
const Joi = require('joi');
const Inquiry = require('../models/Inquiry');
const auth = require('../middleware/auth');

const router = express.Router();

// Validation schema
const inquirySchema = Joi.object({
  name: Joi.string().max(100).required(),
  phone: Joi.string().pattern(/^[6-9]\d{9}$/).required().messages({
    'string.pattern.base': 'Please provide a valid 10-digit phone number'
  }),
  email: Joi.string().email().allow(''),
  class: Joi.string().valid('5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th').required(),
  subject: Joi.string().valid(
    'Physics', 'Chemistry', 'Mathematics', 'Biology',
    'Accountancy', 'Economics', 'Business Studies', 'General Inquiry'
  ).required(),
  message: Joi.string().max(500).allow('')
});

const updateInquirySchema = Joi.object({
  status: Joi.string().valid('new', 'contacted', 'enrolled', 'not_interested'),
  priority: Joi.string().valid('low', 'medium', 'high'),
  notes: Joi.string().max(1000).allow(''),
  followUpDate: Joi.date(),
  assignedTo: Joi.string().pattern(/^[0-9a-fA-F]{24}$/)
});

// @route   POST /api/inquiries
// @desc    Create new inquiry
// @access  Public
router.post('/', async (req, res) => {
  try {
    // Validate input
    const { error } = inquirySchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        error: 'Validation Error',
        message: error.details[0].message
      });
    }

    // Check for duplicate phone number within last 24 hours
    const existingInquiry = await Inquiry.findOne({
      phone: req.body.phone,
      createdAt: { $gte: new Date(Date.now() - 24 * 60 * 60 * 1000) }
    });

    if (existingInquiry) {
      return res.status(400).json({
        error: 'Duplicate inquiry',
        message: 'An inquiry with this phone number was already submitted today. Please call us directly for immediate assistance.'
      });
    }

    // Create inquiry
    const inquiry = new Inquiry(req.body);
    await inquiry.save();

    res.status(201).json({
      success: true,
      message: 'Inquiry submitted successfully! We will contact you soon.',
      inquiry: {
        id: inquiry._id,
        name: inquiry.name,
        phone: inquiry.phone,
        class: inquiry.class,
        subject: inquiry.subject,
        createdAt: inquiry.createdAt
      }
    });
  } catch (error) {
    console.error('Create inquiry error:', error);
    res.status(500).json({
      error: 'Server Error',
      message: 'Failed to submit inquiry. Please try again.'
    });
  }
});

// @route   GET /api/inquiries
// @desc    Get all inquiries (with filtering and pagination)
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      status,
      class: studentClass,
      subject,
      priority,
      sort = '-createdAt',
      search
    } = req.query;

    // Build filter object
    const filter = {};
    
    if (status) filter.status = status;
    if (studentClass) filter.class = studentClass;
    if (subject) filter.subject = subject;
    if (priority) filter.priority = priority;
    
    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: 'i' } },
        { phone: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } }
      ];
    }

    // Calculate pagination
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const skip = (pageNum - 1) * limitNum;

    // Get inquiries
    const [inquiries, total] = await Promise.all([
      Inquiry.find(filter)
        .populate('assignedTo', 'name email')
        .sort(sort)
        .skip(skip)
        .limit(limitNum),
      Inquiry.countDocuments(filter)
    ]);

    res.json({
      success: true,
      data: {
        inquiries,
        pagination: {
          current: pageNum,
          pages: Math.ceil(total / limitNum),
          total,
          limit: limitNum
        }
      }
    });
  } catch (error) {
    console.error('Get inquiries error:', error);
    res.status(500).json({
      error: 'Server Error',
      message: 'Failed to fetch inquiries'
    });
  }
});

// @route   GET /api/inquiries/:id
// @desc    Get single inquiry
// @access  Private
router.get('/:id', auth, async (req, res) => {
  try {
    const inquiry = await Inquiry.findById(req.params.id)
      .populate('assignedTo', 'name email');

    if (!inquiry) {
      return res.status(404).json({
        error: 'Inquiry not found',
        message: 'The requested inquiry does not exist'
      });
    }

    res.json({
      success: true,
      inquiry
    });
  } catch (error) {
    console.error('Get inquiry error:', error);
    res.status(500).json({
      error: 'Server Error',
      message: 'Failed to fetch inquiry'
    });
  }
});

// @route   PUT /api/inquiries/:id
// @desc    Update inquiry
// @access  Private
router.put('/:id', auth, async (req, res) => {
  try {
    // Validate input
    const { error } = updateInquirySchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        error: 'Validation Error',
        message: error.details[0].message
      });
    }

    const inquiry = await Inquiry.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('assignedTo', 'name email');

    if (!inquiry) {
      return res.status(404).json({
        error: 'Inquiry not found',
        message: 'The requested inquiry does not exist'
      });
    }

    res.json({
      success: true,
      message: 'Inquiry updated successfully',
      inquiry
    });
  } catch (error) {
    console.error('Update inquiry error:', error);
    res.status(500).json({
      error: 'Server Error',
      message: 'Failed to update inquiry'
    });
  }
});

// @route   DELETE /api/inquiries/:id
// @desc    Delete inquiry
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const inquiry = await Inquiry.findByIdAndDelete(req.params.id);

    if (!inquiry) {
      return res.status(404).json({
        error: 'Inquiry not found',
        message: 'The requested inquiry does not exist'
      });
    }

    res.json({
      success: true,
      message: 'Inquiry deleted successfully'
    });
  } catch (error) {
    console.error('Delete inquiry error:', error);
    res.status(500).json({
      error: 'Server Error',
      message: 'Failed to delete inquiry'
    });
  }
});

// @route   GET /api/inquiries/stats/summary
// @desc    Get inquiry statistics
// @access  Private
router.get('/stats/summary', auth, async (req, res) => {
  try {
    const stats = await Inquiry.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 }
        }
      }
    ]);

    const classStats = await Inquiry.aggregate([
      {
        $group: {
          _id: '$class',
          count: { $sum: 1 }
        }
      },
      { $sort: { _id: 1 } }
    ]);

    const subjectStats = await Inquiry.aggregate([
      {
        $group: {
          _id: '$subject',
          count: { $sum: 1 }
        }
      },
      { $sort: { count: -1 } }
    ]);

    // Recent inquiries (last 7 days)
    const recentCount = await Inquiry.countDocuments({
      createdAt: { $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) }
    });

    res.json({
      success: true,
      stats: {
        byStatus: stats,
        byClass: classStats,
        bySubject: subjectStats,
        recentInquiries: recentCount,
        total: await Inquiry.countDocuments()
      }
    });
  } catch (error) {
    console.error('Get inquiry stats error:', error);
    res.status(500).json({
      error: 'Server Error',
      message: 'Failed to fetch inquiry statistics'
    });
  }
});

module.exports = router;