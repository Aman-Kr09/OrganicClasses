'use client'

import { motion } from 'framer-motion'
import { 
  BookOpen, 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  Twitter,
  Clock,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'Results', href: '/results' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  const subjects = [
    'Physics',
    'Chemistry', 
    'Mathematics',
    'Biology',
    'Accountancy',
    'Economics',
    'Business Studies'
  ]

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      content: '+91 98765 43210',
      href: 'tel:+919876543210'
    },
    {
      icon: Mail,
      title: 'Email Us', 
      content: 'info@organicclasses.com',
      href: 'mailto:info@organicclasses.com'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Near City Center, Main Road',
      href: 'https://g.co/kgs/Qs9CrLs'
    },
    {
      icon: Clock,
      title: 'Timing',
      content: 'Mon-Sat: 8AM-8PM',
      href: '#'
    }
  ]

  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      {/* Main Footer Content */}
      <div className="container-width">
        <div className="py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-primary-500 p-2 rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Organic Classes</h3>
                <p className="text-sm text-gray-400">Excellence in Education</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering students from Class 5th to 12th to achieve academic excellence. 
              Trusted by hundreds of students with proven results and expert faculty.
            </p>

            <div className="flex space-x-4" aria-label="Social media links">
              <a
                href="https://www.instagram.com/organic_classes/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-primary-500 p-3 rounded-lg transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-primary-500 p-3 rounded-lg transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-primary-500 p-3 rounded-lg transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Subjects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Subjects We Teach</h4>
            <ul className="space-y-3">
              {subjects.map((subject) => (
                <li key={subject}>
                  <span className="text-gray-300 flex items-center">
                    <ArrowRight className="w-4 h-4 mr-2 text-primary-400" />
                    {subject}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.href}
                  className="flex items-start space-x-3 text-gray-300 hover:text-primary-400 transition-colors duration-200 group"
                >
                  <div className="bg-gray-800 group-hover:bg-primary-500 p-2 rounded-lg transition-colors duration-200">
                    <info.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-medium">{info.title}</p>
                    <p className="text-sm">{info.content}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="mt-8">
              <h5 className="font-semibold mb-3">Stay Updated</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-lg flex-1 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button className="bg-primary-500 hover:bg-primary-600 px-4 py-2 rounded-r-lg transition-colors duration-200">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Organic Classes. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-primary-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-40">
        {/* WhatsApp Button */}
        <motion.a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
          aria-label="Chat on WhatsApp"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515z"/>
          </svg>
        </motion.a>

        {/* Call Button */}
        <motion.a
          href="tel:+919876543210"
          className="bg-primary-500 hover:bg-primary-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
          aria-label="Call Organic Classes"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Phone className="w-6 h-6" />
        </motion.a>
      </div>
    </footer>
  )
}

export default Footer