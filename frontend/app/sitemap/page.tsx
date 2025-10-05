'use client'

import { motion } from 'framer-motion'
import { Map, Home, BookOpen, Users, Phone, Mail, FileText, Shield, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const SitemapPage = () => {
  const siteStructure = [
    {
      title: 'Main Pages',
      icon: Home,
      color: 'primary',
      links: [
        { name: 'Home', href: '/', description: 'Main landing page with hero section and overview' },
        { name: 'About Us', href: '/about', description: 'Learn about our mission, vision, and team' },
        { name: 'Courses', href: '/courses', description: 'Browse our available courses and programs' },
        { name: 'Contact', href: '/contact', description: 'Get in touch with us for inquiries and support' }
      ]
    },
    {
      title: 'Course Categories',
      icon: BookOpen,
      color: 'orange',
      links: [
        { name: 'Mathematics', href: '/courses/mathematics', description: 'Comprehensive math courses for all levels' },
        { name: 'Science', href: '/courses/science', description: 'Physics, Chemistry, and Biology courses' },
        { name: 'English', href: '/courses/english', description: 'Language arts and literature programs' },
        { name: 'Social Studies', href: '/courses/social-studies', description: 'History, Geography, and Civics' },
        { name: 'Computer Science', href: '/courses/computer-science', description: 'Programming and IT courses' },
        { name: 'Test Preparation', href: '/courses/test-prep', description: 'Exam preparation and coaching' }
      ]
    },
    {
      title: 'Student Resources',
      icon: Users,
      color: 'green',
      links: [
        { name: 'Student Portal', href: '/student-portal', description: 'Access your classes and materials' },
        { name: 'Study Materials', href: '/resources/materials', description: 'Download notes, worksheets, and guides' },
        { name: 'Practice Tests', href: '/resources/tests', description: 'Take practice exams and quizzes' },
        { name: 'Live Classes', href: '/live-classes', description: 'Join ongoing live sessions' },
        { name: 'Recordings', href: '/recordings', description: 'Access recorded class sessions' },
        { name: 'Assignments', href: '/assignments', description: 'View and submit homework' }
      ]
    },
    {
      title: 'Support & Information',
      icon: Phone,
      color: 'blue',
      links: [
        { name: 'Help Center', href: '/help', description: 'Find answers to frequently asked questions' },
        { name: 'Technical Support', href: '/support/technical', description: 'Get help with technical issues' },
        { name: 'Academic Support', href: '/support/academic', description: 'Academic guidance and counseling' },
        { name: 'Parent Resources', href: '/parents', description: 'Information and tools for parents' },
        { name: 'Blog', href: '/blog', description: 'Educational articles and updates' },
        { name: 'News & Updates', href: '/news', description: 'Latest announcements and news' }
      ]
    },
    {
      title: 'Account & Profile',
      icon: Users,
      color: 'purple',
      links: [
        { name: 'Sign In', href: '/signin', description: 'Access your account' },
        { name: 'Sign Up', href: '/signup', description: 'Create a new account' },
        { name: 'Profile Settings', href: '/profile', description: 'Manage your profile information' },
        { name: 'Billing', href: '/billing', description: 'View and manage payments' },
        { name: 'Preferences', href: '/preferences', description: 'Customize your learning experience' },
        { name: 'Notifications', href: '/notifications', description: 'Manage your notification settings' }
      ]
    },
    {
      title: 'Legal & Policies',
      icon: Shield,
      color: 'red',
      links: [
        { name: 'Privacy Policy', href: '/privacy', description: 'How we protect and use your information' },
        { name: 'Terms of Service', href: '/terms', description: 'Agreement terms for using our services' },
        { name: 'Cookie Policy', href: '/cookies', description: 'Information about our use of cookies' },
        { name: 'Refund Policy', href: '/refund', description: 'Our refund and cancellation policies' },
        { name: 'Accessibility', href: '/accessibility', description: 'Our commitment to accessibility' }
      ]
    }
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: 'bg-primary-100 text-primary-600 border-primary-200',
      orange: 'bg-orange-100 text-orange-600 border-orange-200',
      green: 'bg-green-100 text-green-600 border-green-200',
      blue: 'bg-blue-100 text-blue-600 border-blue-200',
      purple: 'bg-purple-100 text-purple-600 border-purple-200',
      red: 'bg-red-100 text-red-600 border-red-200'
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.primary
  }

  const getHoverColorClasses = (color: string) => {
    const colorMap = {
      primary: 'hover:bg-primary-50 hover:border-primary-300',
      orange: 'hover:bg-orange-50 hover:border-orange-300',
      green: 'hover:bg-green-50 hover:border-green-300',
      blue: 'hover:bg-blue-50 hover:border-blue-300',
      purple: 'hover:bg-purple-50 hover:border-purple-300',
      red: 'hover:bg-red-50 hover:border-red-300'
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.primary
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 pt-24 pb-16">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="bg-blue-500 p-4 rounded-2xl">
                <div className="w-8 h-8 text-white">
                  <Map />
                </div>
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Site <span className="text-blue-500">Map</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Navigate through all pages and resources available on Organic Classes. 
              Find exactly what you're looking for with our comprehensive site directory.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 border-b border-gray-200">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">25+</div>
              <div className="text-gray-600">Total Pages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">6</div>
              <div className="text-gray-600">Course Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">10+</div>
              <div className="text-gray-600">Student Resources</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Access Available</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Site Structure */}
      <section className="py-16">
        <div className="container-width">
          <div className="space-y-12">
            {siteStructure.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + sectionIndex * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`p-3 rounded-xl ${getColorClasses(section.color)}`}>
                    <section.icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {section.links.map((link, linkIndex) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 + linkIndex * 0.05 }}
                    >
                      <Link href={link.href}>
                        <div className={`group p-4 rounded-xl border-2 transition-all duration-300 ${getColorClasses(section.color)} ${getHoverColorClasses(section.color)}`}>
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="font-semibold text-gray-900 group-hover:text-gray-800">
                              {link.name}
                            </h3>
                            <div className="w-4 h-4 text-gray-400 group-hover:text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <ExternalLink />
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {link.description}
                          </p>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Contact */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-6">Can't Find What You're Looking For?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              If you need help finding specific information or have questions about our services, 
              we're here to help.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <Link href="/contact">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
                  <Mail className="w-8 h-8 text-primary-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
                  <p className="text-gray-300">Send us a message and we'll help you find what you need</p>
                </div>
              </Link>
              
              <Link href="/help">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
                  <div className="w-8 h-8 text-orange-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FileText />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Help Center</h3>
                  <p className="text-gray-300">Browse our comprehensive help documentation</p>
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default SitemapPage