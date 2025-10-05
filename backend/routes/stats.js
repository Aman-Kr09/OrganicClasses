const express = require('express');
const Inquiry = require('../models/Inquiry');
const Course = require('../models/Course');
const User = require('../models/User');
const auth = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/stats
// @desc    Get dashboard statistics
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    // Get current date and calculate date ranges
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay()));
    const startOfDay = new Date(now.setHours(0, 0, 0, 0));

    // Parallel queries for better performance
    const [
      totalInquiries,
      newInquiries,
      todayInquiries,
      weekInquiries,
      monthInquiries,
      totalCourses,
      activeCourses,
      totalEnrollments,
      totalUsers,
      inquiryStats,
      courseStats,
      recentInquiries
    ] = await Promise.all([
      // Inquiry statistics
      Inquiry.countDocuments(),
      Inquiry.countDocuments({ status: 'new' }),
      Inquiry.countDocuments({ createdAt: { $gte: startOfDay } }),
      Inquiry.countDocuments({ createdAt: { $gte: startOfWeek } }),
      Inquiry.countDocuments({ createdAt: { $gte: startOfMonth } }),
      
      // Course statistics  
      Course.countDocuments(),
      Course.countDocuments({ isActive: true }),
      Course.aggregate([
        { $group: { _id: null, total: { $sum: '$enrolled' } } }
      ]),
      
      // User statistics
      User.countDocuments({ isActive: true }),
      
      // Inquiry breakdown by status
      Inquiry.aggregate([
        {
          $group: {
            _id: '$status',
            count: { $sum: 1 }
          }
        }
      ]),
      
      // Course breakdown by batch type
      Course.aggregate([
        {
          $group: {
            _id: '$batchType',
            count: { $sum: 1 },
            enrolled: { $sum: '$enrolled' },
            capacity: { $sum: '$capacity' }
          }
        }
      ]),
      
      // Recent inquiries for dashboard
      Inquiry.find()
        .sort({ createdAt: -1 })
        .limit(5)
        .select('name phone class subject status createdAt')
    ]);

    // Subject-wise inquiry statistics
    const subjectStats = await Inquiry.aggregate([
      {
        $group: {
          _id: '$subject',
          count: { $sum: 1 }
        }
      },
      { $sort: { count: -1 } },
      { $limit: 10 }
    ]);

    // Class-wise inquiry statistics
    const classStats = await Inquiry.aggregate([
      {
        $group: {
          _id: '$class',
          count: { $sum: 1 }
        }
      },
      { $sort: { _id: 1 } }
    ]);

    // Monthly inquiry trend (last 6 months)
    const monthlyTrend = await Inquiry.aggregate([
      {
        $match: {
          createdAt: {
            $gte: new Date(now.getFullYear(), now.getMonth() - 5, 1)
          }
        }
      },
      {
        $group: {
          _id: {
            year: { $year: '$createdAt' },
            month: { $month: '$createdAt' }
          },
          count: { $sum: 1 }
        }
      },
      { $sort: { '_id.year': 1, '_id.month': 1 } }
    ]);

    // Weekly inquiry trend (last 4 weeks)
    const weeklyTrend = await Inquiry.aggregate([
      {
        $match: {
          createdAt: {
            $gte: new Date(Date.now() - 28 * 24 * 60 * 60 * 1000)
          }
        }
      },
      {
        $group: {
          _id: {
            week: { $week: '$createdAt' },
            year: { $year: '$createdAt' }
          },
          count: { $sum: 1 }
        }
      },
      { $sort: { '_id.year': 1, '_id.week': 1 } }
    ]);

    // Performance metrics
    const conversionRate = totalInquiries > 0 
      ? ((await Inquiry.countDocuments({ status: 'enrolled' }) / totalInquiries) * 100).toFixed(2)
      : 0;

    const enrollmentRate = totalEnrollments[0]?.total || 0;
    const avgCapacityUtilization = activeCourses > 0 
      ? ((enrollmentRate / (await Course.aggregate([
          { $match: { isActive: true } },
          { $group: { _id: null, total: { $sum: '$capacity' } } }
        ]))[0]?.total || 1) * 100).toFixed(2)
      : 0;

    res.json({
      success: true,
      stats: {
        overview: {
          totalInquiries,
          newInquiries,
          todayInquiries,
          weekInquiries,
          monthInquiries,
          totalCourses,
          activeCourses,
          totalEnrollments: enrollmentRate,
          totalUsers,
          conversionRate: parseFloat(conversionRate),
          capacityUtilization: parseFloat(avgCapacityUtilization)
        },
        inquiries: {
          byStatus: inquiryStats,
          bySubject: subjectStats,
          byClass: classStats,
          monthlyTrend,
          weeklyTrend,
          recent: recentInquiries
        },
        courses: {
          byBatchType: courseStats,
          totalActive: activeCourses,
          totalEnrollments: enrollmentRate
        },
        performance: {
          conversionRate: parseFloat(conversionRate),
          enrollmentRate,
          capacityUtilization: parseFloat(avgCapacityUtilization),
          avgInquiriesPerDay: (totalInquiries / 30).toFixed(1), // Rough estimate
          responseTime: '< 2 hours' // This could be calculated based on actual data
        }
      }
    });
  } catch (error) {
    console.error('Get stats error:', error);
    res.status(500).json({
      error: 'Server Error',
      message: 'Failed to fetch statistics'
    });
  }
});

// @route   GET /api/stats/inquiries
// @desc    Get detailed inquiry statistics
// @access  Private
router.get('/inquiries', auth, async (req, res) => {
  try {
    const { period = '30' } = req.query;
    const days = parseInt(period);
    const startDate = new Date(Date.now() - days * 24 * 60 * 60 * 1000);

    const stats = await Inquiry.aggregate([
      { $match: { createdAt: { $gte: startDate } } },
      {
        $group: {
          _id: {
            date: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } }
          },
          count: { $sum: 1 },
          byStatus: {
            $push: '$status'
          }
        }
      },
      { $sort: { '_id.date': 1 } }
    ]);

    res.json({
      success: true,
      period: `${days} days`,
      stats
    });
  } catch (error) {
    console.error('Get inquiry stats error:', error);
    res.status(500).json({
      error: 'Server Error',
      message: 'Failed to fetch inquiry statistics'
    });
  }
});

// @route   GET /api/stats/courses
// @desc    Get detailed course statistics
// @access  Private
router.get('/courses', auth, async (req, res) => {
  try {
    const courseStats = await Course.aggregate([
      {
        $group: {
          _id: '$batchType',
          courses: { $sum: 1 },
          totalEnrolled: { $sum: '$enrolled' },
          totalCapacity: { $sum: '$capacity' },
          avgUtilization: {
            $avg: {
              $multiply: [
                { $divide: ['$enrolled', '$capacity'] },
                100
              ]
            }
          }
        }
      }
    ]);

    const popularCourses = await Course.find({ isActive: true })
      .sort({ enrolled: -1 })
      .limit(5)
      .select('title enrolled capacity batchType class');

    const subjectPopularity = await Course.aggregate([
      { $unwind: '$subjects' },
      {
        $group: {
          _id: '$subjects',
          courseCount: { $sum: 1 },
          totalEnrolled: { $sum: '$enrolled' }
        }
      },
      { $sort: { totalEnrolled: -1 } }
    ]);

    res.json({
      success: true,
      stats: {
        byBatchType: courseStats,
        popularCourses,
        subjectPopularity
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

module.exports = router;