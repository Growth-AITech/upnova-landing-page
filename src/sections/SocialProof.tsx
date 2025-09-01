const SocialProof = () => {
  const metrics = [
    { value: "327%", label: "Aumento en conversiones" },
    { value: "68%", label: "Reducción costo por lead" },
    { value: "12hrs", label: "Recuperadas por vendedor/semana" }
  ]

  return (
    <section className="py-20 bg-dark-bg">
      <div className="container">
        <h2 className="section-title">Empresas que ya no compiten, dominan</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-12">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-extrabold logo-gradient mb-3">
                {metric.value}
              </div>
              <div className="text-text-gray mt-3">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-white/[0.02] rounded-2xl p-10 max-w-4xl mx-auto border border-white/[0.05] mt-10">
          <p className="text-xl italic mb-5 text-text-light">
            "Desarrollamos junto al equipo técnico de UPNOVA una plataforma de IA para optimizar la cadena de suministro cafetera. Su dominio técnico y capacidad de innovación transformó por completo nuestros procesos de predicción y gestión de inventarios"
          </p>
          <p className="text-text-gray text-right">
            — CEO, AC Ingeniería Virtual
          </p>
        </div>
      </div>
    </section>
  )
}

export default SocialProof
