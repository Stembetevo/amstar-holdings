import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function ServiceCard({ icon: Icon, title, description, cta = 'Learn More', delay = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay }}
      className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#F5A623] hover:shadow-xl"
    >
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A1628] text-[#F5A623]">
        <Icon size={22} />
      </div>
      <h3 className="mt-5 text-xl font-bold text-[#0A1628]">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
      <Link
        to="/contact"
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0A1628] transition group-hover:text-[#F5A623]"
      >
        {cta}
        <ArrowRight size={16} />
      </Link>
    </motion.article>
  )
}

export default ServiceCard
