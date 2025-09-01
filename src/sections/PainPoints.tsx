const PainPoints = () => {
  const painPoints = [
    "Pierdes leads porque nadie les da seguimiento a tiempo",
    "Tu equipo hace copy-paste de mensajes todo el día", 
    "No sabes qué campañas realmente generan ROI",
    "Tus vendedores olvidan hacer follow-up",
    "Gastas fortunas en ads sin sistema de conversión",
    "Tu competencia responde en segundos, tú en horas"
  ]

  return (
    <section className="py-20 bg-dark-bg">
      <div className="container">
        <h2 className="section-title">¿Te suena familiar?</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {painPoints.map((pain, index) => (
            <div key={index} 
                 className="flex items-start gap-4 p-5 bg-white/[0.02] rounded-lg border border-white/[0.05] transition-all duration-300 hover:bg-white/[0.04] hover:translate-x-1">
              <span className="text-red-400 text-2xl flex-shrink-0">✗</span>
              <span className="text-text-gray text-base">{pain}</span>
            </div>
          ))}
        </div>
        
        <p className="text-center text-lg text-accent-orange italic mt-10">
          "Cada minuto sin automatización es dinero que tu competencia está ganando"
        </p>
      </div>
    </section>
  )
}

export default PainPoints