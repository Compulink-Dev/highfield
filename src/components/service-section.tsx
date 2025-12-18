'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Car,
  Truck,
  Shield,
  Users,
  Clock,
  Award,
  Zap,
  Star,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Calendar,
  Phone,
  Target,
} from 'lucide-react'

const services = [
  {
    title: '2-Week Intensive Truck Training',
    description:
      "Become a certified professional truck driver in just 14 days. Zimbabwe's most popular CDL program.",
    icon: Truck,
    features: [
      'Free Accomodation',
      'Job Placement Assistance',
      '8+ Truck Models',
      '24/7 Training Hours',
    ],
    duration: '14 Days',
    price: '$499',
    popular: true,
    stats: { students: '2000+', rating: '4.9', placement: '95%' },
    color: 'from-blue-500 to-blue-600',
  },
  {
    title: 'Car Driving Mastery',
    description: 'From zero to confident driver. Perfect for beginners and license preparation.',
    icon: Car,
    features: [
      'Road Test Guarantee',
      'Insurance Certificate',
      'Flexible Scheduling',
      'Free Pickup',
    ],
    duration: '20-40 Hours',
    price: '$199',
    popular: true,
    stats: { students: '5000+', rating: '4.8', placement: '99%' },
    color: 'from-green-500 to-green-600',
  },
  {
    title: 'Defensive Driving',
    description: 'Reduce insurance costs and improve safety on Zimbabwean roads.',
    icon: Shield,
    features: ['35% Insurance Discount', 'DMV Approved', 'Online Option', '6-Hour Course'],
    duration: '6 Hours',
    price: '$75',
    popular: false,
    stats: { students: '1500+', rating: '4.7', placement: 'N/A' },
    color: 'from-purple-500 to-purple-600',
  },
  {
    title: 'Teen Driving Academy',
    description: 'Specialized program for young drivers with parent involvement.',
    icon: Users,
    features: [
      'Parent Workshops',
      'Safe Driving Habits',
      'Graduated Licensing',
      'Confidence Building',
    ],
    duration: '30 Hours',
    price: '$299',
    popular: false,
    stats: { students: '800+', rating: '4.9', placement: '100%' },
    color: 'from-orange-500 to-orange-600',
  },
  {
    title: 'Professional Refresher',
    description: 'For experienced drivers needing updates or confidence boosting.',
    icon: Clock,
    features: ['Skill Assessment', 'Custom Curriculum', 'Advanced Techniques', 'Flexible Hours'],
    duration: 'Variable',
    price: '$65/hour',
    popular: false,
    stats: { students: '1200+', rating: '4.8', placement: 'N/A' },
    color: 'from-red-500 to-red-600',
  },
  {
    title: 'Corporate Fleet Training',
    description: 'Complete driver training solutions for businesses and organizations.',
    icon: Award,
    features: ['Custom Programs', 'Safety Compliance', 'Fleet Management', 'Progress Reporting'],
    duration: 'Custom',
    price: 'Quote Based',
    popular: false,
    stats: { students: '100+', rating: '5.0', placement: 'N/A' },
    color: 'from-indigo-500 to-indigo-600',
  },
]

