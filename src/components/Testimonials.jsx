import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Amstar upgraded our facility power system with zero downtime. Their planning and execution were first-class from start to finish.',
    name: 'Operations Manager, Riverside Manufacturing',
  },
  {
    quote:
      'The solar installation was smooth and highly professional. We saw a measurable drop in monthly energy costs within the first quarter.',
    name: 'Director, Greenway Retail Park',
  },
  {
    quote:
      'Their audit identified savings opportunities we had missed for years. The recommendations were practical and easy to implement.',
    name: 'Facilities Lead, Northgate Schools',
  },
]

function Testimonials() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-extrabold tracking-tight text-[#5997F4]"
        >
          What Clients Say
        </motion.h2>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 flex text-[#5997F4]">
                {[...Array(5)].map((_, starIndex) => (
                  <Star key={starIndex} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-slate-600">“{item.quote}”</p>
              <p className="mt-5 text-sm font-semibold text-[#5997F4]">{item.name}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
