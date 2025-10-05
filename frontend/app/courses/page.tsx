'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Clock, Users, Filter, Search } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

interface Course {
  id: number
  title: string
  class: string
  subjects: string[]
  duration: string
  batchType: string
  teacher: string
  fee: string
  description: string
  timing: string
}

const CoursesPage = () => {
  const [courses, setCourses] = useState<Course[]>([])
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedClass, setSelectedClass] = useState('all')
  const [selectedStream, setSelectedStream] = useState('all')

  const sampleCourses: Course[] = [
    {
      id: 1,
      title: 'Science Foundation',
      class: '9th-10th',
      subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology'],
      duration: '12 months',
      batchType: 'Regular',
      teacher: 'Mr. Rajesh Kumar',
      fee: '₹15,000/year',
      description: 'Complete foundation course for Science students preparing for board exams.',
      timing: 'Mon-Fri: 4:00 PM - 6:00 PM'
    },
    {
      id: 2,
      title: 'Commerce Excellence',
      class: '11th-12th',
      subjects: ['Accountancy', 'Economics', 'Business Studies'],
      duration: '24 months',
      batchType: 'Regular',
      teacher: 'Ms. Priya Sharma',
      fee: '₹18,000/year',
      description: 'Comprehensive Commerce course for higher secondary students.',
      timing: 'Mon-Sat: 2:00 PM - 4:00 PM'
    },
    {
      id: 3,
      title: 'Govt. School Special',
      class: '8th-10th',
      subjects: ['Physics', 'Chemistry', 'Mathematics'],
      duration: '10 months',
      batchType: 'Government School',
      teacher: 'Mr. Vikash Singh',
      fee: '₹8,000/year',
      description: 'Special batch designed for government school students with affordable fees.',
      timing: 'Sat-Sun: 10:00 AM - 1:00 PM'
    },
    {
      id: 4,
      title: 'Science Advanced',
      class: '11th-12th',
      subjects: ['Physics', 'Chemistry', 'Mathematics'],
      duration: '24 months',
      batchType: 'Regular',
      teacher: 'Dr. Anjali Gupta',
      fee: '₹25,000/year',
      description: 'Advanced Science course for competitive exam preparation.',
      timing: 'Mon-Fri: 6:00 PM - 8:00 PM'
    },
    {
      id: 5,
      title: 'Biology Mastery',
      class: '11th-12th',
      subjects: ['Biology', 'Chemistry', 'Physics'],
      duration: '24 months',
      batchType: 'Medical',
      teacher: 'Dr. Neha Patel',
      fee: '₹30,000/year',
      description: 'Specialized course for medical entrance exam aspirants.',
      timing: 'Mon-Sat: 8:00 AM - 10:00 AM'
    },
    {
      id: 6,
      title: 'Foundation Plus',
      class: '5th-8th',
      subjects: ['Mathematics', 'Science', 'English'],
      duration: '12 months',
      batchType: 'Regular',
      teacher: 'Ms. Sita Devi',
      fee: '₹12,000/year',
      description: 'Strong foundation building for junior classes.',
      timing: 'Mon-Fri: 3:00 PM - 5:00 PM'
    }
  ]

  useEffect(() => {
    setCourses(sampleCourses)
    setFilteredCourses(sampleCourses)
  }, [])

  useEffect(() => {
    let filtered = courses

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.subjects.some(subject => 
          subject.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        course.teacher.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Filter by class
    if (selectedClass !== 'all') {
      filtered = filtered.filter(course => 
        course.class.includes(selectedClass)
      )
    }

    // Filter by stream/batch type
    if (selectedStream !== 'all') {
      if (selectedStream === 'science') {
        filtered = filtered.filter(course => 
          course.subjects.some(subject => 
            ['Physics', 'Chemistry', 'Mathematics', 'Biology'].includes(subject)
          )
        )
      } else if (selectedStream === 'commerce') {
        filtered = filtered.filter(course => 
          course.subjects.some(subject => 
            ['Accountancy', 'Economics', 'Business Studies'].includes(subject)
          )
        )
      } else if (selectedStream === 'govt') {
        filtered = filtered.filter(course => 
          course.batchType === 'Government School'
        )
      }
    }

    setFilteredCourses(filtered)
  }, [searchTerm, selectedClass, selectedStream, courses])

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
              Our <span className="text-primary-500">Courses</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive courses designed for students from Class 5th to 12th. 
              Choose from our Science, Commerce, and special Government School batches.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container-width">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search courses, subjects, or teachers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Class Filter */}
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">All Classes</option>
              <option value="5th">5th-8th</option>
              <option value="9th">9th-10th</option>
              <option value="11th">11th-12th</option>
            </select>

            {/* Stream Filter */}
            <select
              value={selectedStream}
              onChange={(e) => setSelectedStream(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">All Streams</option>
              <option value="science">Science</option>
              <option value="commerce">Commerce</option>
              <option value="govt">Govt. School</option>
            </select>

            {/* Results Count */}
            <div className="text-gray-600">
              <span className="font-medium">{filteredCourses.length}</span> courses found
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="section-padding">
        <div className="container-width">
          {filteredCourses.length === 0 ? (
            <div className="text-center py-16">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No courses found</h3>
              <p className="text-gray-500">Try adjusting your search criteria</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card hover:scale-105 transition-transform duration-300"
                >
                  {/* Course Header */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        course.batchType === 'Government School' 
                          ? 'bg-green-100 text-green-800'
                          : course.batchType === 'Medical'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-primary-100 text-primary-800'
                      }`}>
                        {course.batchType}
                      </span>
                      <span className="text-2xl font-bold text-primary-500">{course.fee}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                  </div>

                  {/* Course Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <BookOpen className="w-4 h-4 mr-2 text-primary-500" />
                      <span className="text-sm">Class: {course.class}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2 text-primary-500" />
                      <span className="text-sm">{course.timing}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-2 text-primary-500" />
                      <span className="text-sm">By {course.teacher}</span>
                    </div>
                  </div>

                  {/* Subjects */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Subjects:</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.subjects.map((subject) => (
                        <span
                          key={subject}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className="w-full btn-primary">
                    Enroll Now
                  </button>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CoursesPage