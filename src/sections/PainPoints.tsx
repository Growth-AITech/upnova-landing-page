const AboutUs = () => {
  const aboutPoints = [
    "En el ruido digital, la coherencia lo es todo. Vireo VibeMatch elimina la subjetividad, garantizando que cada pieza de tu contenido refleje la verdadera esencia de tu marca.",
    "Nuestra IA de vanguardia aprende el 'vibe' único de tu marca o música, actuando como tu arquitecto tonal personal para una comunicación ininterrumpida y auténtica.",
    "De la primera nota al último tweet, aseguramos que tu mensaje resuene con una precisión emocional sin precedentes."
  ]

  return (
    <section className="py-20 bg-vireo-deep-night">
      <div className="container">
        <h2 className="section-title">La Ciencia de las Marcas Inconfundibles.</h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {aboutPoints.map((point, index) => (
            <div key={index}
                 className="p-6 bg-vireo-card-subtle/30 rounded-lg border border-vireo-reflective-cyan/10 transition-all duration-300 hover:bg-vireo-reflective-cyan/10">
              <p className="text-vireo-soft-gray text-lg leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}

export default AboutUs
