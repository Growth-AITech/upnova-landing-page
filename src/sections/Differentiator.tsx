const Differentiator = () => {
  const traditionalPoints = [
    "Te venden servicios mensuales",
    "Dependes eternamente de ellos", 
    "Reportes mensuales aburridos",
    "Plantillas genéricas para todos",
    "Cobran por hora trabajada"
  ]

  const upnovaPoints = [
    "Te construimos sistemas propios",
    "Te vuelves completamente autónomo",
    "Dashboard en tiempo real 24/7", 
    "IA entrenada para TU negocio",
    "Cobramos por resultados reales"
  ]

  return (
    <section className="py-20 bg-differentiator-gradient">
      <div className="container">
        <h2 className="section-title">No somos otra agencia de marketing</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12 max-w-5xl mx-auto">
          {/* Traditional Column */}
          <div className="p-8 rounded-2xl border border-red-400/20"
               style={{ background: 'rgba(255, 107, 107, 0.05)' }}>
            <h3 className="text-2xl mb-6 text-center font-semibold">
              Agencias Tradicionales
            </h3>
            <div className="space-y-3">
              {traditionalPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-3 py-3 text-text-gray">
                  <span className="text-red-400 text-xl">✗</span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* UPNOVA Column */}
          <div className="p-8 rounded-2xl border-2 relative"
               style={{ 
                 background: 'rgba(103, 126, 234, 0.05)',
                 borderColor: 'rgba(103, 126, 234, 0.3)'
               }}>
            {/* Recommended badge */}
            <div className="absolute -top-4 right-5 bg-primary-gradient text-white px-4 py-1 rounded-full text-xs font-bold">
              RECOMENDADO
            </div>
            
            <h3 className="text-2xl mb-6 text-center font-semibold">
              UPNOVA
            </h3>
            <div className="space-y-3">
              {upnovaPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-3 py-3 text-text-gray">
                  <span className="text-green-400 text-xl">✓</span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Differentiator