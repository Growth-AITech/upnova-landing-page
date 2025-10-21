const VireoAdvantage = () => {
  const advantagePoints = [
    "Elimina la subjetividad del tono con análisis predictivo de IA.",
    "Garantiza una coherencia de marca impecable en todos los canales de comunicación.",
    "Conecta profundamente con tu audiencia, resonando con el mensaje correcto.",
    "Diseñado para entender la fusión única de marketing y la esencia de tu música.",
    "Libera a tu equipo creativo para enfocarse en la estrategia, no en la corrección tonal."
  ]

  return (
    <section className="py-20 bg-differentiator-gradient">
      <div className="container">
        <h2 className="section-title">La Ventaja Vireo: Autenticidad sin Compromisos.</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
            {advantagePoints.map((point, index) => (
              <div key={index}
                   className="p-6 bg-vireo-card-subtle/30 rounded-lg border border-vireo-reflective-cyan/20 transition-all duration-300 hover:bg-vireo-reflective-cyan/10 flex items-start gap-4">
                <span className="text-vireo-reflective-cyan text-xl flex-shrink-0 mt-1">✓</span>
                <span className="text-vireo-soft-gray text-lg">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default VireoAdvantage
