'use client'

import { motion } from 'framer-motion'
import { Shield, Eye, Lock, UserCheck, FileText, AlertCircle } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const PrivacyPolicyPage = () => {
  const sections = [
    {
      id: 'information-collection',
      title: 'Information We Collect',
      icon: Eye,
      content: [
        'Personal information you provide when registering for classes or contacting us',
        'Academic information including class preferences, subjects of interest, and academic history',
        'Communication records including emails, phone calls, and chat messages',
        'Technical information such as IP address, browser type, and device information',
        'Usage data about how you interact with our website and services'
      ]
    },
    {
      id: 'information-use',
      title: 'How We Use Your Information',
      icon: UserCheck,
      content: [
        'Provide and improve our educational services and programs',
        'Communicate with you about classes, schedules, and important updates',
        'Process payments and maintain financial records',
        'Personalize your learning experience and recommend suitable courses',
        'Ensure the security and integrity of our services',
        'Comply with legal obligations and protect our rights'
      ]
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing',
      icon: Shield,
      content: [
        'We do not sell, trade, or rent your personal information to third parties',
        'Information may be shared with trusted service providers who assist in our operations',
        'We may disclose information when required by law or to protect our rights',
        'Anonymous, aggregated data may be used for research and improvement purposes',
        'Parent/guardian information is shared only as necessary for student management'
      ]
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: Lock,
      content: [
        'We implement industry-standard security measures to protect your information',
        'All sensitive data is encrypted during transmission and storage',
        'Access to personal information is restricted to authorized personnel only',
        'Regular security audits and updates are performed to maintain protection',
        'We promptly notify users of any security breaches that may affect their data'
      ]
    },
    {
      id: 'your-rights',
      title: 'Your Rights',
      icon: FileText,
      content: [
        'Access and review the personal information we have about you',
        'Request corrections to any inaccurate or incomplete information',
        'Request deletion of your personal information (subject to legal requirements)',
        'Opt-out of marketing communications at any time',
        'Withdraw consent for processing where consent was the basis for processing'
      ]
    },
    {
      id: 'updates',
      title: 'Policy Updates',
      icon: AlertCircle,
      content: [
        'This privacy policy may be updated periodically to reflect changes in our practices',
        'We will notify users of significant changes via email or website notice',
        'Continued use of our services after changes constitutes acceptance of the updated policy',
        'Previous versions of this policy are available upon request',
        'We encourage regular review of this policy to stay informed about our practices'
      ]
    }
  ]

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
            <div className="flex items-center justify-center mb-6">
              <div className="bg-primary-500 p-4 rounded-2xl">
                <div className="w-8 h-8 text-white">
                  <Shield />
                </div>
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Privacy <span className="text-primary-500">Policy</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how Organic Classes 
              collects, uses, and protects your personal information.
            </p>
            <div className="mt-6 text-sm text-gray-500">
              Last updated: October 6, 2025
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-8 mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                At Organic Classes, we are committed to protecting the privacy and security of our students, 
                parents, and website visitors. This Privacy Policy describes how we collect, use, disclose, 
                and safeguard your information when you visit our website, enroll in our classes, or use our services.
              </p>
            </motion.div>

            {/* Policy Sections */}
            <div className="space-y-8">
              {sections.map((section, index) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-8"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-100 p-3 rounded-xl flex-shrink-0">
                      <div className="w-6 h-6 text-primary-600">
                        <section.icon />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h3>
                      <ul className="space-y-3">
                        {section.content.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600 leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-r from-primary-500 to-orange-500 rounded-2xl shadow-lg p-8 text-white mt-8"
            >
              <h3 className="text-2xl font-bold mb-4">Questions About Privacy?</h3>
              <p className="text-primary-100 mb-6">
                If you have any questions about this Privacy Policy or our data practices, 
                please don't hesitate to contact us.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Email Us</h4>
                  <p className="text-primary-100">privacy@organicclasses.com</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Call Us</h4>
                  <p className="text-primary-100">+91 98765 43210</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default PrivacyPolicyPage