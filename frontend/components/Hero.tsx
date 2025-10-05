'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Star, Users, BookOpen, Award } from 'lucide-react'
import Link from 'next/link'

const Hero = () => {
  const stats = [
    { icon: Users, label: 'Students Trained', value: '500+' },
    { icon: Award, label: 'Success Rate', value: '95%' },
    { icon: BookOpen, label: 'Expert Faculty', value: '10+' },
    { icon: Star, label: 'Years Experience', value: '8+' },
  ]

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-100 pt-16 sm:pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-4 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-8 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container-width section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4"
              >
                <Star className="w-4 h-4 mr-2" />
                Trusted by Hundreds of Students
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="heading-fluid-3 font-bold text-gray-900 leading-tight mb-4 sm:mb-6"
              >
                Empowering Students from
                <span className="text-primary-500 block">Class 5th to 12th</span>
                to Achieve Academic Excellence
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-responsive-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed"
              >
                Trusted by hundreds of students for Science, Commerce, and Govt. School Batches.
                Expert faculty in Physics, Chemistry, Maths, Biology, Accountancy, Economics & Business Studies.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col xs:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12"
              >
                <Link href="/contact" className="btn-primary group">
                  Book Free Demo
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/courses" className="btn-secondary">
                  View Courses
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Image/Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8">
              <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <div className="text-center px-2">
                  <BookOpen className="w-12 h-12 sm:w-16 sm:h-16 text-primary-500 mx-auto mb-2 sm:mb-4" />
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1 sm:mb-2">Welcome to Organic Classes</h3>
                  <p className="text-sm sm:text-base text-gray-600">Excellence in Education Since 2016</p>
                </div>
              </div>
              
              {/* Floating Cards */}
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-primary-50 p-3 sm:p-4 rounded-lg">
                  <h4 className="font-semibold text-primary-800 mb-1 text-sm sm:text-base">Science Stream</h4>
                  <p className="text-xs sm:text-sm text-primary-600">Physics, Chemistry, Maths, Biology</p>
                </div>
                <div className="bg-orange-50 p-3 sm:p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-1 text-sm sm:text-base">Commerce Stream</h4>
                  <p className="text-xs sm:text-sm text-orange-600">Accountancy, Economics, Business Studies</p>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4"
            >
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">95% Success Rate</p>
                  <p className="text-sm text-gray-600">Last Academic Year</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mt-12 sm:mt-16 lg:mt-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-3 sm:p-4 lg:p-6 text-center hover:shadow-xl transition-shadow"
            >
              <div className="bg-primary-100 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4">
                <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary-600" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-gray-600 text-xs sm:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Hero