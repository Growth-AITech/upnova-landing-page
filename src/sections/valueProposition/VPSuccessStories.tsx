import { Eye, Smartphone, Brain } from 'lucide-react'

const VPSuccessStories = () => {
  const projects = [
    {
      icon: Eye,
      title: "Proyecto 1: Acuicultura Inteligente",
      description: "Diseño y construcción de un sistema de visión artificial y hardware para la industria acuícola. Esta tecnología cuenta peces de forma automatizada, optimizando el inventario y reduciendo el estrés en los animales, una herramienta eficiente y no invasiva para la gestión de granjas piscícolas."
    },
    {
      icon: Smartphone,
      title: "Proyecto 2: Calidad del Cacao Digitalizada",
      description: "Creación de una aplicación móvil que identifica el tipo de cacao mediante visión artificial. La app facilita a los agricultores la trazabilidad y asegura la calidad del producto, usando aprendizaje automático para entregar información valiosa en segundos."
    },
    {
      icon: Brain,
      title: "Proyecto 3: Predictor de Diagnósticos Médicos",
      description: "Desarrollo de un modelo predictivo para la asistencia en diagnósticos médicos y la sugerencia de tratamientos. Este sistema utiliza inteligencia artificial y minería de datos para analizar historiales de pacientes y ofrecer un apoyo valioso a los profesionales de la salud."
    }
  ]

  return (
    <section className="py-20 px-6">
      <div className="container">
        <h2 className="section-title">Experiencia Comprobada</h2>
        <p className="text-lg text-center mb-12 max-w-2xl mx-auto text-text-gray">
          Nuestra trayectoria habla por nosotros. Hemos trabajado en entornos de alta exigencia, construyendo soluciones de datos robustas y escalables.
        </p>
        
        <div className="max-w-6xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <div key={index}
                 className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-white/[0.05] hover:shadow-2xl relative overflow-hidden">
              {/* Top gradient border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary-gradient"></div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <project.icon size={32} className="text-accent-orange" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-accent-orange mb-2">
                    {project.title}
                  </h3>
                  <p className="text-text-gray leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
          
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 text-center relative overflow-hidden">
            {/* Top gradient border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-primary-gradient"></div>
            
            <p className="text-text-gray mb-4">
              Por razones contractuales y acuerdos de confidencialidad (NDA), no podemos nombrar públicamente a todos nuestros clientes. Sin embargo, trabajamos con proyectos comerciales reales y podemos compartir referencias en privado tras un acuerdo mutuo.
            </p>
            <p className="font-semibold text-accent-orange">
              Nuestro equipo técnico en <span className="logo-gradient font-bold">UPNOVA</span> cuenta con experiencia directa en roles avanzados de datos (data engineer, data analyst, lead data analyst) en multinacionales y en equipos creados por desarrolladores de videojuegos para franquicias relacionadas con Disney.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VPSuccessStories