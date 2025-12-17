'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, MapPin, Truck, Car } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Truck Training', href: '/truck-training', icon: <Truck className="w-4 h-4" /> },
    { name: 'Car Lessons', href: '/car-lessons', icon: <Car className="w-4 h-4" /> },
    { name: 'Courses & Dates', href: '/courses' },
    { name: 'Instructors', href: '/instructors' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 text-black">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-600 to-green-500" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Highfield Driving School</h1>
              <p className="text-xs text-gray-600">& Truck Training • Harare</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                {item.icon && <span className="mr-2">{item.icon}</span>}
                {item.name}
              </Link>
            ))}
            <Button className="ml-4 bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600">
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
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-center">
                      {item.icon && <span className="mr-3">{item.icon}</span>}
                      {item.name}
                    </div>
                  </Link>
                ))}
                <div className="px-4 pt-4 border-t">
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <MapPin className="mr-2 h-4 w-4" />
                    Machipisa, Highfield, Harare
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-green-500">
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
