'use client'

import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { content } from '@/lib/content'
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'

export default function ContactForm() {
  const { t } = useLanguage()
  const c = content.contact.form

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const errs: Record<string, string> = {}
    if (!formData.name.trim()) errs.name = t({ nl: 'Naam is verplicht', en: 'Name is required' })
    if (!formData.email.trim()) errs.email = t({ nl: 'E-mail is verplicht', en: 'Email is required' })
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = t({ nl: 'Ongeldig e-mailadres', en: 'Invalid email address' })
    if (!formData.subject) errs.subject = t({ nl: 'Kies een onderwerp', en: 'Please select a subject' })
    if (!formData.message.trim()) errs.message = t({ nl: 'Bericht is verplicht', en: 'Message is required' })
    return errs
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-sage/10 border border-sage/30 rounded-2xl p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-sage/20 flex items-center justify-center mx-auto mb-4">
          <PaperAirplaneIcon className="w-7 h-7 text-sage" />
        </div>
        <p className="font-playfair text-xl text-dark mb-2">
          {t({ nl: 'Bericht verzonden!', en: 'Message sent!' })}
        </p>
        <p className="font-inter text-sm text-light-text">{t(c.successMessage)}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block font-inter text-sm font-medium text-body-text mb-2">
            {t(c.name)} <span className="text-terracotta">*</span>
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`w-full bg-white border rounded-xl px-4 py-3 font-inter text-sm text-body-text placeholder-light-text focus:outline-none focus:ring-2 focus:ring-terracotta/30 transition-all ${
              errors.name ? 'border-red-300' : 'border-border-color'
            }`}
            placeholder={t({ nl: 'Jouw naam', en: 'Your name' })}
          />
          {errors.name && <p className="font-inter text-xs text-red-500 mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block font-inter text-sm font-medium text-body-text mb-2">
            {t(c.email)} <span className="text-terracotta">*</span>
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`w-full bg-white border rounded-xl px-4 py-3 font-inter text-sm text-body-text placeholder-light-text focus:outline-none focus:ring-2 focus:ring-terracotta/30 transition-all ${
              errors.email ? 'border-red-300' : 'border-border-color'
            }`}
            placeholder="naam@email.nl"
          />
          {errors.email && <p className="font-inter text-xs text-red-500 mt-1">{errors.email}</p>}
        </div>
      </div>

      {/* Subject */}
      <div>
        <label className="block font-inter text-sm font-medium text-body-text mb-2">
          {t(c.subject)} <span className="text-terracotta">*</span>
        </label>
        <select
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className={`w-full bg-white border rounded-xl px-4 py-3 font-inter text-sm text-body-text focus:outline-none focus:ring-2 focus:ring-terracotta/30 transition-all appearance-none ${
            errors.subject ? 'border-red-300' : 'border-border-color'
          } ${!formData.subject ? 'text-light-text' : ''}`}
        >
          <option value="">{t({ nl: 'Selecteer een onderwerp', en: 'Select a subject' })}</option>
          {c.subjects.map((s, i) => (
            <option key={i} value={t(s)}>
              {t(s)}
            </option>
          ))}
        </select>
        {errors.subject && <p className="font-inter text-xs text-red-500 mt-1">{errors.subject}</p>}
      </div>

      {/* Message */}
      <div>
        <label className="block font-inter text-sm font-medium text-body-text mb-2">
          {t(c.message)} <span className="text-terracotta">*</span>
        </label>
        <textarea
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={5}
          className={`w-full bg-white border rounded-xl px-4 py-3 font-inter text-sm text-body-text placeholder-light-text focus:outline-none focus:ring-2 focus:ring-terracotta/30 transition-all resize-none ${
            errors.message ? 'border-red-300' : 'border-border-color'
          }`}
          placeholder={t({ nl: 'Schrijf hier jouw bericht...', en: 'Write your message here...' })}
        />
        {errors.message && <p className="font-inter text-xs text-red-500 mt-1">{errors.message}</p>}
      </div>

      <button type="submit" className="btn-primary w-full justify-center">
        <PaperAirplaneIcon className="w-4 h-4" />
        {t(c.submit)}
      </button>
    </form>
  )
}
