import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Electrical from './pages/Electrical'
import Solar from './pages/Solar'
import Consult from './pages/Consult'

function App() {
  const { pathname } = useLocation()

  // Keep page navigation polished by resetting to the top on route changes.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="relative min-h-screen bg-white text-slate-800">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/electrical" element={<Electrical />} />
        <Route path="/solar" element={<Solar />} />
        <Route path="/consult" element={<Consult />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
