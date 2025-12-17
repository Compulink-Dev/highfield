// /src/app/car-lessons/page.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Car, Shield, Clock, Users, Target, Award, CheckCircle, Calendar } from 'lucide-react'

const CarLessons = () => {
  const lessonPackages = [
    {
      title: 'Beginner Package',
      hours: 20,
      price: '$199',
      features: [
        'Road Test Preparation',
        'Insurance Certificate',
        'Free Manual Car',
        '10 Practical Lessons',
      ],
      bestFor: 'First-time drivers',
    },
    {
      title: 'Standard Package',
      hours: 30,
      price: '$299',
      features: [
        'Extended Practice',
        'Highway Driving',
        'Night Driving',
        'Parallel Parking Mastery',
      ],
      bestFor: 'Confidence building',
      popular: true,
    },
    {
      title: 'Premium Package',
      hours: 40,
      price: '$399',
      features: [
        'Guaranteed Pass',
        'Defensive Driving',
        'Emergency Handling',
        'Lifetime Refreshers',
      ],
      bestFor: 'Complete mastery',
    },
  ]

  const lessonTypes = [
    {
      type: 'Manual Transmission',
      icon: <Car />,
      description: 'Learn to drive stick shift vehicles - the most common in Zimbabwe',
      duration: 'Additional 5 hours',
    },
    {
      type: 'Automatic Transmission',
      icon: <Car />,
      description: 'Simplified training for automatic vehicles',
      duration: 'Standard duration',
    },
    {
      type: 'Defensive Driving',
      icon: <Shield />,
      description: 'Advanced safety techniques for Zimbabwean roads',
      duration: '6-hour course',
    },
    {
      type: 'Refresher Course',
      icon: <Clock />,
      description: 'For experienced drivers needing practice',
      duration: 'Flexible hours',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-r from-red-700 to-blue-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl text-white"
          >
            <Badge className="mb-4 bg-white text-red-700 hover:bg-white">
              🚗 MOST AFFORDABLE IN HARARE
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional <span className="text-yellow-300">Car Driving</span> Lessons
            </h1>
            <p className="text-xl mb-8">
              {` Learn to drive confidently with Zimbabwe's most trusted driving school. Our patient instructors and modern training methods ensure you pass your test on the first attempt.`}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-red-700 hover:bg-gray-100">
                📞 Book Your First Lesson
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-white/10"
              >
                🎥 Watch Student Success Stories
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Learning Package</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Select the package that matches your learning needs and schedule. All packages include
              theory classes and practical training.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {lessonPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`h-full border-2 ${pkg.popular ? 'border-red-300 shadow-xl relative' : 'border-gray-200'} hover:shadow-lg transition-all`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-red-500 to-blue-500 text-white px-6 py-2">
                        RECOMMENDED
                      </Badge>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{pkg.title}</CardTitle>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-1" />
                        {pkg.hours} Hours
                      </div>
                      <div className="text-3xl font-bold text-red-600">{pkg.price}</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <Badge variant="outline" className="bg-blue-50 text-blue-700">
                        Best for: {pkg.bestFor}
                      </Badge>
                    </div>

                    <div className="space-y-3 mb-8">
                      <h4 className="font-semibold">Package Includes:</h4>
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      className={`w-full ${pkg.popular ? 'bg-gradient-to-r from-red-500 to-blue-500' : 'bg-gray-800'}`}
                    >
                      Select Package
                    </Button>

                    {pkg.popular && (
                      <Button variant="outline" className="w-full mt-3">
                        <Calendar className="w-4 h-4 mr-2" />
                        View Available Slots
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Lesson Types */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6">Types of Lessons We Offer</h3>
              <div className="space-y-6">
                {lessonTypes.map((lesson, index) => (
                  <Card key={index} className="border-blue-50">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                          {lesson.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <h4 className="text-lg font-bold">{lesson.type}</h4>
                            <Badge variant="outline">{lesson.duration}</Badge>
                          </div>
                          <p className="text-gray-600 mt-2">{lesson.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-red-50 rounded-2xl p-8 border border-blue-200">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold">Why Choose Our Car Lessons?</h3>
              </div>

              <div className="space-y-6">
                {[
                  ['99% Pass Rate', 'Highest success rate in Harare'],
                  ['Flexible Scheduling', 'Lessons available 7AM-8PM daily'],
                  ['Patient Instructors', 'Specially trained for beginner drivers'],
                  ['Modern Vehicles', 'Well-maintained training cars'],
                  ['Insurance Discount', 'Get up to 20% off car insurance'],
                  ['Free Pickup', 'We pick you up for lessons in Highfield area'],
                ].map(([title, desc], index) => (
                  <div key={index} className="flex items-start">
                    <Award className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">{title}</h4>
                      <p className="text-gray-600 text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-white rounded-lg border">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold">Ready to Start?</div>
                    <div className="text-sm text-gray-600">First lesson free for new students</div>
                  </div>
                  <Button>Claim Free Lesson</Button>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-red-500 rounded-2xl p-12 text-white">
            <Users className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Start Your Driving Journey Today</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of successful drivers who learned with Highfield Driving School. Your
              first step to independence begins here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                📞 Call to Book: +263 77 305 6222
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                📅 Schedule Free Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CarLessons
