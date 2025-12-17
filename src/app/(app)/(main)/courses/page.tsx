// /src/app/courses/page.tsx
'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  CheckCircle,
  Clock,
  Users,
  Award,
  TrendingUp,
  Calendar,
  DollarSign,
  Target,
} from 'lucide-react'

const Courses = () => {
  const [activeTab, setActiveTab] = useState('truck')

  const courses = {
    truck: [
      {
        title: '2-Week Intensive Truck Training',
        duration: '14 Days',
        price: '$499',
        features: ['CDL Certification', 'Job Placement', '8 Truck Models', '24/7 Training'],
        popular: true,
      },
      {
        title: '4-Week Comprehensive Truck Course',
        duration: '28 Days',
        price: '$799',
        features: [
          'Extended Practice',
          'Advanced Maneuvers',
          'Cross-border Training',
          'Resume Building',
        ],
        popular: false,
      },
      {
        title: 'Weekend Truck Training',
        duration: '8 Weekends',
        price: '$399',
        features: ['Flexible Schedule', 'Part-time Option', 'Basic Certification', 'Weekend Only'],
        popular: false,
      },
    ],
    car: [
      {
        title: 'Beginner Driving Course',
        duration: '20 Hours',
        price: '$199',
        features: ['Road Test Prep', 'Insurance Discount', '10 Lessons', 'Free Manual'],
        popular: true,
      },
      {
        title: 'Defensive Driving Course',
        duration: '6 Hours',
        price: '$75',
        features: ['Insurance Discount', 'DMV Approved', 'Online Option', 'Certificate'],
        popular: false,
      },
      {
        title: 'Advanced Driving Skills',
        duration: '10 Hours',
        price: '$149',
        features: ['Highway Driving', 'Night Driving', 'Emergency Handling', 'Confidence Building'],
        popular: false,
      },
    ],
    commercial: [
      {
        title: 'Bus Driver Training',
        duration: '3 Weeks',
        price: '$699',
        features: ['PSV Certification', 'Passenger Safety', 'Route Planning', 'Company Standards'],
        popular: true,
      },
      {
        title: 'Forklift Operator',
        duration: '5 Days',
        price: '$299',
        features: ['OSHA Standards', 'Warehouse Safety', 'Practical Test', 'Certification'],
        popular: false,
      },
    ],
  }

  const courseCategories = [
    { id: 'truck', label: 'Truck Training', count: 3 },
    { id: 'car', label: 'Car Lessons', count: 3 },
    { id: 'commercial', label: 'Commercial', count: 2 },
    { id: 'specialized', label: 'Specialized', count: 4 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-r from-green-800 to-blue-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Driving Courses</h1>
            <p className="text-xl mb-8">
              Choose from a wide range of certified driving programs designed for every skill level
              and career goal.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center">
                <Users className="w-6 h-6 mr-2" />
                <span>46,000+ Graduates</span>
              </div>
              <div className="flex items-center">
                <Award className="w-6 h-6 mr-2" />
                <span>Govt. Approved</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-6 h-6 mr-2" />
                <span>95% Job Placement</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <Tabs defaultValue="truck" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
                {courseCategories.map((cat) => (
                  <TabsTrigger
                    key={cat.id}
                    value={cat.id}
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  >
                    {cat.label}
                    <Badge className="ml-2">{cat.count}</Badge>
                  </TabsTrigger>
                ))}
              </TabsList>

              {Object.entries(courses).map(([key, courseList]) => (
                <TabsContent key={key} value={key} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courseList.map((course, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Card
                          className={`h-full border-2 ${course.popular ? 'border-blue-300 shadow-xl' : 'border-gray-200'} hover:shadow-lg transition-all`}
                        >
                          {course.popular && (
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                              <Badge className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-4 py-1">
                                MOST POPULAR
                              </Badge>
                            </div>
                          )}
                          <CardHeader>
                            <CardTitle className="text-xl">{course.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-4">
                              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                <div className="flex items-center">
                                  <Clock className="w-4 h-4 mr-2 text-gray-600" />
                                  <span className="font-semibold">Duration</span>
                                </div>
                                <span className="font-bold text-gray-900">{course.duration}</span>
                              </div>

                              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                <div className="flex items-center">
                                  <DollarSign className="w-4 h-4 mr-2 text-gray-600" />
                                  <span className="font-semibold">Investment</span>
                                </div>
                                <span className="text-2xl font-bold text-blue-700">
                                  {course.price}
                                </span>
                              </div>

                              <div className="space-y-2">
                                <h4 className="font-semibold text-gray-900">Course Includes:</h4>
                                <ul className="space-y-2">
                                  {course.features.map((feature, idx) => (
                                    <li
                                      key={idx}
                                      className="flex items-center text-sm text-gray-700"
                                    >
                                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <Button className="w-full bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600">
                                Enroll Now
                              </Button>

                              <Button variant="outline" className="w-full">
                                <Calendar className="w-4 h-4 mr-2" />
                                View Schedule
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-2xl border shadow-sm p-8 mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Course Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4">Feature</th>
                    <th className="text-center py-4">Truck Training</th>
                    <th className="text-center py-4">Car Lessons</th>
                    <th className="text-center py-4">Commercial</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Duration', '2-4 Weeks', '20-40 Hours', '1-3 Weeks'],
                    ['Certification', 'CDL License', 'Driver License', 'Specialized'],
                    ['Job Placement', '✓', '–', '✓'],
                    ['24/7 Training', '✓', '–', '–'],
                    ['Flexible Schedule', '✓', '✓', '✓'],
                    ['Price Range', '$499-$799', '$75-$199', '$299-$699'],
                  ].map(([feature, truck, car, commercial], index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-4 font-medium">{feature}</td>
                      <td className="text-center py-4">{truck}</td>
                      <td className="text-center py-4">{car}</td>
                      <td className="text-center py-4">{commercial}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl p-8 text-center text-white">
            <Target className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Not Sure Which Course is Right For You?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our advisors will help you choose the perfect training program based on your goals and
              schedule.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                📞 Call for Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                📅 Book Free Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Courses
