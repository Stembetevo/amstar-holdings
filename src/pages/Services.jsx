import { motion } from 'framer-motion'
import { ArrowRight, Bolt, ClipboardCheck, Lightbulb, Sun } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: Bolt,
    to: '/electrical',
    title: 'Electrical Installations',
    description:
      'Complete installation services for panels, distribution boards, cabling, lighting systems, and backup power integration across commercial and residential projects.',
    cta: 'Book an Electrical Assessment',
    image:
      'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=1200&q=80',
  },
  {
    icon: Sun,
    to: '/solar',
    title: 'Solar Installations',
    description:
      'Site analysis, system sizing, procurement, installation, and commissioning of grid-tied and hybrid solar systems that match your energy demand.',
    cta: 'Plan a Solar Project',
    image:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
  },
  {
    icon: ClipboardCheck,
    to: '/consult',
    title: 'Electricity & Energy Audits',
    description:
      'Detailed consumption profiling, equipment-level loss detection, and practical action plans to improve efficiency and lower monthly utility spend.',
    cta: 'Request an Energy Audit',
    image:
      'https://energysavings.com/wp-content/uploads/2023/12/certified-energy-auditor-cea-conducting-audits.jpg',
  },

  {
    icon: Lightbulb,
    to: '/consult',
    title: 'General Energy Consulting',
    description:
      'Strategic support for organizations planning efficiency upgrades, sustainability programs, and resilient energy infrastructure roadmaps.',
    cta: 'Talk to a Consultant',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
  },
]

function Services() {
  return (
    <main className="bg-white pb-20">
      <section className="relative overflow-hidden bg-[#5997F4] py-20 text-white">
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
            className="grid gap-6 rounded-2xl border border-slate-200 p-6 shadow-sm md:grid-cols-[260px_1fr_auto] md:items-center"
          >
            <div className="overflow-hidden rounded-2xl bg-slate-100">
              <img
                src={service.image}
                alt={service.title}
                className="h-48 w-full object-cover"
              />
            </div>
            <div>
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#5997F4] text-[#FFFFFF]">
                <service.icon size={24} />
              </div>
              <h2 className="text-2xl font-bold text-[#5997F4]">{service.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.description}</p>
            </div>
            <Link
              to={service.to}
              className="inline-flex items-center gap-2 rounded-full border border-[#5997F4] bg-[#FFFFFF] px-5 py-2.5 text-sm font-semibold text-[#5997F4] transition hover:bg-[#5997F4] hover:text-[#FFFFFF]"
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
