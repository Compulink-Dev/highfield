'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Clock, Shield, Truck, MapPin, Users, CheckCircle, BookOpen } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const FeaturesSection = () => {
  const features = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: '24/7 Training Hours',
      description:
        'Train anytime that fits your schedule. We operate round the clock for your convenience.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Government Certified',
      description:
        'Our certifications are recognized nationwide. Your license is valid across Zimbabwe.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: 'Modern & Old Trucks',
      description:
        'Learn on various truck models, preparing you for any company’s fleet requirements.',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Highfield Location',
      description: 'Centrally located in Machipisa, Highfield with accessible training grounds.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Experienced Instructors',
      description: 'Learn from drivers with 10+ years of experience on Zimbabwean roads.',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Flexible Payment Plans',
      description: 'We offer payment options to make professional training accessible to everyone.',
      color: 'from-indigo-500 to-indigo-600',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-blue-600">Highfield</span> Driving School?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            We combine decades of experience with modern training methods to give you the best
            driving education in Zimbabwe.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-4`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Comparison Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-100 rounded-2xl p-8"
        >
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-700 mb-2">2 Weeks</div>
              <div className="text-gray-700">Fast Certification</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">vs</div>
              <div className="text-gray-700">Other Schools</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-500 mb-2">4-8 Weeks</div>
              <div className="text-gray-700">Longer Wait Time</div>
            </div>
          </div>
          <div className="text-center mt-6">
            <CheckCircle className="w-6 h-6 inline-block text-green-500 mr-2" />
            <span className="font-semibold text-gray-800">
              Get on the road faster with our intensive 2-week program
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection
