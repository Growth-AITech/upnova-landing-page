import { Cpu, Database, TrendingUp } from 'lucide-react'

const VPTeam = () => {
  const teamMembers = [
    {
      icon: Cpu,
      name: "Mael",
      role: "Ingeniero de IA",
      description: "Nuestro cerebro técnico. Fusiona la creatividad con la tecnología para construir soluciones de IA únicas y efectivas."
    },
    {
      icon: Database,
      name: "David",
      role: "Arquitecto de Datos",
      description: "Con años de experiencia en multinacionales, diseña la infraestructura de datos robusta y escalable que tu negocio necesita."
    },
    {
      icon: TrendingUp,
      name: "Simon",
      role: "Gurú Comercial & Marketing Digital",
      description: "Con un alcance de más de 200 millones de visitas, sabe exactamente cómo crear estrategias de crecimiento orgánico que conectan y convierten."
    }
  ]

  return (
    <section className="py-20 px-6 bg-differentiator-gradient">
      <div className="container">
        <h2 className="section-title">Un Equipo de Élite para tu Éxito</h2>
        <p className="text-lg text-center mb-12 max-w-2xl mx-auto text-text-gray">
          Combinamos experiencia técnica, visión estratégica y creatividad para entregar resultados excepcionales.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index}
                 className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-white/[0.05] hover:shadow-2xl relative overflow-hidden group">
              {/* Top gradient border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary-gradient"></div>
              
              <div className="mb-6">
                <member.icon size={48} className="mx-auto text-accent-blue" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">
                {member.name}
              </h3>
              
              <p className="font-semibold text-accent-orange mb-4">
                {member.role}
              </p>
              
              <p className="text-text-gray leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default VPTeam