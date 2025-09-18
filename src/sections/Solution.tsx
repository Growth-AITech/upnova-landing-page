import { Rocket, Zap, TrendingUp, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const VibeMatchFeatures = () => {
  const features = [
    {
      icon: Rocket,
      title: "Define Tu Vibra Única.",
      description: "Entrena a nuestra IA con tu contenido clave. VibeMatch aprende la esencia tonal y emocional de tu marca o música, creando un perfil exclusivo."
    },
    {
      icon: Zap,
      title: "Puntuación de Coherencia Instantánea.",
      description: "Evalúa al instante cualquier borrador de contenido. Recibe un 'VibeMatch Score' que indica qué tan alineado está tu texto con el tono deseado."
    },
    {
      icon: TrendingUp,
      title: "Refina y Resuena.",
      description: "Si tu contenido se desvía, nuestra IA sugiere ajustes en tiempo real para optimizar palabras, frases o estructura, asegurando una resonancia perfecta."
    },
    {
      icon: ArrowRight,
      title: "Escala Tu Autenticidad.",
      description: "Produce contenido de alto impacto con confianza. VibeMatch garantiza que cada interacción de marca mantenga tu voz, sin importar el volumen."
    }
  ]

  return (
    <section className="py-20 bg-solution-gradient">
      <div className="container">
        <h2 className="section-title">VibeMatch: Tu Arquitecto de Tono Impulsado por IA.</h2>
        <p className="text-center text-xl text-vireo-soft-gray mb-12 max-w-3xl mx-auto">
          Descubre cómo Vireo VibeMatch te da el control absoluto sobre la resonancia emocional de tu marca.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          {features.map((feature, index) => (
            <div key={index}
                 className="bg-vireo-card-subtle/30 border border-vireo-reflective-cyan/20 rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-vireo-reflective-cyan/10 hover:shadow-2xl relative overflow-hidden group">
              {/* Top gradient border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary-gradient"></div>

              <div className="mb-5">
                <feature.icon size={48} className="mx-auto text-vireo-reflective-cyan" />
              </div>

              <h3 className="text-2xl mb-4 font-semibold logo-gradient">
                {feature.title}
              </h3>

              <p className="text-vireo-soft-gray leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="flex justify-center mt-16">
          <Link
            to="#contacto"
            className="cta-primary text-lg px-12 py-4 flex items-center justify-center gap-3 group text-center"
          >
            Experimenta VibeMatch
            <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default VibeMatchFeatures
