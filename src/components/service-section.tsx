'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Car, Truck, Shield, Users, Clock, Award } from 'lucide-react'

const services = [
  {
    title: 'Beginner Driving Lessons',
    description: 'Comprehensive training for new drivers with patient instructors',
    icon: Car,
    features: ['Personalized Instruction', 'Road Test Prep', 'Insurance Discount'],
    duration: '10-20 hours',
    price: '$499+',
  },
  {
    title: 'CDL Truck Training',
    description: 'Complete Class A/B CDL training with job placement',
    icon: Truck,
    features: ['Hands-on Training', 'Job Placement', 'Financial Aid Options'],
    duration: '4-8 weeks',
    price: '$4,999+',
  },
  {
    title: 'Defensive Driving',
    description: 'Reduce points on your license and lower insurance rates',
    icon: Shield,
    features: ['DMV Approved', 'Insurance Discount', 'Online/In-person'],
    duration: '6 hours',
    price: '$75',
  },
  {
    title: 'Teen Driving Program',
    description: 'Specialized courses for teenage drivers',
    icon: Users,
    features: ['Parent Involvement', 'Safe Driving Habits', 'Graduated Licensing'],
    duration: '30 hours',
    price: '$699',
  },
  {
    title: 'Refresher Courses',
    description: 'For drivers returning after a break or wanting improvement',
    icon: Clock,
    features: ['Confidence Building', 'Skill Assessment', 'Custom Curriculum'],
    duration: 'Variable',
    price: '$65/hour',
  },
  {
    title: 'Corporate Training',
    description: 'Fleet driver training for businesses',
    icon: Award,
    features: ['Custom Programs', 'Safety Compliance', 'Reporting'],
    duration: 'Custom',
    price: 'Contact',
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

export function ServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Driving Programs</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional training for cars, trucks, and commercial vehicles
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-primary/10">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center mt-4 pt-4 border-t">
                    <div>
                      <div className="text-sm text-muted-foreground">Duration</div>
                      <div className="font-semibold">{service.duration}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Starting at</div>
                      <div className="text-2xl font-bold text-primary">{service.price}</div>
                    </div>
                  </div>
                  <Button className="w-full mt-4">Learn More</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
