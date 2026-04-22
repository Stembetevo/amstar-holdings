import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, SunMedium } from 'lucide-react'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

const projectImages = [
  '/Photos-3-001/solar.jpg',
  '/Photos-3-001/solar1.jpg',
  '/Photos-3-001/solar2.jpg',
  '/Photos-3-001/solar3.jpg',
]

const highlights = [
  'Solar arrays planned around roof layout, shading, and consumption profile.',
  'Installation and wiring executed for reliable day-to-day performance.',
  'Commissioning checks completed to support smooth handover and monitoring.',
]

function Solar() {
  return (
    <main className="bg-white pb-20">
      <Seo
        title="Solar Installations in Nairobi"
        description="Explore Amstar Holdings' solar installation projects, including rooftop and hybrid systems designed for long-term savings in Nairobi."
        path="/solar"
      />
      <section className="bg-[#5997F4] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="inline-flex rounded-full border border-white/40 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Solar Projects
            </p>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Solar systems built for long-term savings.
            </h1>
            <p className="mt-5 max-w-2xl text-slate-200 sm:text-lg">
              From rooftop installs to hybrid power setups, we help clients reduce grid
              dependence with practical solar solutions that match real usage.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#5997F4] transition hover:bg-slate-100"
              >
                Plan a Solar Upgrade
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#5997F4]"
              >
                Back to Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="overflow-hidden rounded-3xl shadow-2xl shadow-black/25"
          >
            <img
              src="/Photos-3-001/solar.jpg"
              alt="Solar panel installation"
              className="h-full min-h-80 w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#5997F4] text-white">
              <SunMedium size={22} />
            </div>
            <h2 className="mt-5 text-2xl font-bold text-[#5997F4]">Project outcomes</h2>
            <div className="mt-4 space-y-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-[#5997F4]" size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {projectImages.map((image, index) => (
              <motion.article
                key={image}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className={`overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm ${index === 0 ? 'sm:col-span-2' : ''}`}
              >
                <img src={image} alt={`Solar project ${index + 1}`} className="h-64 w-full object-cover" />
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Solar