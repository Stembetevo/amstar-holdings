import { motion } from 'framer-motion'

const stats = [
  '200+ Projects Completed',
  '10+ Years Experience',
  '100% Licensed & Certified',
]

function StatsBar() {
  return (
    <section className="bg-[#0A1628] py-7">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.45, delay: index * 0.12 }}
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-5 text-center text-sm font-semibold tracking-wide text-white"
          >
            {stat}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default StatsBar
