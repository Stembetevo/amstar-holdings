import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-3 text-lg font-bold tracking-tight text-[#0A1628]"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#0A1628] text-sm font-extrabold text-[#F5A623]">
            AH
          </span>
          <span>Amstar Holdings</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-semibold transition ${
                  isActive ? 'text-[#0A1628]' : 'text-slate-600 hover:text-[#0A1628]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="rounded-full bg-[#F5A623] px-5 py-2.5 text-sm font-semibold text-[#0A1628] transition hover:bg-[#0A1628] hover:text-[#F5A623]"
          >
            Get a Free Quote
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex rounded-lg p-2 text-[#0A1628] md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm font-semibold ${
                    isActive
                      ? 'bg-[#0A1628] text-white'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-[#0A1628]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
