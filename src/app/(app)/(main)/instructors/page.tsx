// /src/app/instructors/page.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { User, Award, Clock, Star, MessageSquare, Truck, Shield } from 'lucide-react'

const Instructors = () => {
  const instructors = [
    {
      name: 'Mr. Chance Chikowore',
      role: 'Head Instructor & Founder',
      experience: '15+ Years',
      specialty: ['Truck Training', 'Defensive Driving'],
      bio: 'With over 15 years of professional driving experience across Southern Africa, Chance founded Highfield Driving School to provide quality training to aspiring drivers.',
      contact: '+263 77 305 6222',
    },
    {
      name: 'Mrs. Tariro Moyo',
      role: 'Senior Instructor',
      experience: '12+ Years',
      specialty: ['Beginner Training', 'Road Test Preparation'],
      bio: 'Specializes in training new drivers with patience and modern teaching techniques. Has trained over 2,000 successful drivers.',
      contact: '+263 78 123 4567',
    },
    {
      name: 'Mr. James Ndlovu',
      role: 'Truck Specialist',
      experience: '18+ Years',
      specialty: ['Heavy Vehicles', 'Long Haul'],
      bio: 'Former cross-border truck driver with extensive experience on Zimbabwean and regional routes. Expert in both old and new truck models.',
      contact: '+263 71 890 1234',
    },
    {
      name: 'Ms. Lisa Chuma',
      role: 'Theory Instructor',
      experience: '8+ Years',
      specialty: ['Traffic Rules', 'Vehicle Maintenance'],
      bio: 'Ensures students thoroughly understand Zimbabwean traffic laws and vehicle maintenance basics before practical training.',
      contact: '+263 77 555 6789',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-800 to-blue-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Meet Our Expert Instructors</h1>
            <p className="text-xl mb-8">
              {`Learn from Zimbabwe's most experienced driving professionals. Each instructor brings years of real-world experience and a passion for teaching.`}
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 text-lg">4.9/5 Instructor Rating</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Instructors Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {instructors.map((instructor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-blue-100 hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-red-400 flex items-center justify-center text-white text-4xl font-bold">
                          {instructor.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <h3 className="text-2xl font-bold text-gray-900">{instructor.name}</h3>
                          <Badge variant="outline" className="bg-blue-50 text-blue-700">
                            {instructor.role}
                          </Badge>
                        </div>

                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex items-center text-gray-600">
                            <Clock className="w-4 h-4 mr-1" />
                            {instructor.experience}
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Award className="w-4 h-4 mr-1" />
                            Certified Instructor
                          </div>
                        </div>

                        <div className="mb-4">
                          <div className="flex flex-wrap gap-2 mb-3">
                            {instructor.specialty.map((spec, idx) => (
                              <Badge key={idx} className="bg-red-50 text-red-700 hover:bg-red-100">
                                <Truck className="w-3 h-3 mr-1" />
                                {spec}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <p className="text-gray-700 mb-6">{instructor.bio}</p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-blue-600 font-medium">
                            <MessageSquare className="w-4 h-4 mr-2" />
                            Contact: {instructor.contact}
                          </div>
                          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                            <Shield className="w-3 h-3 mr-1" />
                            Available for Training
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Training Philosophy */}
          <div className="bg-gradient-to-r from-blue-50 to-red-50 rounded-2xl p-8 border border-blue-200">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Training Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                  <User className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Student-Centered</h3>
                <p className="text-gray-700">{`We adapt to each student's learning pace and style`}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-red-100 flex items-center justify-center text-red-600 mb-4">
                  <Truck className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Hands-On Practice</h3>
                <p className="text-gray-700">80% of training is practical, on-road experience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-4">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Safety First</h3>
                <p className="text-gray-700">Zimbabwean road safety is our top priority</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Instructors
