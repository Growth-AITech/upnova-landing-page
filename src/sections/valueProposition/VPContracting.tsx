import { FileText, Settings, Shield } from 'lucide-react'

const VPContracting = () => {
  const contractFeatures = [
    {
      icon: FileText,
      title: "Contrato de Servicios",
      description: "Un acuerdo claro que define el alcance, los objetivos (KPIs) y las condiciones de nuestro partnership."
    },
    {
      icon: Settings,
      title: "Condiciones Flexibles",
      description: "Establecemos un periodo mínimo y opciones de pago que se adaptan a las necesidades y el flujo de caja de tu negocio."
    },
    {
      icon: Shield,
      title: "Garantía de Rendimiento",
      description: "Nos comprometemos con tus resultados. Optimizamos la solución hasta alcanzar los KPIs acordados."
    }
  ]

  return (
    <section className="py-20 px-6 bg-differentiator-gradient">
      <div className="container">
        <h2 className="section-title">Una Inversión Clara y Transparente</h2>
        <p className="text-lg text-center mb-12 max-w-2xl mx-auto text-text-gray">
          Nuestro modelo de contratación está diseñado para ser flexible y estar alineado con tu éxito.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {contractFeatures.map((feature, index) => (
            <div key={index}
                 className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-white/[0.05] hover:shadow-2xl relative overflow-hidden group">
              {/* Top gradient border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary-gradient"></div>
              
              <div className="mb-6">
                <feature.icon size={48} className="mx-auto text-accent-blue" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-accent-blue">
                {feature.title}
              </h3>
              
              <p className="text-text-gray leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default VPContracting