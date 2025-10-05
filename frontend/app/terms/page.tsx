'use client'

import { motion } from 'framer-motion'
import { FileText, Users, BookOpen, CreditCard, Ban, AlertTriangle, Scale, Phone } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const TermsOfServicePage = () => {
  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      icon: FileText,
      content: [
        'By accessing and using Organic Classes services, you accept and agree to be bound by these Terms of Service',
        'These terms apply to all users, including students, parents/guardians, and website visitors',
        'If you do not agree to these terms, please do not use our services',
        'We reserve the right to modify these terms at any time with appropriate notice',
        'Continued use of our services after changes constitutes acceptance of modified terms'
      ]
    },
    {
      id: 'services',
      title: 'Our Services',
      icon: BookOpen,
      content: [
        'Organic Classes provides online and offline educational services for students',
        'Services include live classes, recorded sessions, study materials, and academic support',
        'We offer courses in various subjects including Mathematics, Science, English, and more',
        'Service availability may vary based on location, demand, and instructor availability',
        'We strive to provide high-quality education but do not guarantee specific academic outcomes'
      ]
    },
    {
      id: 'user-responsibilities',
      title: 'User Responsibilities',
      icon: Users,
      content: [
        'Provide accurate and complete information during registration and enrollment',
        'Maintain the confidentiality of your account credentials and notify us of any unauthorized access',
        'Attend scheduled classes and participate actively in the learning process',
        'Respect instructors, staff, and fellow students at all times',
        'Use our services and materials only for personal educational purposes',
        'Comply with all applicable laws and regulations while using our services'
      ]
    },
    {
      id: 'payment-terms',
      title: 'Payment and Refunds',
      icon: CreditCard,
      content: [
        'Course fees must be paid in full before or at the start of the course period',
        'We accept various payment methods including credit cards, debit cards, and bank transfers',
        'Refund requests must be submitted within 7 days of course commencement',
        'Refunds are processed within 7-14 business days after approval',
        'No refunds are available for courses completed or after 25% of sessions are conducted',
        'Additional fees may apply for rescheduling or makeup sessions'
      ]
    },
    {
      id: 'prohibited-uses',
      title: 'Prohibited Uses',
      icon: Ban,
      content: [
        'Recording, distributing, or sharing class content without explicit written permission',
        'Using our services for any illegal, fraudulent, or unauthorized purposes',
        'Disrupting classes or engaging in behavior that interferes with other students\' learning',
        'Attempting to hack, compromise, or gain unauthorized access to our systems',
        'Sharing account credentials with unauthorized individuals',
        'Using our platform to distribute spam, malware, or inappropriate content'
      ]
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property',
      icon: Scale,
      content: [
        'All course materials, content, and resources are the intellectual property of Organic Classes',
        'Users are granted limited, non-transferable rights to access and use materials for personal study',
        'Reproduction, distribution, or commercial use of our content is strictly prohibited',
        'We respect the intellectual property rights of others and expect users to do the same',
        'Any suspected copyright infringement should be reported to us immediately'
      ]
    },
    {
      id: 'limitation-liability',
      title: 'Limitation of Liability',
      icon: AlertTriangle,
      content: [
        'Organic Classes provides educational services "as is" without warranties of any kind',
        'We are not liable for any indirect, incidental, or consequential damages',
        'Our total liability shall not exceed the amount paid for the specific service in question',
        'We are not responsible for technical issues, internet connectivity problems, or force majeure events',
        'Users are responsible for their own academic progress and outcomes'
      ]
    },
    {
      id: 'termination',
      title: 'Termination',
      icon: Ban,
      content: [
        'Either party may terminate the service agreement with appropriate notice',
        'We reserve the right to suspend or terminate accounts for violations of these terms',
        'Upon termination, access to course materials and services will be revoked',
        'Refunds for terminated services will be processed according to our refund policy',
        'Certain provisions of these terms shall survive termination of the agreement'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-gradient-to-br from-orange-50 to-orange-100 pt-24 pb-16">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="bg-orange-500 p-4 rounded-2xl">
                <div className="w-8 h-8 text-white">
                  <FileText />
                </div>
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Terms of <span className="text-orange-500">Service</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Please read these terms carefully before using Organic Classes services. 
              These terms govern your use of our educational platform and services.
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement Overview</h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms of Service ("Terms") constitute a legally binding agreement between you and 
                Organic Classes. By using our website, enrolling in our courses, or accessing our services, 
                you acknowledge that you have read, understood, and agree to be bound by these terms.
              </p>
            </motion.div>

            {/* Terms Sections */}
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
                    <div className="bg-orange-100 p-3 rounded-xl flex-shrink-0">
                      <div className="w-6 h-6 text-orange-600">
                        <section.icon />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h3>
                      <ul className="space-y-3">
                        {section.content.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
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
              transition={{ duration: 0.6, delay: 1.1 }}
              className="bg-gradient-to-r from-orange-500 to-primary-500 rounded-2xl shadow-lg p-8 text-white mt-8"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-xl flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">Questions About These Terms?</h3>
                  <p className="text-orange-100 mb-6">
                    If you have any questions about these Terms of Service or need clarification 
                    on any aspect of our agreement, please contact us.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Legal Department</h4>
                      <p className="text-orange-100">legal@organicclasses.com</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Customer Support</h4>
                      <p className="text-orange-100">support@organicclasses.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Effective Date Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="bg-gray-100 rounded-2xl p-6 mt-8 text-center"
            >
              <div className="flex items-center justify-center mb-3">
                <div className="w-5 h-5 text-gray-600 mr-2">
                  <AlertTriangle />
                </div>
                <span className="font-semibold text-gray-800">Important Notice</span>
              </div>
              <p className="text-gray-600 text-sm">
                These terms are effective as of October 6, 2025. By continuing to use our services 
                after this date, you agree to be bound by these updated terms.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default TermsOfServicePage