import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Vireologo from "../assets/vireoLogo.png"
import LanguageSwitcher from './LanguageSwitcher'

const Navigation = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslation('common')
  
  return (
    <nav className="fixed top-0 w-full z-50 py-1 md:py-1 border-b border-vireo-reflective-cyan/10"
         style={{
           background: 'rgba(10, 17, 22, 0.95)',
           backdropFilter: 'blur(10px)'
         }}>
      <div className="container">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 md:gap-3">
            <img src={Vireologo} alt="UpNova Logo" className="h-16 w-16 md:h-20 md:w-20" />
            <div className="logo-gradient text-xl md:text-2xl font-bold">
              Vireo
            </div>
          </Link>
          
          <div className="flex items-center gap-4">
            {/* Navigation Tabs */}
            <div className="hidden md:flex items-center bg-vireo-card-subtle/30 rounded-full p-1 border border-vireo-reflective-cyan/20">
              <Link
                to="/"
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  location.pathname === '/'
                    ? 'bg-vireo-reflective-cyan text-vireo-deep-night shadow-md'
                    : 'text-vireo-soft-gray hover:text-vireo-reflective-cyan hover:bg-vireo-reflective-cyan/10'
                }`}
              >
                Inicio
              </Link>
              <Link
                to="/propuesta-valor"
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  location.pathname === '/propuesta-valor'
                    ? 'bg-vireo-reflective-cyan text-vireo-deep-night shadow-md'
                    : 'text-vireo-soft-gray hover:text-vireo-reflective-cyan hover:bg-vireo-reflective-cyan/10'
                }`}
              >
                VibeMatch
              </Link>
              <Link
                to="/real-estate"
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  location.pathname === '/real-estate'
                    ? 'bg-vireo-reflective-cyan text-vireo-deep-night shadow-md'
                    : 'text-vireo-soft-gray hover:text-vireo-reflective-cyan hover:bg-vireo-reflective-cyan/10'
                }`}
              >
                Funcionalidades
              </Link>
            </div>

            {/* Language Switcher */}
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>
            
            <a href="#contacto" className="cta-primary text-sm md:text-base px-4 py-2 md:px-8 md:py-3">
              <span className="hidden sm:inline">Acceso Anticipado</span>
              <span className="sm:hidden">Demo</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              className="md:hidden p-2 text-vireo-soft-gray hover:text-vireo-reflective-cyan transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-vireo-deep-night border-b border-vireo-reflective-cyan/10"
             style={{
               background: 'rgba(10, 17, 22, 0.98)',
               backdropFilter: 'blur(10px)'
             }}>
          <div className="container py-4">
            <div className="flex flex-col space-y-3">
              <Link
                to="/"
                className={`px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                  location.pathname === '/'
                    ? 'bg-vireo-reflective-cyan text-vireo-deep-night shadow-md'
                    : 'text-vireo-soft-gray hover:text-vireo-reflective-cyan hover:bg-vireo-reflective-cyan/10'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                to="/propuesta-valor"
                className={`px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                  location.pathname === '/propuesta-valor'
                    ? 'bg-vireo-reflective-cyan text-vireo-deep-night shadow-md'
                    : 'text-vireo-soft-gray hover:text-vireo-reflective-cyan hover:bg-vireo-reflective-cyan/10'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                VibeMatch
              </Link>
              <Link
                to="/real-estate"
                className={`px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                  location.pathname === '/real-estate'
                    ? 'bg-vireo-reflective-cyan text-vireo-deep-night shadow-md'
                    : 'text-vireo-soft-gray hover:text-vireo-reflective-cyan hover:bg-vireo-reflective-cyan/10'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Funcionalidades
              </Link>
              
              {/* Mobile Language Switcher */}
              <div className="pt-3 border-t border-vireo-reflective-cyan/10">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
