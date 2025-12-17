'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play, Shield, Award, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const slides = [
  {
    id: 1,
    title: 'Professional Driving School',
    subtitle: 'Get Your License with Expert Training',
    description: 'Certified instructors with 20+ years experience',
    image: '/hero-1.jpg',
    cta: 'Book a Lesson',
    stats: [
      { icon: Shield, value: '99%', label: 'Pass Rate' },
      { icon: Award, value: '5000+', label: 'Students Trained' },
      { icon: Clock, value: 'Flexible', label: 'Scheduling' },
    ],
  },
  {
    id: 2,
    title: 'CDL Truck Driving School',
    subtitle: 'Start Your Career in Trucking',
    description: 'Complete CDL training with job placement assistance',
    image: '/hero-2.jpg',
    cta: 'Learn More',
    stats: [
      { icon: Shield, value: '100%', label: 'Job Placement' },
      { icon: Award, value: 'Class A/B', label: 'Licenses' },
      { icon: Clock, value: '4-8 Weeks', label: 'Program Length' },
    ],
  },
  {
    id: 3,
    title: 'Defensive Driving Courses',
    subtitle: 'Safe Driving for All Ages',
    description: 'Reduce insurance rates and improve safety',
    image: '/hero-3.jpg',
    cta: 'View Courses',
    stats: [
      { icon: Shield, value: '35%', label: 'Insurance Discount' },
      { icon: Award, value: 'DMV', label: 'Approved' },
      { icon: Clock, value: '6 Hours', label: 'Course Duration' },
    ],
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setDirection(1)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <div className="relative h-[600px] md:h-[700px] overflow-hidden rounded-bl-2xl rounded-br-2xl">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
          </div>

          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="max-w-2xl text-white"
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  {slides[currentSlide].title}
                </h1>
                <h2 className="text-xl md:text-2xl text-primary mb-6">
                  {slides[currentSlide].subtitle}
                </h2>
                <p className="text-lg mb-8 text-gray-200">{slides[currentSlide].description}</p>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  {slides[currentSlide].cta}
                  <Play className="ml-2 h-4 w-4" />
                </Button>

                <div className="grid grid-cols-3 gap-4 mt-12">
                  {slides[currentSlide].stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                        <CardContent className="p-4 text-center">
                          <stat.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                          <div className="text-2xl font-bold">{stat.value}</div>
                          <div className="text-sm text-gray-300">{stat.label}</div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 rounded-full"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 rounded-full"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1)
              setCurrentSlide(index)
            }}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? 'w-8 bg-primary' : 'w-2 bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