export function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All Programs', count: 6 },
    { id: 'truck', label: 'Truck Training', count: 1 },
    { id: 'car', label: 'Car Lessons', count: 2 },
    { id: 'specialized', label: 'Specialized', count: 3 },
  ]

  const filteredServices =
    selectedCategory === 'all'
      ? services
      : services.filter((service) =>
          selectedCategory === 'truck'
            ? service.icon === Truck
            : selectedCategory === 'car'
              ? service.icon === Car
              : service.icon !== Truck && service.icon !== Car,
        )

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-blue-500/[0.02] bg-[size:40px_40px]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-2">
            🎯 HIGHFIELD EXCLUSIVE PROGRAMS
          </Badge>
          <h2 className="text-2xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Transform Your Driving Career in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">
              Weeks, Not Months
            </span>
          </h2>
          <p className="text-sm md:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            {`Zimbabwe's most trusted driving school with 46,000+ successful graduates. 
            Choose from our certified programs designed for every skill level and career goal.`}
          </p>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={selectedCategory === cat.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 rounded-full transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-blue-600 to-green-500 text-white'
                    : 'hover:border-blue-300'
                }`}
              >
                {cat.label}
                <Badge
                  className={`ml-2 ${
                    selectedCategory === cat.id ? 'bg-white/20' : 'bg-blue-100 text-blue-700'
                  }`}
                >
                  {cat.count}
                </Badge>
              </Button>
            ))}
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { y: 40, opacity: 0, scale: 0.95 },
                visible: { y: 0, opacity: 1, scale: 1 },
              }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative"
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-2 shadow-lg">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    MOST POPULAR
                  </Badge>
                </div>
              )}

              <Card
                className={`h-full border-2 overflow-hidden transition-all duration-300 ${
                  hoveredCard === index
                    ? 'border-blue-300 shadow-2xl'
                    : 'border-gray-200 shadow-lg hover:shadow-xl'
                }`}
              >
                {/* Header with Gradient */}
                <div className={`bg-gradient-to-br ${service.color} p-6 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <Badge className="bg-white/20 backdrop-blur-sm text-white">
                        <Clock className="w-3 h-3 mr-1" />
                        {service.duration}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl md:text-2xl font-bold text-white mb-2">
                      {service.title}
                    </CardTitle>
                    <p className="text-white/90 text-sm">{service.description}</p>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="text-center p-2 bg-gray-50 rounded-lg">
                      <div className="text-sm md:text-lg font-bold text-gray-900">
                        {service.stats.students}
                      </div>
                      <div className="text-xs text-gray-600">Trained</div>
                    </div>
                    <div className="text-center p-2 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-center">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="font-bold">{service.stats.rating}</span>
                      </div>
                      <div className="text-xs text-gray-600">Rating</div>
                    </div>
                    <div className="text-center p-2 bg-gray-50 rounded-lg">
                      <div className="text-sm md:text-lg font-bold text-green-600">
                        {service.stats.placement}
                      </div>
                      <div className="text-xs text-gray-600">Job Rate</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    <h1 className="font-semibold text-gray-900 flex items-center">
                      <Target className="w-4 h-4 mr-2 text-blue-600" />
                      {`What You'll Get:`}
                    </h1>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price & CTA */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg">
                      <div>
                        <div className="text-sm text-gray-600">Starting at</div>
                        <div className="text-3xl font-bold text-gray-900">{service.price}</div>
                      </div>
                      {service.price === 'Contact' ? (
                        <Button
                          variant="outline"
                          className="border-blue-300 text-blue-700 hover:bg-blue-50"
                          onClick={() => window.open('tel:+263773056222')}
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          Get Quote
                        </Button>
                      ) : (
                        <Badge className="bg-green-100 text-green-700 hover:bg-green-200">
                          <Zap className="w-3 h-3 mr-1" />
                          Best Value
                        </Badge>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <Button
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-xs md:text-sm"
                        onClick={() => {
                          // Navigate to course detail page
                          console.log('Learn more:', service.title)
                        }}
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full border-blue-300 text-blue-700 hover:bg-blue-50 text-xs md:text-sm"
                        onClick={() => {
                          // Open booking modal
                          console.log('Book now:', service.title)
                        }}
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        Book Now
                      </Button>
                    </div>

                    {/* Quick Info */}
                    <div className="pt-4 border-t text-center">
                      <p className="text-sm text-gray-500">
                        🎯 Next batch starts:{' '}
                        <span className="font-semibold text-gray-700">December 4</span>
                      </p>
                    </div>
                  </div>
                </CardContent>

                {/* Hover Effect Overlay */}
                <AnimatePresence>
                  {hoveredCard === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent pointer-events-none"
                    />
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Comparison CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl p-8 text-white"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Not Sure Which Program Fits You?
              </h2>
              <p className="text-sm md:text-lg text-blue-100 mb-6">
                {`Get a free career consultation with our experts. We'll help you choose the perfect program based on your goals, schedule, and budget.`}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                  <Phone className="w-4 h-4 mr-2" />
                  Free Consultation Call
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-black hover:bg-white/10"
                >
                  Compare All Programs
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { value: '46K+', label: 'Facebook Community' },
                { value: '24/7', label: 'Training Support' },
                { value: '2 Weeks', label: 'Fast Certification' },
                { value: '95%', label: 'Job Placement' },
              ].map((stat, idx) => (
                <div key={idx} className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
