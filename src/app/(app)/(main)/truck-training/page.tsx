// /src/app/truck-training/page.tsx
'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Truck,
  Clock,
  Award,
  Shield,
  CheckCircle,
  Users,
  Target,
  Calendar,
  Zap,
  Star,
  MapPin,
  DollarSign,
  GraduationCap,
  BookOpen,
  Gauge,
  Phone,
  Download,
  Play,
  ChevronRight,
  Facebook,
  Highlighter,
  Bubbles,
} from 'lucide-react'

const TruckTraining = () => {
  const [selectedBatch, setSelectedBatch] = useState<number | null>(null)
  const [showVideo, setShowVideo] = useState(false)

  const trainingModules = [
    {
      title: 'Basic Vehicle Control & Safety',
      duration: '2 Days',
      topics: [
        'Pre-trip Inspection',
        'Gear Shifting Mastery',
        'Braking Techniques',
        'Turning & Backing',
      ],
      icon: Gauge,
      color: 'from-blue-500 to-cyan-500',
      skills: ['Vehicle Familiarization', 'Basic Controls', 'Safety Protocols'],
    },
    {
      title: 'Road Driving & Navigation',
      duration: '4 Days',
      topics: [
        'Highway Driving Techniques',
        'City Navigation',
        'Defensive Driving',
        'Load Management',
      ],
      icon: Highlighter,
      color: 'from-green-500 to-emerald-500',
      skills: ['Route Planning', 'Traffic Navigation', 'Load Security'],
    },
    {
      title: 'Advanced Maneuvering',
      duration: '3 Days',
      topics: [
        'Reverse Parking Mastery',
        'Docking Procedures',
        'Mountain Driving',
        'Emergency Handling',
      ],
      icon: Target,
      color: 'from-purple-500 to-violet-500',
      skills: ['Precision Parking', 'Emergency Response', 'Complex Terrain'],
    },
    {
      title: 'Professional Certification',
      duration: '1 Day',
      topics: [
        'Practical Test Preparation',
        'Road Test Simulation',
        'Documentation',
        'Final Certification',
      ],
      icon: GraduationCap,
      color: 'from-orange-500 to-amber-500',
      skills: ['Test Readiness', 'Documentation', 'Career Preparation'],
    },
  ]

  const upcomingBatches = [
    {
      id: 1,
      date: 'December 4, 2023',
      seats: 4,
      status: 'Filling Fast',
      instructor: 'Mr. Chance Chikowore',
      timing: '7:00 AM - 6:00 PM',
      price: '$499',
    },
    {
      id: 2,
      date: 'December 18, 2023',
      seats: 12,
      status: 'Open',
      instructor: 'Mr. James Ndlovu',
      timing: '7:00 AM - 6:00 PM',
      price: '$499',
    },
    {
      id: 3,
      date: 'January 8, 2024',
      seats: 10,
      status: 'Open',
      instructor: 'Mr. Chance Chikowore',
      timing: '7:00 AM - 6:00 PM',
      earlyBird: true,
      price: '$449',
    },
    {
      id: 4,
      date: 'January 22, 2024',
      seats: 12,
      status: 'Open',
      instructor: 'Mr. James Ndlovu',
      timing: '7:00 AM - 6:00 PM',
      price: '$499',
    },
  ]

  const programStats = [
    { value: '46K+', label: 'Facebook Community', icon: Facebook },
    { value: '95%', label: 'Job Placement Rate', icon: Award },
    { value: '2 Weeks', label: 'Fast Certification', icon: Zap },
    { value: '24/7', label: 'Training Hours', icon: Clock },
    { value: '8+', label: 'Truck Models', icon: Truck },
    { value: '4.9/5', label: 'Student Rating', icon: Star },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />

        <div className="container relative mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-white"
            >
              <Badge className="mb-6 bg-gradient-to-r from-blue-500 to-red-500 text-white px-6 py-2">
                🚛 {`ZIMBABWE'S #1 TRUCK SCHOOL`}
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Become a{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400">
                  Certified Truck Driver
                </span>{' '}
                in Just 2 Weeks
              </h1>

              <p className="text-xl text-gray-300 mb-8">
                {` Join Zimbabwe's most trusted truck training program. Get your CDL certification and
                start earning immediately with our intensive 14-day program at Highfield, Harare.`}
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
                {[
                  ['🎯 2-Week Program', 'Fastest Certification'],
                  ['💼 95% Job Placement', 'Guaranteed Assistance'],
                  ['💰 $499 Full Course', 'Best Value in Zimbabwe'],
                ].map(([value, label], idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                  >
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <div className="font-bold text-white">{value}</div>
                      <div className="text-sm text-gray-300">{label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700"
                  onClick={() => window.open('tel:+263773056222')}
                >
                  📞 Enroll Now: +263 77 305 6222
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                  onClick={() => setShowVideo(true)}
                >
                  <Play className="w-4 h-4 mr-2" />
                  Watch Program Video
                </Button>
              </div>
            </motion.div>

            {/* Course Highlight Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-red-500">
                      <Truck className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">2-Week CDL Certification</h3>
                      <p className="text-gray-300">Complete Professional Program</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {[
                      { icon: MapPin, text: 'Machipisa, Highfield, Harare' },
                      { icon: Clock, text: '7:00 AM - 6:00 PM Daily' },
                      { icon: Users, text: 'Limited to 12 Students per Batch' },
                      { icon: Shield, text: 'Government Approved Certification' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <item.icon className="w-5 h-5 mr-3 text-blue-400" />
                        {item.text}
                      </div>
                    ))}
                  </div>

                  <div className="bg-white/5 rounded-xl p-6 mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <div className="text-sm text-gray-300">Total Investment</div>
                        <div className="text-3xl font-bold text-white">$499</div>
                      </div>
                      <Badge className="bg-gradient-to-r from-green-500 to-emerald-500">
                        <DollarSign className="w-3 h-3 mr-1" />
                        Best Value
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <Button
                        className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700"
                        onClick={() => window.open('https://wa.me/263773056222', '_blank')}
                      >
                        <Bubbles className="w-4 h-4 mr-2" />
                        WhatsApp Enquiry
                      </Button>
                      <Button
                        variant="outline"
                        className="border-white/30 text-white hover:bg-white/10"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Brochure
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -right-4 -bottom-4 bg-gradient-to-r from-blue-500 to-red-500 text-white px-6 py-3 rounded-xl shadow-2xl"
              >
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-2" />
                  <span className="font-bold">46,000+ Graduates</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {programStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex p-3 rounded-full bg-gradient-to-r from-blue-500/10 to-red-500/10 mb-3">
                  <stat.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-red-500 text-white">
              📚 COMPREHENSIVE CURRICULUM
            </Badge>
            <h2 className="text-4xl font-bold mb-6">14 Days from Beginner to Professional</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our intensive program covers everything you need to become a certified professional
              truck driver in Zimbabwe.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {trainingModules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full border-2 border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div
                        className={`p-4 rounded-xl bg-gradient-to-br ${module.color} text-white`}
                      >
                        <module.icon className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold mb-2">{module.title}</h3>
                            <Badge variant="outline" className="bg-blue-50 text-blue-700">
                              <Clock className="w-3 h-3 mr-1" />
                              {module.duration}
                            </Badge>
                          </div>
                          <div className="text-2xl font-bold text-gray-400">0{index + 1}</div>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3">Topics Covered:</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {module.topics.map((topic, idx) => (
                              <div key={idx} className="flex items-center text-sm text-gray-700">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                {topic}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4 border-t">
                          <h4 className="font-semibold text-gray-900 mb-2">{`Skills You'll Master:`}</h4>
                          <div className="flex flex-wrap gap-2">
                            {module.skills.map((skill, idx) => (
                              <Badge key={idx} variant="secondary">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Upcoming Batches */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-blue-200">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">Upcoming Training Batches</h2>
                <p className="text-gray-600">
                  Limited seats available for December & January intake
                </p>
              </div>
              <Badge className="mt-4 md:mt-0 bg-gradient-to-r from-blue-500 to-red-500 text-white">
                <Calendar className="w-4 h-4 mr-2" />
                24/7 Enrollment Open
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {upcomingBatches.map((batch, index) => (
                <motion.div
                  key={batch.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedBatch(batch.id)}
                >
                  <Card
                    className={`cursor-pointer border-2 transition-all ${
                      selectedBatch === batch.id
                        ? 'border-blue-500 shadow-xl'
                        : batch.seats <= 4
                          ? 'border-red-300'
                          : 'border-blue-100'
                    }`}
                  >
                    <CardContent className="p-6">
                      {/* Early Bird Badge */}
                      {batch.earlyBird && (
                        <Badge className="mb-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                          🎁 Early Bird Discount
                        </Badge>
                      )}

                      <div className="text-center mb-6">
                        <Calendar className="w-12 h-12 mx-auto text-blue-600 mb-3" />
                        <div className="text-xl font-bold text-gray-900">{batch.date}</div>
                        <div className="text-sm text-gray-600">Starts {batch.date}</div>
                      </div>

                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Seats Available</span>
                          <span
                            className={`font-bold ${batch.seats <= 4 ? 'text-red-600' : 'text-green-600'}`}
                          >
                            {batch.seats} / 12
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Instructor</span>
                          <span className="font-semibold">{batch.instructor}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Timing</span>
                          <span className="font-semibold">{batch.timing}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Price</span>
                          <span className="text-2xl font-bold text-blue-700">{batch.price}</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <Badge
                          className={`w-full justify-center ${
                            batch.status === 'Filling Fast'
                              ? 'bg-red-100 text-red-700'
                              : 'bg-green-100 text-green-700'
                          }`}
                        >
                          {batch.status}
                        </Badge>

                        <Button
                          className="w-full bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700"
                          onClick={(e) => {
                            e.stopPropagation()
                            window.open('tel:+263773056222')
                          }}
                        >
                          Book This Batch
                          <ChevronRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setShowVideo(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl bg-gray-900 rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="aspect-video bg-gradient-to-br from-blue-900 to-gray-900 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-red-500 flex items-center justify-center">
                      <Play className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Truck Training Program Tour
                    </h3>
                    <p className="text-gray-400">
                      See our training facilities and meet our instructors
                    </p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-4 right-4 text-white hover:text-gray-300"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default TruckTraining
