"use server"
import { z } from 'zod'
import { actionClient } from '@/lib/common/safe-action'
import { createEmailTransporter, generateContactEmailHTML } from '@/lib/email'
import { contactFormSchema } from '@/lib/types/contact'


export const submitContactForm = actionClient.inputSchema(contactFormSchema).action(
  async ({parsedInput: data}) => {
    try {
    if (
        !process.env.SMTP_HOST ||
        !process.env.SMTP_USER ||
        !process.env.SMTP_PASSWORD
        ) {
        throw new Error("Email configuration is missing");
        }
      const transporter = createEmailTransporter()
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.SMTP_USER, 
        replyTo: data.email,
        subject: `[Contact Form] ${data.subject}`,
        html: generateContactEmailHTML(data),
      })
      return { success: true }
    } catch (error) {
      return { success: false, error: 'Failed to send email. Please try again later.' }
    }
  }
) 