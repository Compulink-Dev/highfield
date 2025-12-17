// /src/app/contact/page.tsx
'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Card, CardContent } from '@/components/ui/card'
import { contactFormSchema, type ContactFormData } from '@/lib/validations'
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Calendar } from 'lucide-react'

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      course: '',
      message: '',
      preferredDate: '',
    },
  })

  async function onSubmit(data: ContactFormData) {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log('Form submitted:', data)
    setIsSubmitting(false)
    form.reset()
  }

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      details: '+263 77 305 6222',
      subtitle: 'Available 24/7 for inquiries',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      details: 'chancechikowore@gmail.com',
      subtitle: 'Response within 2 hours',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Us',
      details: 'Machipisa, Highfield, Harare',
      subtitle: 'Training grounds available',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Hours',
      details: '24/7 Operations',
      subtitle: 'Training available anytime',
      color: 'from-orange-500 to-orange-600',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-r from-blue-800 to-red-700">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contact Highfield Driving School
            </h1>
            <p className="text-xl">
              Get in touch to start your driving journey. Our team is ready to answer your questions
              and help you enroll in the perfect course.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`inline-flex p-4 rounded-full bg-gradient-to-br ${info.color} text-white mb-4`}
                    >
                      {info.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                    <p className="text-gray-700 font-semibold mb-1">{info.details}</p>
                    <p className="text-sm text-gray-600">{info.subtitle}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="border-blue-100 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-8">
                    <MessageSquare className="w-8 h-8 text-blue-600" />
                    <h2 className="text-3xl font-bold">Send Us a Message</h2>
                  </div>

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number *</FormLabel>
                              <FormControl>
                                <Input placeholder="+263 77 123 4567" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="john@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="course"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Course Interest *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select a course" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="truck">2-Week Truck Training</SelectItem>
                                  <SelectItem value="beginner">Beginner Driving</SelectItem>
                                  <SelectItem value="defensive">Defensive Driving</SelectItem>
                                  <SelectItem value="commercial">Commercial Vehicles</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="preferredDate"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Preferred Start Date</FormLabel>
                              <FormControl>
                                <Input type="date" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Message *</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your driving goals, experience level, or any specific requirements..."
                                className="min-h-[150px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Map & Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <Card className="border-red-100">
                <CardContent className="p-0 overflow-hidden">
                  <div className="h-64 bg-gradient-to-br from-blue-100 to-red-100 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                      <h3 className="text-xl font-bold">Highfield Training Grounds</h3>
                      <p className="text-gray-600">Machipisa, Highfield, Harare</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-blue-50 to-red-50 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Calendar className="w-8 h-8 text-blue-600" />
                    <h3 className="text-2xl font-bold">Quick Enrollment</h3>
                  </div>
                  <p className="text-gray-700 mb-6">{`Ready to start? Here's what you need:`}</p>
                  <ul className="space-y-3 mb-8">
                    {[
                      'National ID or Passport',
                      '2 Passport Photos',
                      'Medical Certificate',
                      'Application Fee ($50)',
                    ].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3">
                          {index + 1}
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-red-500">
                    Download Enrollment Form
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Frequently Asked</h3>
                  <div className="space-y-4">
                    {[
                      [
                        'What time can I visit?',
                        'Our training grounds are open 24/7 for visits and training',
                      ],
                      [
                        'Is financing available?',
                        'Yes, we offer flexible payment plans for all courses',
                      ],
                      [
                        'When does the next batch start?',
                        'New batches start every 2 weeks. Next: Dec 4',
                      ],
                    ].map(([q, a], index) => (
                      <div key={index} className="border-b pb-4">
                        <h4 className="font-semibold text-gray-900">{q}</h4>
                        <p className="text-gray-600 text-sm mt-1">{a}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
