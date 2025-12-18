'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, MapPin, Truck, Car } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Trucks', href: '/truck-training', icon: <Truck className="w-4 h-4" /> },
    { name: 'Cars', href: '/car-lessons', icon: <Car className="w-4 h-4" /> },
    { name: 'Courses', href: '/courses' },
    { name: 'Instructors', href: '/instructors' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 text-black">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-6 md:h-10 w-6 md:w-10 rounded-full bg-gradient-to-br from-blue-600 to-red-500" />
            <div>
              <h1 className="text-xl font-bold text-gray-900 hidden md:flex">
                Highfield Driving School
              </h1>
              <h1 className="text-xl font-bold text-gray-900 md:hidden flex">H.D.S</h1>
              <p className="text-xs text-gray-600 hidden md:flex">& Truck Training • Harare</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative flex items-center px-4 py-2 text-sm font-medium group"
                >
                  {item.icon && (
                    <span
                      className={`mr-2 transition-colors ${
                        isActive ? 'text-blue-600' : 'text-gray-500 group-hover:text-blue-600'
                      }`}
                    >
                      {item.icon}
                    </span>
                  )}
                  <span
                    className={`transition-colors ${
                      isActive
                        ? 'text-blue-600 font-semibold'
                        : 'text-gray-700 group-hover:text-blue-600'
                    }`}
                  >
                    {item.name}
                  </span>

                  {isActive && (
                    <motion.div
                      layoutId="active-dot"
                      className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-red-500"
                      transition={{ type: 'spring', bounce: 0.3 }}
                    />
                  )}
                </Link>
              )
            })}
            <Button className="ml-4 bg-gradient-to-r from-blue-600 to-red-500 hover:from-blue-700 hover:to-red-600">
              <Phone className="mr-2 h-4 w-4" />
              +263 77 305 6222
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-1">
                {navItems.map((item) => {
                  const isActive =
                    pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`relative flex items-center px-4 py-3 text-base font-medium transition-colors ${
                        isActive
                          ? 'text-blue-600 bg-blue-50 pl-6'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {isActive && (
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: 4 }}
                          className="absolute left-0 top-0 bottom-0 bg-gradient-to-b from-blue-600 to-red-500 rounded-r"
                        />
                      )}
                      {item.icon && <span className="mr-3">{item.icon}</span>}
                      {item.name}
                    </Link>
                  )
                })}
                <div className="px-4 pt-4 border-t">
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <MapPin className="mr-2 h-4 w-4" />
                    Machipisa, Highfield, Harare
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-red-500">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar
