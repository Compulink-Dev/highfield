// /src/app/truck-training/page.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Truck, Clock, Award, Shield, CheckCircle, Users, Target, Calendar } from 'lucide-react'

const TruckTraining = () => {
  const trainingModules = [
    {
      title: 'Basic Vehicle Control',
      duration: '2 Days',
      topics: ['Pre-trip Inspection', 'Gear Shifting', 'Braking Techniques', 'Turning & Backing'],
    },
    {
      title: 'Road Driving Skills',
      duration: '4 Days',
      topics: ['Highway Driving', 'City Navigation', 'Defensive Driving', 'Load Management'],
    },
    {
      title: 'Advanced Maneuvering',
      duration: '3 Days',
      topics: ['Reverse Parking', 'Docking', 'Mountain Driving', 'Emergency Handling'],
    },
    {
      title: 'Final Assessment',
      duration: '1 Day',
      topics: ['Practical Test', 'Road Test', 'Documentation', 'Certification'],
    },
  ]

  const upcomingBatches = [
    { date: 'December 4, 2023', seats: 4, status: 'Filling Fast' },
    { date: 'December 18, 2023', seats: 12, status: 'Open' },
    { date: 'January 8, 2024', seats: 10, status: 'Open' },
    { date: 'January 22, 2024', seats: 12, status: 'Open' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-green-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <Badge className="mb-4 bg-white text-blue-700 hover:bg-white">
              🚛 MOST POPULAR COURSE
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              2-Week Intensive <span className="text-green-300">Truck Driver</span> Training
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Become a certified professional truck driver in just 14 days. Our comprehensive
              program includes both theory and practical training on various truck models used
              across Zimbabwe.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-green-600">
                📞 Enroll Now: +263 77 305 6222
              </Button>
              <Button size="lg" variant="outline" className="border-white text-black">
                📥 Download Course Brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: <Clock />, title: '2 Weeks', desc: 'Intensive Training' },
              { icon: <Award />, title: 'Certification', desc: 'Govt. Approved' },
              { icon: <Truck />, title: '8+ Truck Models', desc: 'Old & New' },
              { icon: <Shield />, title: 'Job Assistance', desc: 'Placement Support' },
            ].map((item, index) => (
              <Card
                key={index}
                className="text-center border-blue-100 hover:border-blue-300 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="inline-flex p-3 rounded-full bg-blue-100 text-blue-600 mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Curriculum */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Course Curriculum</h2>
            <div className="grid gap-6">
              {trainingModules.map((module, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl border shadow-sm overflow-hidden"
                >
                  <div className="p-6 md:p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                            {index + 1}
                          </div>
                          <h3 className="text-xl font-bold">{module.title}</h3>
                        </div>
                        <Badge variant="outline" className="ml-11">
                          <Clock className="w-3 h-3 mr-1" />
                          {module.duration}
                        </Badge>
                      </div>
                    </div>
                    <div className="ml-11 grid grid-cols-1 md:grid-cols-2 gap-3">
                      {module.topics.map((topic, idx) => (
                        <div key={idx} className="flex items-center text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {topic}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Upcoming Batches */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 border border-blue-200">
            <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Training Batches</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {upcomingBatches.map((batch, index) => (
                <Card
                  key={index}
                  className={`border-2 ${batch.seats <= 4 ? 'border-red-300' : 'border-blue-100'}`}
                >
                  <CardContent className="p-6 text-center">
                    <Calendar className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                    <div className="text-lg font-bold text-gray-900 mb-2">{batch.date}</div>
                    <div className="text-sm text-gray-600 mb-3">
                      <Users className="w-4 h-4 inline mr-1" />
                      {batch.seats} seats available
                    </div>
                    <Badge
                      className={
                        batch.status === 'Filling Fast'
                          ? 'bg-red-100 text-red-700'
                          : 'bg-green-100 text-green-700'
                      }
                    >
                      {batch.status}
                    </Badge>
                    <Button className="w-full mt-4" size="sm">
                      Book This Batch
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TruckTraining
