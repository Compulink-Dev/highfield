'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
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
import { Badge } from '@/components/ui/badge'
import {
  Send,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  CheckCircle,
  Truck,
  Car,
  Facebook,
  Bubbles,
} from 'lucide-react'
import { contactFormSchema, type ContactFormData } from '@/lib/validations'

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      course: '',
      message: '',
    },
  })

  async function onSubmit(data: ContactFormData) {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log('Form submitted:', data)
    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      form.reset()
    }, 3000)
  }

  const contactStats = [
    { label: 'Response Time', value: 'Within 2 Hours', icon: Clock },
    { label: 'Success Rate', value: '99% Enrollment', icon: CheckCircle },
    { label: 'Facebook Followers', value: '46K+', icon: Facebook },
    { label: 'WhatsApp Response', value: 'Instant', icon: Bubbles },
  ]

  const courseOptions = [
    { value: '2-week-truck', label: '2-Week Truck Training', icon: Truck },
    { value: 'car-beginner', label: 'Car Beginner Course', icon: Car },
    { value: 'defensive-driving', label: 'Defensive Driving', icon: Car },
    { value: 'cdl-certification', label: 'CDL Certification', icon: Truck },
    { value: 'commercial', label: 'Commercial Vehicles', icon: Truck },
    { value: 'refresher', label: 'Refresher Course', icon: Car },
  ]

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-900 via-gray-900 to-red-900">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-6">
        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-2xl mx-auto text-center"
            >
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-12">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-red-500 to-emerald-400 flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Message Sent Successfully!</h3>
                  <p className="text-gray-300 mb-8">
                    Thank you for contacting Highfield Driving School. Our team will get back to you
                    within 2 hours. In the meantime, feel free to call us directly at{' '}
                    <strong>+263 77 305 6222</strong>
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-white text-gray-900 hover:bg-gray-100"
                  >
                    Send Another Message
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Left Column - Information */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Badge className="mb-6 bg-gradient-to-r from-blue-500 to-red-500 text-white">
                  🎯 GET STARTED TODAY
                </Badge>

                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Start Your{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400">
                    Driving Journey?
                  </span>
                </h2>

                <p className="text-xl text-gray-300 mb-10">
                  {`Contact Zimbabwe's most trusted driving school. Get expert advice, course details,
                  and start dates for December & January intake.`}
                </p>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  {[
                    {
                      icon: Phone,
                      title: 'Call Us',
                      detail: '+263 77 305 6222',
                      color: 'from-blue-500 to-blue-600',
                    },
                    {
                      icon: Mail,
                      title: 'Email',
                      detail: 'chancechikowore@gmail.com',
                      color: 'from-red-500 to-red-600',
                    },
                    {
                      icon: MapPin,
                      title: 'Location',
                      detail: 'Machipisa, Highfield',
                      color: 'from-purple-500 to-purple-600',
                    },
                    {
                      icon: Clock,
                      title: 'Hours',
                      detail: '24/7 Available',
                      color: 'from-orange-500 to-orange-600',
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all">
                        <CardContent className="p-4">
                          <div
                            className={`inline-flex p-2 rounded-lg bg-gradient-to-br ${item.color} mb-3`}
                          >
                            <item.icon className="w-5 h-5 text-white" />
                          </div>
                          <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                          <p className="text-gray-300 text-sm">{item.detail}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Stats */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h4 className="text-white font-semibold mb-4 flex items-center">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Why Choose Highfield?
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {contactStats.map((stat, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-red-400 mr-3" />
                        <div>
                          <div className="text-white font-semibold">{stat.value}</div>
                          <div className="text-gray-400 text-sm">{stat.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Form Card with Glass Effect */}
                <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-red-500">
                        <Send className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h1 className=" font-bold text-white">Send Us a Message</h1>
                        <p className="text-gray-300">{`We'll respond within 2 hours`}</p>
                      </div>
                    </div>

                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-white">Full Name *</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="John Doe"
                                    {...field}
                                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                                  />
                                </FormControl>
                                <FormMessage className="text-red-300" />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-white">Phone Number *</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="+263 77 123 4567"
                                    {...field}
                                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                                  />
                                </FormControl>
                                <FormMessage className="text-red-300" />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">Email Address</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="john@example.com"
                                  {...field}
                                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                                />
                              </FormControl>
                              <FormMessage className="text-red-300" />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="course"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">Course Interest *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                                    <SelectValue placeholder="Select your course" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-gray-900 border-white/20">
                                  {courseOptions.map((option) => (
                                    <SelectItem
                                      key={option.value}
                                      value={option.value}
                                      className="hover:bg-white/10 focus:bg-white/10"
                                    >
                                      <div className="flex items-center">
                                        <option.icon className="w-4 h-4 mr-2" />
                                        {option.label}
                                      </div>
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage className="text-red-300" />
                            </FormItem>
                          )}
                        />

                        <div className="grid md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="preferredDate"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-white">Preferred Start Date</FormLabel>
                                <FormControl>
                                  <Input
                                    type="date"
                                    {...field}
                                    className="bg-white/10 border-white/20 text-white"
                                  />
                                </FormControl>
                                <FormMessage className="text-red-300" />
                              </FormItem>
                            )}
                          />

                          <div>
                            <FormLabel className="text-white">Quick Contact</FormLabel>
                            <div className="flex flex-col md:flex-row gap-2 mt-2">
                              <Button
                                type="button"
                                size="sm"
                                variant="outline"
                                className="md:flex-1 border-white/30 text-black hover:bg-white/10"
                                onClick={() => window.open('https://wa.me/263773056222', '_blank')}
                              >
                                <Bubbles className="w-4 h-4 mr-2" />
                                WhatsApp
                              </Button>
                              <Button
                                type="button"
                                size="sm"
                                variant="outline"
                                className="md:flex-1 border-white/30 text-black hover:bg-white/10"
                                onClick={() => window.open('tel:+263773056222')}
                              >
                                <Phone className="w-4 h-4 mr-2" />
                                Call Now
                              </Button>
                            </div>
                          </div>
                        </div>

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">Your Message *</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Tell us about your driving experience, goals, or any specific questions..."
                                  className="min-h-[120px] bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage className="text-red-300" />
                            </FormItem>
                          )}
                        />

                        <Button
                          type="submit"
                          className="w-full bg-gradient-to-r from-blue-600 to-red-500 hover:from-blue-700 hover:to-red-600 text-white"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                              Sending Message...
                            </>
                          ) : (
                            <>
                              Send Message Now
                              <Send className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>

                        <p className="text-center text-gray-400 text-sm">
                          {` By submitting, you agree to our terms and privacy policy. We'll contact
                          you shortly.`}
                        </p>
                      </form>
                    </Form>
                  </CardContent>
                </Card>

                {/* Floating Element */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute right-4 md:-right-4 -bottom-4 bg-gradient-to-r from-blue-500 to-red-500 text-white px-4 py-2 rounded-lg shadow-lg"
                >
                  <div className="flex items-center text-sm">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>24/7 Support Available</span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
