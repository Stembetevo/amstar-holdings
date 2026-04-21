import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#5997F4] text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="circuit-grid h-full w-full" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          <p className="mb-4 inline-flex rounded-full border border-[#FFFFFF]/60 bg-[#FFFFFF]/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#FFFFFF]">
            Future-Ready Energy Solutions
          </p>
          <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Powering Homes and Businesses With Smarter Energy Systems
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-base text-slate-200 sm:text-lg">
            Amstar Holdings designs and delivers dependable electrical and solar solutions
            that reduce costs, improve reliability, and support long-term energy efficiency.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#FFFFFF] px-6 py-3 text-sm font-bold text-[#5997F4] transition hover:bg-slate-100"
            >
              Get a Free Quote
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#5997F4]"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10"
        >
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=80"
            alt="Solar panels and power infrastructure"
            className="h-80 w-full rounded-2xl object-cover shadow-2xl shadow-black/40 sm:h-96"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
