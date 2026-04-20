import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function CTABanner() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-[#0A1628] px-6 py-12 text-center text-white shadow-xl sm:px-10"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F5A623]">
            Start Your Energy Upgrade
          </p>
          <h3 className="mx-auto mt-3 max-w-3xl text-3xl font-extrabold tracking-tight">
            Ready to cut your energy costs? Let&apos;s talk.
          </h3>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#F5A623] px-6 py-3 text-sm font-bold text-[#0A1628] transition hover:bg-white"
          >
            Request Consultation
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default CTABanner
