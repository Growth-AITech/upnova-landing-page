import { Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="py-12 bg-dark-bg border-t border-white/10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="logo-gradient text-2xl font-bold">
              UPNOVA
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-text-gray">Visitanos en</span>
            <a 
              href="https://www.instagram.com/simonpazos_?igsh=YjRkNmZ2YjhpNzll&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-accent-blue/50 rounded-full p-3 transition-all duration-300 hover:scale-105"
            >
              <Instagram size={20} className="text-accent-blue" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/[0.05] text-center">
          <p className="text-text-gray text-sm">
            © 2025 UPNOVA. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
