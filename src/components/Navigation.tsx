import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Upnovalogo from "../assets/upnova.png";

const Navigation = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <nav className="fixed top-0 w-full z-50 py-2 md:py-2 border-b border-white/10" 
         style={{ 
           background: 'rgba(15, 15, 30, 0.95)',
           backdropFilter: 'blur(10px)' 
         }}>
      <div className="container">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 md:gap-3">
            <img src={Upnovalogo} alt="UpNova Logo" className="h-12 w-12 md:h-24 md:w-24" />
            <div className="logo-gradient text-xl md:text-3xl font-bold">
              UPNOVA
            </div>
          </Link>
          
          <div className="flex items-center gap-6">
            {/* Navigation Tabs */}
            <div className="hidden md:flex items-center bg-white/[0.05] rounded-full p-1 border border-white/10">
              <Link 
                to="/" 
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  location.pathname === '/' 
                    ? 'bg-primary-gradient text-white shadow-md' 
                    : 'text-text-gray hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/propuesta-valor" 
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  location.pathname === '/propuesta-valor' 
                    ? 'bg-primary-gradient text-white shadow-md' 
                    : 'text-text-gray hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                Propuesta de Valor
              </Link>
            </div>
            
            <a href="#contacto" className="cta-primary text-sm md:text-base px-4 py-2 md:px-8 md:py-3">
              <span className="hidden sm:inline">Contactar Ahora</span>
              <span className="sm:hidden">Contactar</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button 
              className="md:hidden p-2 text-white hover:text-primary-purple transition-colors"
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
        <div className="md:hidden absolute top-full left-0 w-full bg-darker-bg border-b border-white/10"
             style={{ 
               background: 'rgba(15, 15, 30, 0.98)',
               backdropFilter: 'blur(10px)' 
             }}>
          <div className="container py-4">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className={`px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                  location.pathname === '/' 
                    ? 'bg-primary-gradient text-white shadow-md' 
                    : 'text-text-gray hover:text-white hover:bg-white/[0.05]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/propuesta-valor" 
                className={`px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                  location.pathname === '/propuesta-valor' 
                    ? 'bg-primary-gradient text-white shadow-md' 
                    : 'text-text-gray hover:text-white hover:bg-white/[0.05]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Propuesta de Valor
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
