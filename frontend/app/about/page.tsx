'use client'

import { motion } from 'framer-motion'
import { 
  BookOpen, 
  Users, 
  Award, 
  Target, 
  Heart,
  Star,
  GraduationCap,
  TrendingUp
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const AboutPage = () => {
  const faculty = [
    {
      name: 'Dr. Rajesh Kumar',
      subject: 'Physics & Chemistry',
      experience: '12+ Years',
      qualification: 'M.Sc. Physics, B.Ed.',
      description: 'Expert in making complex Physics concepts simple and understandable.',
      achievements: ['500+ Students Mentored', 'NEET Specialist', 'Board Exam Expert']
    },
    {
      name: 'Ms. Priya Sharma',
      subject: 'Mathematics & Commerce',
      experience: '8+ Years',
      qualification: 'M.Com, B.Ed.',
      description: 'Passionate about helping students excel in Mathematics and Commerce.',
      achievements: ['95% Success Rate', 'Commerce Expert', 'Problem Solving Specialist']
    },
    {
      name: 'Dr. Anjali Gupta',
      subject: 'Biology & Chemistry',
      experience: '10+ Years',
      qualification: 'M.Sc. Biology, Ph.D.',
      description: 'Dedicated to nurturing future doctors and biologists.',
      achievements: ['Medical Entrance Expert', 'Research Scholar', '300+ NEET Qualifiers']
    },
    {
      name: 'Mr. Vikash Singh',
      subject: 'Mathematics & Physics',
      experience: '6+ Years',
      qualification: 'B.Tech, M.Ed.',
      description: 'Young and energetic teacher specializing in government school students.',
      achievements: ['Govt. School Specialist', 'IIT Graduate', 'Youth Mentor']
    }
  ]

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from teaching to student support.'
    },
    {
      icon: Heart,
      title: 'Care',
      description: 'Every student is important to us. We provide personalized attention and care.'
    },
    {
      icon: Users,
      title: 'Inclusivity',
      description: 'Special focus on government school students with affordable fee structure.'
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'Continuous improvement in teaching methods and student outcomes.'
    }
  ]

  const milestones = [
    { year: '2016', event: 'Founded Organic Classes with 20 students' },
    { year: '2018', event: 'Expanded to include Commerce stream' },
    { year: '2020', event: 'Introduced Government School special batches' },
    { year: '2022', event: 'Achieved 95% success rate in board exams' },
    { year: '2024', event: 'Serving 500+ students with 10+ expert faculty' }
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
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-primary-500">Organic Classes</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering students since 2016 with quality education, expert faculty, 
              and a commitment to academic excellence for all.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Mission & Vision
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-primary-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To provide high-quality, affordable education to students from all backgrounds, 
                    with special focus on government school students. We aim to bridge the 
                    educational gap and ensure every student has access to excellent coaching.
                  </p>
                </div>
                <div className="border-l-4 border-primary-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To be the most trusted coaching institute that transforms lives through 
                    education, creating confident and successful students who contribute 
                    positively to society.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {values.map((value, index) => (
                <div key={value.title} className="text-center">
                  <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-primary-500">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to becoming a trusted name in education, 
              here's our story of growth and impact.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center mb-8 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <div className="text-2xl font-bold text-primary-500 mb-2">
                      {milestone.year}
                    </div>
                    <p className="text-gray-700">{milestone.event}</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-primary-500 rounded-full relative z-10">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary-100 rounded-full -z-10"></div>
                </div>
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Meet Our <span className="text-primary-500">Expert Faculty</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced and dedicated teachers are the backbone of our success. 
              Each brings years of expertise and a passion for teaching.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {faculty.map((teacher, index) => (
              <motion.div
                key={teacher.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="w-12 h-12 text-primary-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{teacher.name}</h3>
                <p className="text-primary-600 font-medium mb-2">{teacher.subject}</p>
                <p className="text-gray-600 text-sm mb-3">{teacher.qualification}</p>
                <p className="text-gray-700 text-sm mb-4">{teacher.description}</p>
                
                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                  <p className="text-sm font-medium text-gray-900 mb-2">Experience</p>
                  <p className="text-primary-600 font-semibold">{teacher.experience}</p>
                </div>

                <div className="space-y-2">
                  {teacher.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="section-padding bg-primary-500 text-white">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Impact in Numbers
            </h2>
            <p className="text-primary-100 text-xl max-w-3xl mx-auto">
              These numbers represent our commitment to educational excellence 
              and the trust our students and parents place in us.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, label: 'Students Taught', value: '500+' },
              { icon: Award, label: 'Success Rate', value: '95%' },
              { icon: BookOpen, label: 'Courses Offered', value: '15+' },
              { icon: GraduationCap, label: 'Years of Excellence', value: '8+' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-primary-100">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Join the Organic Classes Family
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Experience the difference that quality education and caring teachers can make. 
              Book your free demo class today and see why parents and students trust us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Free Demo Class
              </motion.a>
              <motion.a
                href="tel:+919876543210"
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Call Now: +91 98765 43210
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AboutPage