import { motion } from 'framer-motion'
import { ArrowRight, Bolt, ClipboardCheck, Lightbulb, Sun } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: Bolt,
    title: 'Electrical Installations',
    description:
      'Complete installation services for panels, distribution boards, cabling, lighting systems, and backup power integration across commercial and residential projects.',
    cta: 'Book an Electrical Assessment',
  },
  {
    icon: Sun,
    title: 'Solar Installations',
    description:
      'Site analysis, system sizing, procurement, installation, and commissioning of grid-tied and hybrid solar systems that match your energy demand.',
    cta: 'Plan a Solar Project',
  },
  {
    icon: ClipboardCheck,
    title: 'Electricity & Energy Audits',
    description:
      'Detailed consumption profiling, equipment-level loss detection, and practical action plans to improve efficiency and lower monthly utility spend.',
    cta: 'Request an Energy Audit',
  },
  {
    icon: Lightbulb,
    title: 'General Energy Consulting',
    description:
      'Strategic support for organizations planning efficiency upgrades, sustainability programs, and resilient energy infrastructure roadmaps.',
    cta: 'Talk to a Consultant',
  },
]

function Services() {
  return (
    <main className="bg-white pb-20">
      <section className="relative overflow-hidden bg-[#0A1628] py-20 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="circuit-grid h-full w-full" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold tracking-tight sm:text-5xl"
          >
            Services That Keep You Efficient and Future-Ready
          </motion.h1>
          <p className="mt-5 max-w-3xl text-base text-slate-200 sm:text-lg">
            We combine technical excellence and practical strategy to deliver dependable
            energy outcomes across installation, optimization, and consulting services.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-14 grid max-w-7xl gap-6 px-4 sm:px-6 lg:px-8">
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.09 }}
            className="grid gap-6 rounded-2xl border border-slate-200 p-6 shadow-sm md:grid-cols-[auto_1fr_auto] md:items-center"
          >
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#0A1628] text-[#F5A623]">
              <service.icon size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#0A1628]">{service.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.description}</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#F5A623] px-5 py-2.5 text-sm font-semibold text-[#0A1628] transition hover:bg-[#0A1628] hover:text-[#F5A623]"
            >
              {service.cta}
              <ArrowRight size={16} />
            </Link>
          </motion.article>
        ))}
      </section>
    </main>
  )
}

export default Services
