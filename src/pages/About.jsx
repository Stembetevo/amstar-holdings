import { motion } from 'framer-motion'
import { Target, Users, Zap } from 'lucide-react'

const team = [
  {
    name: 'Moses Kinyua',
    role: 'Managing Director',
    bio: 'Leads strategy and growth with a focus on scalable, customer-first energy delivery.',
  },
  {
    name: 'Florence Mumbi',
    role: 'Project Manager',
    bio: 'Oversees solar deployments from feasibility to commissioning and long-term support.',
  },
  {
    name: 'Stephen Karuru',
    role: 'IT Specialist',
    bio: 'Oversees solar technology testing for high quality products. ',
  },
]

function About() {
  return (
    <main className="bg-white pb-20">
      <section className="relative overflow-hidden bg-slate-50 py-20">
        <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#FFFFFF]/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-[#5997F4]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold tracking-tight text-[#5997F4] sm:text-5xl"
          >
            About Amstar Holdings
          </motion.h1>
          <p className="mt-5 max-w-3xl text-base text-slate-600 sm:text-lg">
            We are an energy solutions company committed to helping clients access safe,
            efficient, and affordable power systems through practical innovation and strong
            technical delivery.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-14 grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        {[
          {
            icon: Zap,
            title: 'Our Story',
            text: 'Founded with a vision to modernize energy access, we have grown into a trusted partner for end-to-end energy implementation projects.',
          },
          {
            icon: Target,
            title: 'Our Mission',
            text: 'To deliver high-impact energy services that improve reliability, reduce waste, and support sustainable growth for every client we serve.',
          },
          {
            icon: Users,
            title: 'Our Team',
            text: 'Our engineers, technicians, and advisors combine field expertise with strategic thinking to solve today\'s toughest energy challenges.',
          },
        ].map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-2xl border border-slate-200 p-6"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#5997F4] text-[#FFFFFF]">
              <item.icon size={22} />
            </div>
            <h2 className="mt-4 text-xl font-bold text-[#5997F4]">{item.title}</h2>
            <p className="mt-3 text-sm text-slate-600">{item.text}</p>
          </motion.article>
        ))}
      </section>

      <section className="mx-auto mt-14 max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-extrabold tracking-tight text-[#5997F4]"
        >
          Meet The Team
        </motion.h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {team.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <img
                src={`https://images.unsplash.com/${
                  ['photo-1560250097-0b93528c311a', 'photo-1507003211169-0a1dd7228f2d', 'photo-1494790108377-be9c29b29330'][index]
                }?auto=format&fit=crop&w=900&q=80`}
                alt={member.name}
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#5997F4]">{member.name}</h3>
                <p className="mt-1 text-sm font-semibold text-[#5997F4]">{member.role}</p>
                <p className="mt-3 text-sm text-slate-600">{member.bio}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default About
