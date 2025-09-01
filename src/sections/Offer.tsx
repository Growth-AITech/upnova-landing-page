const Offer = () => {
  const offerPoints = [
    "Dónde pierdes el 80% de tus ventas potenciales",
    "Qué procesos automatizar primero para ver ROI inmediato",
    "Cuánto dinero dejas sobre la mesa cada mes",
    "Hoja de ruta personalizada de implementación"
  ]

  return (
    <section className="py-20 bg-offer-gradient" id="contacto">
      <div className="container">
        <div className="bg-white/[0.02] border-2 rounded-3xl p-16 text-center max-w-4xl mx-auto relative overflow-hidden"
             style={{ borderColor: 'rgba(103, 126, 234, 0.3)' }}>
          
          {/* Rotating background animation */}
          <div className="absolute -top-1/2 -left-1/2 w-full h-full animate-rotate opacity-5"
               style={{
                 width: '200%',
                 height: '200%',
                 background: 'radial-gradient(circle, rgba(103, 126, 234, 0.05) 0%, transparent 70%)'
               }}>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl mb-8 font-bold">
              Auditoría Gratuita de Automatización
            </h2>
            
            <p className="text-xl mb-8 text-text-gray">
              En solo 30 minutos descubrirás:
            </p>
            
            <ul className="list-none mb-8 space-y-3">
              {offerPoints.map((point, index) => (
                <li key={index} className="py-3 text-text-light text-lg flex items-center justify-center gap-3">
                  <span className="text-green-400 text-xl">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            
            <a href="https://wa.link/8spcit" className="cta-primary text-xl px-12 py-5">
              Reservar mi auditoría gratuita →
            </a>
            
            <div className="bg-accent-orange/10 border border-accent-orange rounded-lg p-4 mt-8 text-accent-orange">
              ⏰ Solo quedan 3 slots disponibles esta semana
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Offer