'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Star, Users, BookOpen, Award, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const Hero = () => {
  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0)
  
  // Photo gallery data - Replace these with your actual photos
  const galleryPhotos = [
    {
      id: 1,
      src: '/images/gallery/classroom1.jpg', // Add your photos to public/images/gallery/
      alt: 'Modern Classroom',
      title: 'Our Modern Classrooms'
    },
    {
      id: 2,
      src: '/images/gallery/students1.jpg',
      alt: 'Happy Students',
      title: 'Successful Students'
    },
    {
      id: 3,
      src: '/images/gallery/faculty1.jpg',
      alt: 'Expert Faculty',
      title: 'Expert Faculty Team'
    },
    {
      id: 4,
      src: '/images/gallery/lab1.jpg',
      alt: 'Science Laboratory',
      title: 'Well-Equipped Labs'
    },
    {
      id: 5,
      src: '/images/gallery/library1.jpg',
      alt: 'Library',
      title: 'Comprehensive Library'
    },
    {
      id: 6,
      src: '/images/gallery/event1.jpg',
      alt: 'Institute Event',
      title: 'Annual Events'
    }
  ]

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryPhotos.length)
    }, 4000) // Change slide every 4 seconds
    
    return () => clearInterval(timer)
  }, [galleryPhotos.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryPhotos.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryPhotos.length) % galleryPhotos.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }
  const stats = [
    { icon: Users, label: 'Students Trained', value: '500+' },
    { icon: Award, label: 'Success Rate', value: '95%' },
    { icon: BookOpen, label: 'Expert Faculty', value: '10+' },
    { icon: Star, label: 'Years Experience', value: '8+' },
  ]

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-100 pt-8 sm:pt-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-4 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-8 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container-width py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
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

          {/* Right Content - Large Block with Photo Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10 overflow-hidden min-h-[600px] lg:min-h-[700px]">
              {/* Background decorative elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary-100/30 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-orange-100/30 rounded-full translate-y-8 -translate-x-8"></div>
              
              {/* Welcome Header */}
              <div className="relative z-10 text-center mb-8">
                <div className="bg-gradient-to-br from-primary-100 to-primary-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-primary-500" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">Welcome to Organic Classes</h3>
                <p className="text-sm sm:text-base text-gray-600">Excellence in Education Since 2016</p>
              </div>

              {/* Real Photo Carousel Section */}
              <div className="relative z-10 mb-8">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 min-h-[350px] flex flex-col">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">Our Institute Gallery</h4>
                  
                  {/* Carousel Container */}
                  <div className="relative flex-1 bg-white rounded-lg shadow-inner overflow-hidden">
                    {/* Main Carousel Display */}
                    <div className="relative h-64 sm:h-72">
                      <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0"
                      >
                        <div className="relative w-full h-full rounded-lg overflow-hidden">
                          {/* Fallback for when images don't exist yet */}
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                            <div className="text-center">
                              <BookOpen className="w-16 h-16 text-primary-500 mx-auto mb-4" />
                              <h5 className="text-lg font-semibold text-primary-700 mb-2">
                                {galleryPhotos[currentSlide].title}
                              </h5>
                              <p className="text-sm text-primary-600">
                                Add your photo: {galleryPhotos[currentSlide].src}
                              </p>
                            </div>
                          </div>
                          
                          {/* This will display actual images when you add them */}
                          <img
                            src={galleryPhotos[currentSlide].src}
                            alt={galleryPhotos[currentSlide].alt}
                            className="absolute inset-0 w-full h-full object-cover rounded-lg"
                            onError={(e) => {
                              // Hide image if it doesn't exist, show fallback instead
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                            }}
                          />
                          
                          {/* Image Title Overlay */}
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                            <h5 className="text-white font-semibold text-sm sm:text-base">
                              {galleryPhotos[currentSlide].title}
                            </h5>
                          </div>
                        </div>
                      </motion.div>
                      
                      {/* Navigation Arrows */}
                      <button
                        onClick={prevSlide}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all duration-200 z-10"
                      >
                        <ChevronLeft className="w-5 h-5 text-gray-700" />
                      </button>
                      
                      <button
                        onClick={nextSlide}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all duration-200 z-10"
                      >
                        <ChevronRight className="w-5 h-5 text-gray-700" />
                      </button>
                    </div>
                    
                    {/* Thumbnail Navigation */}
                    <div className="flex justify-center space-x-2 p-4">
                      {galleryPhotos.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToSlide(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-200 ${
                            index === currentSlide 
                              ? 'bg-primary-500 scale-125' 
                              : 'bg-gray-300 hover:bg-gray-400'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Carousel Info */}
                  <div className="text-center mt-2">
                    <p className="text-xs text-gray-500">
                      Explore Our Campus & Facilities
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Stream Cards */}
              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div 
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group bg-gradient-to-br from-primary-50 to-primary-100 p-4 rounded-lg border border-primary-200/50 hover:border-primary-300 transition-all duration-300 hover:shadow-md"
                >
                  <h4 className="font-semibold text-primary-800 mb-2 text-base">Science Stream</h4>
                  <p className="text-sm text-primary-600">Physics, Chemistry, Maths, Biology</p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg border border-orange-200/50 hover:border-orange-300 transition-all duration-300 hover:shadow-md"
                >
                  <h4 className="font-semibold text-orange-800 mb-2 text-base">Commerce Stream</h4>
                  <p className="text-sm text-orange-600">Accountancy, Economics, Business Studies</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-4 sm:p-6 text-center hover:shadow-xl transition-shadow"
            >
              <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-primary-600" />
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