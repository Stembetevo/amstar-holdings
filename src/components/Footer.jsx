import { Link } from 'react-router-dom'
import { Briefcase, Globe, Rss, Mail, MapPin, Phone } from 'lucide-react'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

function Footer() {
  return (
    <footer className="bg-[#4789ee] text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8 font-semibold">
        <div>
          <h4 className="text-xl font-bold text-white">Amstar Holdings</h4>
          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            Reliable electrical and energy solutions for commercial, industrial,
            and residential clients.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a href="#" className="rounded-full bg-white/10 p-2 hover:bg-[#FFFFFF] hover:text-[#5997F4]" aria-label="Company profile">
              <Briefcase size={16} />
            </a>
            <a href="#" className="rounded-full bg-white/10 p-2 hover:bg-[#FFFFFF] hover:text-[#5997F4]" aria-label="Website link">
              <Globe size={16} />
            </a>
            <a href="#" className="rounded-full bg-white/10 p-2 hover:bg-[#FFFFFF] hover:text-[#5997F4]" aria-label="News feed">
              <Rss size={16} />
            </a>
          </div>
        </div>

        <div>
          <h5 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#FFFFFF]">Quick Links</h5>
          <ul className="mt-4 space-y-2">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm text-slate-300 transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#FFFFFF]">Contact Info</h5>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5" size={16} />
              Utawala Embakasi East Nairobi, Kenya
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5" size={16} />
              +254 721954575
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5" size={16} />
              amstarholding@gmail.com
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-[#FFFFFF]">
        © {new Date().getFullYear()} Amstar Holdings. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
