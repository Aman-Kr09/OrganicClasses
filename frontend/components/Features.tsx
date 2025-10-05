'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  BookOpen, 
  Users, 
  Clock, 
  Award, 
  Target, 
  GraduationCap,
  TrendingUp
} from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Comprehensive Subjects',
      description: 'Physics, Chemistry, Maths, Biology, Accountancy, Economics & Business Studies',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Users,
      title: 'Special Govt. School Batches',
      description: 'Dedicated batches designed specifically for government school students',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: GraduationCap,
      title: 'Expert Faculty',
      description: 'Highly qualified and experienced teachers with proven track records',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Target,
      title: 'Focused Learning',
      description: 'Targeted approach for classes 5th to 12th with personalized attention',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Clock,
      title: 'Flexible Timings',
      description: 'Multiple batch timings to accommodate different student schedules',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: '95% success rate with hundreds of satisfied students and parents',
      color: 'bg-primary-100 text-primary-600'
    },
    {
      icon: Target,
      title: 'Interactive Learning',
      description: 'Modern teaching methods with practical examples and problem-solving',
      color: 'bg-indigo-100 text-indigo-600'
    },
    {
      icon: Award,
      title: 'Academic Excellence',
      description: 'Consistent track record of helping students achieve top grades',
      color: 'bg-pink-100 text-pink-600'
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-primary-500">Organic Classes?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive education with a personal touch, ensuring every student 
            receives the guidance they need to excel in their academic journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group hover:scale-105 transition-transform duration-300"
            >
              <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your Academic Journey?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful students who have achieved their academic goals with our expert guidance and proven teaching methods.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/contact" className="btn-primary">
                  Book Free Demo Class
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="tel:+919876543210" className="btn-secondary">
                Call Now: +91 98765 43210
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features