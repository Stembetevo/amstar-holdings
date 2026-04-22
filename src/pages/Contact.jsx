import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import Seo from '../components/Seo'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
}

function Contact() {
  const [formData, setFormData] = useState(initialForm)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSuccessMessage('')
    setErrorMessage('')
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          service: formData.service,
          message: formData.message.trim(),
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result?.error || 'Unable to send your request right now.')
      }

      setSuccessMessage(result?.message || 'Thank you. Your request has been sent.')
      setFormData(initialForm)
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="bg-white pb-20">
      <Seo
        title="Contact Amstar Holdings"
        description="Contact Amstar Holdings to request electrical, solar, audit, or energy consulting services in Nairobi, Kenya."
        path="/contact"
      />
      <section className="bg-[#5997F4] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold tracking-tight sm:text-5xl"
          >
            Let&apos;s Build Your Energy Plan
          </motion.h1>
          <p className="mt-5 max-w-2xl text-slate-200">
            Share your project details and our team will get back with tailored recommendations.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-14 grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-normal text-[#070b12]">
              Name
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none ring-[#5997F4] transition focus:ring"
                placeholder="Jane Doe"
              />
            </label>

            <label className="text-sm font-normal text-[#070b12]">
              Email
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none ring-[#5997F4] transition focus:ring"
                placeholder="name@company.com"
              />
            </label>

            <label className="text-sm font-normal text-[#070b12]">
              Phone
              <input
                required
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none ring-[#5997F4] transition focus:ring"
                placeholder="+254 700 123 456"
              />
            </label>

            <label className="text-sm font-normal text-[#070b12]">
              Service Interested In
              <select
                required
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none ring-[#5997F4] transition focus:ring"
              >
                <option value="">Select a service</option>
                <option value="electrical-installations">Electrical Installations</option>
                <option value="solar-installations">Solar Installations</option>
                <option value="energy-audits">Electricity / Energy Audits</option>
                <option value="energy-consulting">General Energy Consulting</option>
              </select>
            </label>
          </div>

          <label className="mt-5 block text-sm font-normal text-[#070b12]">
            Message
            <textarea
              required
              rows="6"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-2 w-full resize-none rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none ring-[#5997F4] transition focus:ring"
              placeholder="Tell us about your site, current setup, or goals."
            />
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#5997F4] bg-[#FFFFFF] px-6 py-3 text-sm font-bold text-[#5997F4] transition hover:bg-[#5997F4] hover:text-[#FFFFFF] cursor-pointer"
          >
            {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
            <Send size={16} />
          </button>

          {successMessage && (
            <p className="mt-4 rounded-lg bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
              {successMessage}
            </p>
          )}

          {errorMessage && (
            <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
              {errorMessage}
            </p>
          )}
        </motion.form>

        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="space-y-6"
        >
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-bold text-[#5997F4]">Contact Details</h2>
            <ul className="mt-5 space-y-4 text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 text-[#5997F4]" size={18} />
                Utawala, Embakasi East, Nairobi, Kenya
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 text-[#5997F4]" size={18} />
                +254 721954575
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 text-[#5997F4]" size={18} />
                amstarholding@gmail.com
              </li>
            </ul>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="relative h-72">
              <iframe
                title="Amstar Holdings location"
                src="https://www.google.com/maps?q=-1.2934992,36.9836388&z=17&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href="https://www.google.com/maps/place/Zion+Ct,+Nairobi,+Kenya/@-1.2934992,36.9810639,17z/data=!3m1!4b1!4m6!3m5!1s0x182f6ced08630847:0x71c41b5f885c40b3!8m2!3d-1.2934992!4d36.9836388!16s/g/11gjnb2qmy?entry=tts&g_ep=EgoyMDI2MDQxOS4wIPu8ASoASAFQAw==&skid=c4f83c85-9ac8-4a5d-b7c0-f3bc290feac0"
                target="_blank"
                rel="noreferrer"
                className="absolute left-4 top-4 rounded-xl bg-[#5997F4]/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm transition hover:bg-[#4a86db]"
              >
                Open in Maps
              </a>
            </div>
          </div>
        </motion.aside>
      </section>
    </main>
  )
}

export default Contact
