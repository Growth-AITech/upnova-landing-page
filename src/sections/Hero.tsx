const Hero = () => {
  return (
    <section className="py-32 pb-20 bg-hero-gradient relative overflow-hidden">
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
            ¿Tu equipo pierde 15 horas semanales en tareas repetitivas mientras tus competidores automatizan y escalan?
          </h1>
          
          <p className="text-xl text-text-gray mb-8 font-normal">
            Transformamos tu caos operativo en sistemas inteligentes que venden mientras duermes
          </p>
          
          <a href="#contacto" className="cta-primary text-lg">
            Quiero automatizar mi negocio →
          </a>
          
          <div className="urgency mt-5 text-accent-orange text-base flex items-center justify-center gap-2">
            <span className="animate-burn text-xl">🔥</span>
            <span>Solo trabajamos con 5 nuevas empresas al mes</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero