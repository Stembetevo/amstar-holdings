import { motion } from 'framer-motion'
import {
  Bolt,
  Sun,
  ClipboardCheck,
  Lightbulb,
  BadgeCheck,
  ShieldCheck,
  CircleDollarSign,
  Clock3,
} from 'lucide-react'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import StatsBar from '../components/StatsBar'
import Testimonials from '../components/Testimonials'
import CTABanner from '../components/CTABanner'
import Seo from '../components/Seo'

const services = [
  {
    icon: Bolt,
    to: '/electrical',
    title: 'Electrical Installations',
    description:
      'From switchgear to full facility wiring, we deliver safe and compliant electrical systems built for long-term performance.',
    image:
      'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=1200&q=80',
  },
  {
    icon: Sun,
    to: '/solar',
    title: 'Solar Installations',
    description:
      'Reduce your grid dependence with expertly designed rooftop and ground-mounted solar solutions tailored to your usage profile.',
    image:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
  },
  {
    icon: ClipboardCheck,
    to: '/consult',
    title: 'Energy Audits',
    description:
      'Our data-driven assessments identify inefficiencies, benchmark consumption, and reveal realistic cost-saving opportunities.',
    image:
      'https://energysavings.com/wp-content/uploads/2023/12/certified-energy-auditor-cea-conducting-audits.jpg',
  },
  {
    icon: Lightbulb,
    to: '/consult',
    title: 'Energy Consulting',
    description:
      'Get strategic guidance on efficiency upgrades, electrification planning, and long-term energy transition decisions.',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
  },
]

const trustPoints = [
  {
    icon: BadgeCheck,
    title: 'Licensed Professionals',
    description: 'Certified technicians and engineers with strict safety-first standards.',
  },
  {
    icon: ShieldCheck,
    title: 'Proven Reliability',
    description: 'Consistent delivery for commercial, industrial, and residential clients.',
  },
  {
    icon: CircleDollarSign,
    title: 'Cost-Focused Solutions',
    description: 'Every recommendation is designed to improve ROI and reduce operating costs.',
  },
  {
    icon: Clock3,
    title: 'On-Time Execution',
    description: 'Disciplined project management that keeps milestones and budgets under control.',
  },
]

function Home() {
  return (
    <>
      <Seo
        title="Electrical and Solar Solutions in Nairobi"
        description="Amstar Holdings delivers electrical installations, solar installations, energy audits, and energy consulting for homes and businesses in Nairobi, Kenya."
        path="/"
      />
      <Hero />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5997F4]">Our Core Services</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#5997F4] sm:text-4xl">
              Energy Solutions Built Around Performance
            </h2>
          </motion.div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-50 py-20">
        <div className="absolute -left-24 top-10 h-48 w-48 rounded-full bg-[#FFFFFF]/20 blur-3xl" />
        <div className="absolute -right-20 bottom-8 h-56 w-56 rounded-full bg-[#5997F4]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold tracking-tight text-[#5997F4]"
          >
            Why Choose Us
          </motion.h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {trustPoints.map((point, index) => (
              <motion.article
                key={point.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#5997F4] text-[#FFFFFF]">
                  <point.icon size={20} />
                </div>
                <h3 className="mt-4 text-xl font-bold text-[#5997F4]">{point.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{point.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <StatsBar />
      <Testimonials />
      <CTABanner />
    </>
  )
}

export default Home
