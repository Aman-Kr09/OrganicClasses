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
    <section className="relative min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-100 pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container-width section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                className="heading-fluid-2 lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
              >
                Empowering Students from
                <span className="text-primary-500 block">Class 5th to 12th</span>
                to Achieve Academic Excellence
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed"
              >
                Trusted by hundreds of students for Science, Commerce, and Govt. School Batches.
                Expert faculty in Physics, Chemistry, Maths, Biology, Accountancy, Economics & Business Studies.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
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
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl p-8">
              <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center mb-6">
                <div className="text-center">
                  <BookOpen className="w-16 h-16 text-primary-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Welcome to Organic Classes</h3>
                  <p className="text-gray-600">Excellence in Education Since 2016</p>
                </div>
              </div>
              
              {/* Floating Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary-800 mb-1">Science Stream</h4>
                  <p className="text-sm text-primary-600">Physics, Chemistry, Maths, Biology</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-1">Commerce Stream</h4>
                  <p className="text-sm text-orange-600">Accountancy, Economics, Business Studies</p>
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
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
            >
              <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Hero