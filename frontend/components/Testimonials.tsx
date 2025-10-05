'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      class: 'Class 12th Science',
      rating: 5,
      text: 'Organic Classes helped me score 95% in Physics and Chemistry. The teachers are amazing and explain concepts very clearly. I got admission in my dream engineering college!',
      image: '/testimonial-1.jpg'
    },
    {
      id: 2,
      name: 'Rahul Kumar',
      class: 'Class 10th',
      rating: 5,
      text: 'Best coaching institute in the area! The special batches for government school students really helped me. I scored 92% in board exams and now studying in a top school.',
      image: '/testimonial-2.jpg'
    },
    {
      id: 3,
      name: 'Anjali Gupta',
      class: 'Class 12th Commerce',
      rating: 5,
      text: 'The faculty at Organic Classes is exceptional. They helped me understand Accountancy and Economics thoroughly. I scored 94% and got admission in Delhi University!',
      image: '/testimonial-3.jpg'
    },
    {
      id: 4,
      name: 'Vikash Singh',
      class: 'Class 11th Science',
      rating: 5,
      text: 'Individual attention and doubt clearing sessions are excellent. The teachers are very supportive and encouraging. My confidence in Maths and Physics has improved significantly.',
      image: '/testimonial-4.jpg'
    },
    {
      id: 5,
      name: 'Neha Patel',
      class: 'Class 9th',
      rating: 5,
      text: 'Organic Classes made learning fun and easy. The teaching methods are innovative and I understand concepts much better now. My grades have improved dramatically!',
      image: '/testimonial-5.jpg'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-primary-500">Students Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our successful students who have achieved their academic goals 
            with the help of our expert faculty and proven teaching methods.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Display */}
          <div className="relative bg-gray-50 rounded-2xl p-8 lg:p-12 min-h-[400px]">
            <div className="absolute top-6 left-6">
              <Quote className="w-8 h-8 text-primary-200" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {/* Student Avatar */}
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary-600">
                    {testimonials[currentIndex].name[0]}
                  </span>
                </div>

                {/* Rating Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                {/* Student Info */}
                <div className="text-center">
                  <h4 className="text-xl font-semibold text-gray-900 mb-1">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-primary-600 font-medium">
                    {testimonials[currentIndex].class}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-primary-500 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mt-16"
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={testimonial.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <span className="font-semibold text-primary-600">
                    {testimonial.name[0]}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-primary-600">{testimonial.class}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {testimonial.text.length > 120 
                  ? testimonial.text.substring(0, 120) + '...'
                  : testimonial.text
                }
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials