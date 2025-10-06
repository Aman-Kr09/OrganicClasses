'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X, BookOpen, Phone, Mail, User, LogOut } from 'lucide-react'
import { useSession, signIn, signOut } from "next-auth/react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const { data: session, status } = useSession()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
    return () => document.body.classList.remove('overflow-hidden')
  }, [isOpen])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'Results', href: '/results' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="container-width">
        <nav className="flex items-center justify-between py-3 sm:py-4" role="navigation" aria-label="Main navigation">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-1.5 sm:space-x-2">
            <div className="bg-primary-500 p-1.5 sm:p-2 rounded-lg">
              <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            <div className="hidden xs:block">
              <h1 className="text-lg sm:text-xl font-bold text-gray-900">Organic Classes</h1>
              <p className="text-xs text-gray-600 hidden sm:block">Excellence in Education</p>
            </div>
            <div className="block xs:hidden">
              <h1 className="text-base font-bold text-gray-900">Organic</h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-500 font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Info & Auth */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+919876543210"
              className="flex items-center space-x-1 text-gray-600 hover:text-primary-500 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm">+91 98765 43210</span>
            </a>
            
            {/* Authentication */}
            {status === "loading" ? (
              <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse"></div>
            ) : session ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <img
                    src={session.user?.image || '/images/default-avatar.png'}
                    alt="Profile"
                    className="w-8 h-8 rounded-full border-2 border-orange-200"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {session.user?.name?.split(' ')[0]}
                  </span>
                </button>
                
                {showUserMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                  >
                    <Link
                      href="/profile"
                      className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                      onClick={() => setShowUserMenu(false)}
                    >
                      <div className="w-4 h-4">
                        <User />
                      </div>
                      <span>My Profile</span>
                    </Link>
                    <hr className="my-2" />
                    <button
                      onClick={() => {
                        signOut({ callbackUrl: '/' })
                        setShowUserMenu(false)
                      }}
                      className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors w-full text-left"
                    >
                      <div className="w-4 h-4">
                        <LogOut />
                      </div>
                      <span>Sign Out</span>
                    </button>
                  </motion.div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  href="/auth/signin"
                  className="text-gray-600 hover:text-primary-500 font-medium transition-colors text-sm"
                >
                  Sign In
                </Link>
                <Link
                  href="/auth/signup"
                  className="btn-primary text-sm"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200 shadow-lg"
            id="mobile-menu"
            aria-label="Mobile menu"
          >
            <div className="py-3 sm:py-4 space-y-2 sm:space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 sm:px-4 py-2.5 sm:py-3 text-base sm:text-lg text-gray-700 hover:text-primary-500 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 sm:px-4 pt-3 sm:pt-4 border-t border-gray-200">
                <a
                  href="tel:+919876543210"
                  className="flex items-center space-x-2 text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base"
                >
                  <Phone className="h-4 w-4" />
                  <span>+91 98765 43210</span>
                </a>
                
                {/* Mobile Authentication */}
                {status === "loading" ? (
                  <div className="h-10 bg-gray-200 rounded-lg animate-pulse mb-3"></div>
                ) : session ? (
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                      <img
                        src={session.user?.image || '/images/default-avatar.png'}
                        alt="Profile"
                        className="w-8 h-8 rounded-full border-2 border-orange-200"
                      />
                      <div>
                        <p className="font-medium text-gray-900">{session.user?.name}</p>
                        <p className="text-xs text-gray-600">{session.user?.email}</p>
                      </div>
                    </div>
                    <Link
                      href="/profile"
                      className="flex items-center space-x-2 p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="w-4 h-4">
                        <User />
                      </div>
                      <span>My Profile</span>
                    </Link>
                    <button
                      onClick={() => {
                        signOut({ callbackUrl: '/' })
                        setIsOpen(false)
                      }}
                      className="flex items-center space-x-2 p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors w-full text-left"
                    >
                      <div className="w-4 h-4">
                        <LogOut />
                      </div>
                      <span>Sign Out</span>
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2 mb-3">
                    <Link
                      href="/auth/signin"
                      className="block w-full text-center py-3 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      Sign In
                    </Link>
                    <Link
                      href="/auth/signup"
                      className="btn-primary w-full text-center block py-3"
                      onClick={() => setIsOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
                
                <Link
                  href="/contact"
                  className="btn-secondary w-full text-center block py-3"
                  onClick={() => setIsOpen(false)}
                >
                  Book Free Demo
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}

export default Navbar