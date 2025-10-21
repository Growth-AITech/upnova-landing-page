import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className="py-32 pb-20 bg-hero-gradient relative overflow-hidden">
      {/* Floating animation element */}
      <div className="absolute -top-1/2 -right-1/5 w-96 h-96 rounded-full animate-float opacity-10"
           style={{
             background: 'radial-gradient(circle, rgba(0, 255, 192, 0.1) 0%, transparent 70%)'
           }}>
      </div>
      
      <div className="container">
        <div className="text-center relative z-10">
          <h1 className="text-gradient font-extrabold mb-5 leading-tight"
              style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}>
            Vireo. Encuentra la Verdadera Frecuencia de Tu Marca.
          </h1>
          
          <p className="text-xl text-vireo-soft-gray mb-8 font-normal">
            Vireo VibeMatch asegura que cada mensaje de tu marca resuene con una coherencia tonal perfecta. Autenticidad inconfundible, potenciada por IA.
          </p>
          
          <a href="#contacto" className="cta-primary text-lg flex items-center justify-center gap-2">
            Empieza a Armonizar Hoy
            <ArrowRight size={18} />
          </a>
          
          <div className="urgency mt-5 text-vireo-reflective-cyan text-base flex items-center justify-center gap-2">
            <span className="animate-burn text-xl"></span>
            <span>Acceso exclusivo para early adopters</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
