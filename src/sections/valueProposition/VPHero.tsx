import { ArrowRight } from 'lucide-react'

const VPHero = () => {
  return (
    <section id="VPHero" className="py-32 pb-20 bg-hero-gradient relative overflow-hidden">
      {/* Floating animation element */}
      <div className="absolute -top-1/2 -right-1/5 w-96 h-96 rounded-full animate-float opacity-10"
           style={{
             background: 'radial-gradient(circle, rgba(103, 126, 234, 0.1) 0%, transparent 70%)'
           }}>
      </div>
      
      <div className="container">
        <div className="text-center relative z-10">
          <h1 className="text-gradient font-extrabold mb-5 leading-tight"
              style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>
            Convertimos tu e-commerce en una 
            <br />
            <span className="logo-gradient">máquina de ventas 24/7</span>
          </h1>
          
          <p className="text-xl text-text-gray mb-8 font-normal max-w-3xl mx-auto">
            Una implementación estratégica para automatizar la atención al cliente y disparar tus ventas de forma inteligente.
          </p>
          
          <a href="#contacto" className="cta-primary text-lg flex items-center justify-center gap-2">
            Descubre Cómo
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default VPHero