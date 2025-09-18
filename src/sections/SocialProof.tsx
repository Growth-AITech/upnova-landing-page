const EarlyAdopters = () => {
  const metrics = [
    { value: "98%", label: "Coherencia Tonal Alcanzada" },
    { value: "5x", label: "Más Rápido que Revisión Manual" },
    { value: "24/7", label: "Disponibilidad del VibeMatch" }
  ]

  return (
    <section className="py-20 bg-vireo-deep-night">
      <div className="container">
        <h2 className="section-title">Lo que Dicen Nuestros Early Adopters.</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-12">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-extrabold logo-gradient mb-3">
                {metric.value}
              </div>
              <div className="text-vireo-soft-gray mt-3">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-vireo-card-subtle/30 rounded-2xl p-10 max-w-4xl mx-auto border border-vireo-reflective-cyan/20 mt-10">
          <p className="text-xl italic mb-5 text-vireo-soft-gray">
            "Vireo VibeMatch transformó nuestra estrategia de contenido. Por fin, nuestra marca suena siempre como nosotros mismos. La coherencia tonal que logramos es impresionante."
          </p>
          <p className="text-vireo-soft-gray/70 text-right">
            — Director de Marketing, TechFlow Studios
          </p>
        </div>
      </div>
    </section>
  )
}

export default EarlyAdopters
