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
    },
    {
      id: 6,
      name: 'Arjun Singh',
      class: 'Class 11th Science',
      rating: 5,
      text: 'The personalized attention and doubt-solving sessions at Organic Classes are outstanding. Teachers explain even the most complex topics in a simple way. My Physics and Chemistry scores have increased by 25%!',
      image: '/testimonial-6.jpg'
    },
    {
      id: 7,
      name: 'Divya Sharma',
      class: 'Class 12th Commerce',
      rating: 5,
      text: 'Amazing experience at Organic Classes! The faculty is highly qualified and supportive. They helped me crack CA Foundation exam. The study material and mock tests were extremely helpful.',
      image: '/testimonial-7.jpg'
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

        {/* Combined Testimonials and Review Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {/* Left Side - Testimonials (2/3 width) */}
          <div className="lg:col-span-2">
            {/* Featured Testimonial */}
            <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-primary-600">
                        {testimonials[currentIndex].name[0]}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-1">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-primary-600 font-medium text-sm mb-2">
                        {testimonials[currentIndex].class}
                      </p>
                      <div className="flex">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <blockquote className="text-gray-700 font-medium leading-relaxed italic">
                    "{testimonials[currentIndex].text}"
                  </blockquote>
                </motion.div>
              </AnimatePresence>
              
              {/* Navigation Controls */}
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={prevTestimonial}
                  className="bg-primary-100 hover:bg-primary-200 rounded-full p-2 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-primary-600" />
                </button>
                
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentIndex ? 'bg-primary-500' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextTestimonial}
                  className="bg-primary-100 hover:bg-primary-200 rounded-full p-2 transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-primary-600" />
                </button>
              </div>
            </div>

            {/* Other Testimonials Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {testimonials.slice(0, 6).filter((_, index) => index !== currentIndex).slice(0, 4).map((testimonial, index) => (
                <div key={testimonial.id} className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                      <span className="font-semibold text-primary-600 text-sm">
                        {testimonial.name[0]}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h4>
                      <p className="text-xs text-primary-600">{testimonial.class}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {testimonial.text.length > 80 
                      ? testimonial.text.substring(0, 80) + '...'
                      : testimonial.text
                    }
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Review Form (1/3 width) */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-primary-500 to-orange-500 rounded-2xl p-6 text-white sticky top-4">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">Share Your Experience</h3>
                <p className="text-primary-100 text-sm">Help other students by sharing your review</p>
              </div>

              <form onSubmit={(e) => {
                e.preventDefault()
                alert('Thank you for your review! We will review and publish it soon.')
                const form = e.target as HTMLFormElement;
                form.reset()
              }}>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 rounded-xl border-0 focus:ring-2 focus:ring-white/50 focus:outline-none text-gray-900"
                  />
                  
                  <select
                    required
                    className="w-full px-4 py-3 rounded-xl border-0 focus:ring-2 focus:ring-white/50 focus:outline-none text-gray-900"
                  >
                    <option value="">Select Your Class</option>
                    <option value="Class 6th">Class 6th</option>
                    <option value="Class 7th">Class 7th</option>
                    <option value="Class 8th">Class 8th</option>
                    <option value="Class 9th">Class 9th</option>
                    <option value="Class 10th">Class 10th</option>
                    <option value="Class 11th">Class 11th</option>
                    <option value="Class 12th">Class 12th</option>
                    <option value="Graduate">Graduate</option>
                  </select>

                  <div className="text-center">
                    <p className="text-white font-medium mb-2 text-sm">Rate your experience:</p>
                    <div className="flex justify-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          className="text-yellow-300 hover:text-yellow-400 focus:text-yellow-400 transition-colors"
                          onClick={(e) => {
                            const stars = e.currentTarget.parentElement?.querySelectorAll('button')
                            stars?.forEach((s, i) => {
                              if (i < star) {
                                s.classList.add('text-yellow-400')
                                s.classList.remove('text-yellow-300')
                              } else {
                                s.classList.add('text-yellow-300')
                                s.classList.remove('text-yellow-400')
                              }
                            })
                          }}
                        >
                          <Star className="w-5 h-5 fill-current" />
                        </button>
                      ))}
                    </div>
                  </div>

                  <textarea
                    placeholder="Share your experience with Organic Classes..."
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border-0 focus:ring-2 focus:ring-white/50 focus:outline-none resize-none text-gray-900"
                  ></textarea>

                  <button
                    type="submit"
                    className="w-full bg-white text-primary-600 py-3 px-4 rounded-xl font-semibold hover:bg-primary-50 transition-colors duration-300 shadow-lg"
                  >
                    Submit Review
                  </button>
                  
                  <p className="text-primary-100 text-xs text-center">
                    Reviews are moderated and published after verification
                  </p>
                </div>
              </form>
            </div>
          </div>
        </motion.div>


      </div>
    </section>
  )
}

export default Testimonials