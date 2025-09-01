import Upnovalogo from "../assets/upnova.png";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 py-2 md:py-2 border-b border-white/10" 
         style={{ 
           background: 'rgba(15, 15, 30, 0.95)',
           backdropFilter: 'blur(10px)' 
         }}>
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 md:gap-3">
            <img src={Upnovalogo} alt="UpNova Logo" className="h-12 w-12 md:h-24 md:w-24" />
            <div className="logo-gradient text-xl md:text-3xl font-bold">
              UPNOVA
            </div>
          </div>
          <a href="#contacto" className="cta-primary text-sm md:text-base px-4 py-2 md:px-8 md:py-3">
            <span className="hidden sm:inline">Contactar Ahora</span>
            <span className="sm:hidden">Contactar</span>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
