import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, ClipboardCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

const projectImages = [
  '/Photos-3-001/audit.jpg',
  '/Photos-3-001/IMG-20260422-WA0009.jpg',
  '/Photos-3-001/IMG-20260422-WA0010.jpg',
  '/Photos-3-001/electricsec.jpg',
]

const highlights = [
  'Site audits that identify losses, inefficiencies, and upgrade priorities.',
  'Consultation outputs that translate technical issues into action plans.',
  'Practical recommendations that balance savings, uptime, and implementation cost.',
]

function Consult() {
  return (
    <main className="bg-white pb-20">
      <section className="bg-[#5997F4] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="inline-flex rounded-full border border-white/40 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Audits and Consulting
            </p>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Advice backed by site findings and real numbers.
            </h1>
            <p className="mt-5 max-w-2xl text-slate-200 sm:text-lg">
              We review consumption patterns, inspect systems, and shape recommendations that
              help you make confident energy decisions.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#5997F4] transition hover:bg-slate-100"
              >
                Request an Audit
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
              src="/Photos-3-001/audit.jpg"
              alt="Energy audit work"
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
              <ClipboardCheck size={22} />
            </div>
            <h2 className="mt-5 text-2xl font-bold text-[#5997F4]">Consulting focus</h2>
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
                <img src={image} alt={`Consulting project ${index + 1}`} className="h-64 w-full object-cover" />
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Consult