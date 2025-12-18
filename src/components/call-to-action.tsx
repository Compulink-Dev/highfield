'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { CheckCircle, Clock, Award, Users } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const CallToAction = () => {
  const features = [
    { icon: <Clock />, text: '2-Week Intensive Program' },
    { icon: <Award />, text: 'Official Certification Provided' },
    { icon: <Users />, text: '46K+ Drivers Trained' },
    { icon: <CheckCircle />, text: '24/7 Training Availability' },
  ]

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />

      <div className="container relative mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="inline-flex items-center rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400 mb-6">
              🚛 LIMITED DECEMBER & JANUARY INTAKE
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Become a Certified{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400">
                Truck Driver
              </span>{' '}
              in Just 2 Weeks
            </h2>

            <p className="text-xl text-gray-300 mb-8">
              {`Join Zimbabwe's most trusted truck training school. Get your certification and start
              your professional driving career with our intensive, hands-on program in Highfield,
              Harare.`}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                    <CardContent className="p-4 flex items-center space-x-3">
                      <div className="text-blue-400">{feature.icon}</div>
                      <span className="text-white font-medium">{feature.text}</span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-red-500 hover:from-blue-700 hover:to-red-600 text-white"
              >
                📞 Book Your Seat Now
                <span className="ml-2 text-sm font-normal">+263 77 305 6222</span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-black hover:bg-white/10"
              >
                📅 View December Schedule
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border-2 border-blue-500/30 shadow-2xl">
              {/* Course Highlight Card */}
              <div className="bg-gradient-to-b from-blue-600 to-blue-800 p-8 text-white">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl font-bold">2-Week Truck Mastery</h2>
                    <p className="text-blue-200">Complete Certified Program</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl md:text-3xl font-bold">$499</div>
                    <p className="text-sm text-blue-200">Full Certification Included</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                    <span>📅 Next Start Date</span>
                    <span className="font-semibold">December 4, 2023</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                    <span>👨‍🏫 Spots Available</span>
                    <span className="font-semibold text-red-300">8 of 12 Remaining</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                    <span>⏰ Training Hours</span>
                    <span className="font-semibold">7:00 AM - 8:00 PM Daily</span>
                  </div>
                </div>

                <Button className="w-full bg-white text-blue-700 hover:bg-gray-100 font-bold">
                  🚚 Enroll in Truck Course
                </Button>
              </div>
            </div>

            {/* Floating Trust Badge */}
            <div className="hidden md:absolute -bottom-4 -left-4 bg-white rounded-xl shadow-2xl p-4 border">
              <div className="flex items-center">
                <div className="text-3xl mr-3">⭐</div>
                <div>
                  <div className="font-bold text-gray-900">46K+ Followers</div>
                  <div className="text-sm text-gray-600">Trusted on Facebook</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
