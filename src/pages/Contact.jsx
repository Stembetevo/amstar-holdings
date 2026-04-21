import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send } from 'lucide-react'

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

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSuccessMessage('Thank you. Your request has been received. We will contact you shortly.')
    setFormData(initialForm)
  }

  return (
    <main className="bg-white pb-20">
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
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#5997F4] bg-[#FFFFFF] px-6 py-3 text-sm font-bold text-[#5997F4] transition hover:bg-[#5997F4] hover:text-[#FFFFFF] cursor-pointer"
          >
            Submit Inquiry
            <Send size={16} />
          </button>

          {successMessage && (
            <p className="mt-4 rounded-lg bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
              {successMessage}
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
                info@amstarholdings.com
              </li>
            </ul>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex h-72 items-center justify-center bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center">
              <div className="rounded-xl bg-[#5997F4]/85 px-5 py-4 text-center text-white backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.18em] text-[#FFFFFF]">Google Maps</p>
                <p className="mt-1 text-sm font-semibold">Map Placeholder - Office Location</p>
              </div>
            </div>
          </div>
        </motion.aside>
      </section>
    </main>
  )
}

export default Contact
