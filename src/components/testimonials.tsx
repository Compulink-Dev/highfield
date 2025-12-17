'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote, Facebook } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const testimonials = [
  {
    name: 'Brian M.',
    course: '2-Week Truck Training',
    content:
      'After completing Highfield’s 2-week course, I got hired immediately. The instructors know both old and new trucks, which is crucial for Zimbabwean companies.',
    rating: 5,
    date: '2 weeks ago',
    source: 'Facebook Review',
    avatar: 'BM',
  },
  {
    name: 'Tinashe K.',
    course: 'Heavy Vehicle License',
    content:
      'The 24/7 training schedule allowed me to train after work. Best decision I ever made for my career. The certification is recognized everywhere.',
    rating: 5,
    date: '1 month ago',
    source: 'Facebook Comment',
    avatar: 'TK',
  },
  {
    name: 'Sarah C.',
    course: 'Defensive Driving',
    content:
      'As a woman in trucking, I was nervous. The team at Highfield was supportive and professional. I now drive with confidence across Zimbabwe.',
    rating: 5,
    date: '2 months ago',
    source: 'Google Review',
    avatar: 'SC',
  },
]

const Testimonials = () => {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const next = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 mb-4">
            <Facebook className="w-4 h-4 mr-2" />
            TRUSTED BY 46,000+ ZIMBABWEAN DRIVERS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real Stories from <span className="text-blue-600">Our Graduates</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {`Don't just take our word for it. Here's what our students say about their training experience at Highfield Driving School.`}
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
            >
              <Card className="border-2 border-blue-100 shadow-2xl overflow-hidden">
                <CardContent className="p-8 md:p-12">
                  <Quote className="w-12 h-12 text-blue-100 mb-6" />

                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-red-400 flex items-center justify-center text-white text-2xl font-bold">
                        {testimonials[current].avatar}
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900">
                            {testimonials[current].name}
                          </h3>
                          <p className="text-gray-600">{testimonials[current].course}</p>
                        </div>
                        <div className="flex items-center bg-blue-50 px-3 py-1 rounded-full">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>

                      <p className="text-lg text-gray-700 mb-6 italic">
                        {testimonials[current].content}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500">
                          {testimonials[current].date} • {testimonials[current].source}
                        </div>
                        <Button variant="outline" size="sm">
                          View on Facebook
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 bg-white border shadow-lg p-3 rounded-full hover:bg-gray-50"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 bg-white border shadow-lg p-3 rounded-full hover:bg-gray-50"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > current ? 1 : -1)
                  setCurrent(index)
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === current ? 'w-8 bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Social Proof Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '46K+', label: 'Facebook Followers' },
            { value: '24/7', label: 'Training Hours' },
            { value: '2 Weeks', label: 'Certification Course' },
            { value: '100%', label: 'Practical Training' },
          ].map((stat, index) => (
            <Card key={index} className="text-center border-blue-50">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-700 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
