'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useLocale, useTranslations } from 'next-intl'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { motion } from 'motion/react' // Ensure framer-motion is installed for motion.dev
import { CONTACT_INFO } from '@/lib/constants/contact-info'
import { submitContactForm } from '@/app/_actions/contact-form'
import { useHookFormAction } from "@next-safe-action/adapter-react-hook-form/hooks";
import { useAction } from 'next-safe-action/hooks'
import { useState } from 'react'
import { ContactFormSchema, contactFormSchema } from '@/lib/types/contact'



const initialValues: ContactFormSchema = {
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: '',
}

export function ContactForm() {
  const t = useTranslations('contact');
  const locale = useLocale()

  const { form, action, handleSubmitWithAction, resetFormAndAction } = useHookFormAction(
    submitContactForm,
    zodResolver(contactFormSchema),
    {
      actionProps: {
        onError: (error) => {
          toast.error(t('error'), { description: t('unexpectedError') })
        },
        onSuccess: (data) => {
          toast.success(t('success'), { description: t('successDesc') })
          form.reset()
        },
        onSettled: () => {
        },
      },
      formProps: {
        defaultValues: initialValues,
        mode: 'onTouched',
      },
      errorMapProps: {},
    }
  );


  return (
    <div className="w-full max-w-xl mx-auto p-6 bg-white/80 dark:bg-neutral-900/80 rounded-2xl shadow-lg flex flex-col gap-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-2 text-center">{t('title')}</h2>
        <p className="text-neutral-600 dark:text-neutral-300 text-center mb-4">{t('subtitle')}</p>
      </motion.div>
      <Form {...form}>
        <form onSubmit={handleSubmitWithAction} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('firstName')}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('firstNamePlaceholder')} {...field} autoComplete="given-name" />
                  </FormControl>
                  <FormMessage>{form.formState.errors.firstName && t(form.formState.errors.firstName.message!)}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('lastName')}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('lastNamePlaceholder')} {...field} autoComplete="family-name" />
                  </FormControl>
                  <FormMessage>{form.formState.errors.lastName && t(form.formState.errors.lastName.message!)}</FormMessage>
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{locale === 'ar' ? 'البريد الإلكتروني' : 'Email'}</FormLabel>
                <FormControl>
                  <Input type="email" placeholder={t('emailPlaceholder')} {...field} autoComplete="email" />
                </FormControl>
                <FormMessage>{form.formState.errors.email && t(form.formState.errors.email.message!)}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('subject')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('subjectPlaceholder')} {...field} />
                </FormControl>
                <FormMessage>{form.formState.errors.subject && t(form.formState.errors.subject.message!)}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('message')}</FormLabel>
                <FormControl>
                  <Textarea rows={5} placeholder={t('messagePlaceholder')} {...field} />
                </FormControl>
                <FormMessage>{form.formState.errors.message && t(form.formState.errors.message.message!)}</FormMessage>
              </FormItem>
            )}
          />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Button type="submit" className="w-full" disabled={action.isPending}>
              {action.isPending ? t('sending') : t('send')}
            </Button>
          </motion.div>
        </form>
      </Form>

    </div>
  )
}

export default ContactForm 