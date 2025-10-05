'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Trophy, 
  Star, 
  Award, 
  TrendingUp,
  User,
  GraduationCap,
  Calendar,
  Target
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const ResultsPage = () => {
  const [selectedYear, setSelectedYear] = useState('2024')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const toppers = [
    {
      name: 'Priya Sharma',
      class: 'Class 12th Science',
      percentage: 97.2,
      subjects: ['Physics: 98', 'Chemistry: 97', 'Maths: 96', 'Biology: 98'],
      achievement: 'NEET Qualified - AIR 156',
      year: '2024',
      category: 'science',
      image: '/student-1.jpg'
    },
    {
      name: 'Rahul Kumar',
      class: 'Class 10th',
      percentage: 95.8,
      subjects: ['Science: 97', 'Maths: 96', 'English: 94', 'Social: 96'],
      achievement: 'School Topper',
      year: '2024',
      category: 'foundation',
      image: '/student-2.jpg'
    },
    {
      name: 'Anjali Gupta',
      class: 'Class 12th Commerce',
      percentage: 94.4,
      subjects: ['Accountancy: 96', 'Economics: 94', 'Business: 93'],
      achievement: 'Commerce Stream Topper',
      year: '2024',
      category: 'commerce',
      image: '/student-3.jpg'
    },
    {
      name: 'Vikash Singh',
      class: 'Class 11th Science',
      percentage: 92.6,
      subjects: ['Physics: 94', 'Chemistry: 92', 'Maths: 91', 'Biology: 93'],
      achievement: 'Outstanding Performance',
      year: '2024',
      category: 'science',
      image: '/student-4.jpg'
    },
    {
      name: 'Neha Patel',
      class: 'Class 9th',
      percentage: 94.2,
      subjects: ['Science: 95', 'Maths: 94', 'English: 93', 'Hindi: 95'],
      achievement: 'Class Topper',
      year: '2024',
      category: 'foundation',
      image: '/student-5.jpg'
    },
    {
      name: 'Arjun Mishra',
      class: 'Class 12th Science',
      percentage: 96.4,
      subjects: ['Physics: 97', 'Chemistry: 96', 'Maths: 95'],
      achievement: 'JEE Main Qualified - 99.2 Percentile',
      year: '2023',
      category: 'science',
      image: '/student-6.jpg'
    },
    {
      name: 'Sita Devi',
      class: 'Class 10th (Govt. School)',
      percentage: 89.6,
      subjects: ['Science: 91', 'Maths: 88', 'English: 89', 'Social: 90'],
      achievement: 'District Rank 5',
      year: '2023',
      category: 'government',
      image: '/student-7.jpg'
    },
    {
      name: 'Rohit Sharma',
      class: 'Class 12th Commerce',
      percentage: 93.8,
      subjects: ['Accountancy: 95', 'Economics: 93', 'Business: 93'],
      achievement: 'CA Foundation Qualified',
      year: '2023',
      category: 'commerce',
      image: '/student-8.jpg'
    }
  ]

  const achievements = [
    {
      icon: Trophy,
      title: '500+ Students',
      description: 'Successfully mentored and guided',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: Star,
      title: '95% Success Rate',
      description: 'Consistent performance in board exams',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Award,
      title: '50+ Toppers',
      description: 'School and district level achievers',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: TrendingUp,
      title: '25+ NEET/JEE',
      description: 'Qualified for competitive exams',
      color: 'bg-purple-100 text-purple-600'
    }
  ]

  const yearlyStats = {
    '2024': {
      totalStudents: 180,
      passPercentage: 95.2,
      above90: 78,
      toppers: 12
    },
    '2023': {
      totalStudents: 165,
      passPercentage: 94.8,
      above90: 71,
      toppers: 10
    },
    '2022': {
      totalStudents: 142,
      passPercentage: 93.5,
      above90: 62,
      toppers: 8
    }
  }

  const filteredToppers = toppers.filter(topper => {
    const yearMatch = selectedYear === 'all' || topper.year === selectedYear
    const categoryMatch = selectedCategory === 'all' || topper.category === selectedCategory
    return yearMatch && categoryMatch
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 pt-24 pb-16">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-primary-500">Success Stories</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Celebrating the achievements of our brilliant students who have excelled 
              in their academic pursuits with our guidance and support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Achievements Overview */}
      <section className="py-16 bg-white">
        <div className="container-width">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card text-center hover:scale-105 transition-transform duration-300"
              >
                <div className={`w-16 h-16 ${achievement.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <achievement.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Yearly Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Academic Year <span className="text-primary-500">Performance</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Consistent excellence across years with improving performance metrics
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {Object.entries(yearlyStats).map(([year, stats], index) => (
              <motion.div
                key={year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow"
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Academic Year {year}</h3>
                  <div className="w-16 h-1 bg-primary-500 mx-auto"></div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Total Students</span>
                    <span className="font-semibold text-gray-900">{stats.totalStudents}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-gray-700">Pass Percentage</span>
                    <span className="font-semibold text-green-600">{stats.passPercentage}%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-gray-700">Above 90%</span>
                    <span className="font-semibold text-blue-600">{stats.above90} Students</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-primary-50 rounded-lg">
                    <span className="text-gray-700">Class Toppers</span>
                    <span className="font-semibold text-primary-600">{stats.toppers} Students</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container-width">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Our Star Performers</h2>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="all">All Years</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
              </select>

              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                <option value="science">Science</option>
                <option value="commerce">Commerce</option>
                <option value="foundation">Foundation</option>
                <option value="government">Government School</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Student Results */}
      <section className="section-padding bg-white">
        <div className="container-width">
          {filteredToppers.length === 0 ? (
            <div className="text-center py-16">
              <GraduationCap className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No results found</h3>
              <p className="text-gray-500">Try adjusting your filter criteria</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredToppers.map((student, index) => (
                <motion.div
                  key={`${student.name}-${student.year}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card hover:scale-105 transition-transform duration-300"
                >
                  {/* Student Avatar */}
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="w-10 h-10 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{student.name}</h3>
                    <p className="text-primary-600 font-medium">{student.class}</p>
                  </div>

                  {/* Percentage */}
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full text-white mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold">{student.percentage}%</div>
                      </div>
                    </div>
                    <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                      <Trophy className="w-4 h-4 inline mr-1" />
                      {student.achievement}
                    </div>
                  </div>

                  {/* Subject Scores */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Subject-wise Performance:</h4>
                    <div className="space-y-2">
                      {student.subjects.map((subject, idx) => (
                        <div key={idx} className="flex justify-between items-center text-sm">
                          <span className="text-gray-600">{subject.split(':')[0]}</span>
                          <span className="font-semibold text-gray-900">{subject.split(':')[1]}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Year Badge */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center text-gray-600 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>Academic Year {student.year}</span>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-primary-500 text-white">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Your Success Story Awaits
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Join hundreds of successful students who have achieved their academic dreams 
              with Organic Classes. Be the next success story!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Target className="w-5 h-5 mr-2" />
                Start Your Journey
              </motion.a>
              <motion.a
                href="/courses"
                className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-primary-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Our Courses
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ResultsPage