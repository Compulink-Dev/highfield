import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  course: z.string().min(1, 'Please select a course'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  preferredDate: z.string().optional(),
})

export const bookingFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  courseType: z.enum(['car-beginner', 'car-advanced', 'truck-cdl', 'motorcycle']),
  scheduleDate: z.string(),
  location: z.string(),
})

export const inquiryFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  interest: z.string(),
  timeline: z.enum(['immediately', '1-month', '3-months', 'exploring']),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
export type BookingFormData = z.infer<typeof bookingFormSchema>
export type InquiryFormData = z.infer<typeof inquiryFormSchema>
