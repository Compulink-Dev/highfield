import React from 'react'
import Link from 'next/link'
import { Facebook, Phone, Mail, MapPin, Clock, Instagram, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Footer = () => {
  const quickLinks = [
    { name: 'Truck Training Course', href: '/truck-training' },
    { name: 'Car Driving Lessons', href: '/car-lessons' },
    { name: 'December Schedule', href: '/schedule' },
    { name: 'Instructor Team', href: '/instructors' },
    { name: 'Training Facilities', href: '/facilities' },
    { name: 'Job Placement', href: '/jobs' },
  ]

  const contactInfo = [
    { icon: <Phone className="w-4 h-4" />, text: '+263 77 305 6222', href: 'tel:+263773056222' },
    {
      icon: <Mail className="w-4 h-4" />,
      text: 'chancechikowore@gmail.com',
      href: 'mailto:chancechikowore@gmail.com',
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      text: 'Machipisa, Highfield, Harare, Zimbabwe',
      href: 'https://maps.google.com',
    },
    { icon: <Clock className="w-4 h-4" />, text: '24/7 Training Hours', href: '/hours' },
  ]

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-red-400" />
              <div>
                <h2 className="text-xl font-bold">Highfield Driving School</h2>
                <p className="text-gray-400 text-sm">& Truck Training</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              {`Zimbabwe's premier driving school specializing in truck training and professional
              driver education since 2010.`}
            </p>
            <div className="flex space-x-4">
              <Button
                size="icon"
                variant="outline"
                className="border-gray-700 text-white hover:bg-blue-600"
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="border-gray-700 text-white hover:bg-pink-600"
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="border-gray-700 text-white hover:bg-blue-400"
              >
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Training Programs</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 rounded-full bg-blue-500 mr-3"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="flex items-center text-gray-400 hover:text-white transition-colors"
                  >
                    <div className="mr-3 text-blue-400">{item.icon}</div>
                    <span>{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Call to Action */}
          <div>
            <h3 className="text-lg font-bold mb-6">Book Your Training</h3>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <p className="mb-4 text-gray-300">
                Limited seats available for December and January intake. Secure your spot today!
              </p>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-red-500 hover:from-blue-700 hover:to-red-600 mb-3">
                <Phone className="mr-2 w-4 h-4" />
                Call to Enroll
              </Button>
              <Button
                variant="outline"
                className="w-full border-gray-600 text-white hover:bg-gray-800"
              >
                View Course Dates
              </Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Highfield Driving School & Truck Training. All rights
            reserved.
          </div>
          <div className="flex items-center space-x-6 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
            <Link href="/refund" className="hover:text-white">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
