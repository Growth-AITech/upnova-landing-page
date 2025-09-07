import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'

const REHero = () => {
  const titleRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const { t } = useTranslation('realEstate')

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up')
          entry.target.classList.remove('opacity-0', 'translate-y-8')
        }
      })
    }, observerOptions)

    const elements = [titleRef.current, subtitleRef.current, buttonsRef.current]
    elements.forEach((el, index) => {
      if (el) {
        el.style.transitionDelay = `${index * 200}ms`
        el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700', 'ease-out')
        observer.observe(el)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-darker-bg overflow-hidden" style={{ paddingTop: '90px', paddingBottom: '90px' }}>
      {/* Background gradient similar to Seleris */}
      <div className="absolute inset-0 bg-gradient-to-br from-darker-bg via-dark-bg/50 to-darker-bg"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-accent-purple/5 to-transparent"></div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-accent-purple/30 rounded-full animate-float"></div>
      <div className="absolute top-3/4 right-16 w-3 h-3 bg-accent-blue/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-accent-orange/40 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="container relative z-10 text-center max-w-6xl mx-auto px-4">
        {/* Main title with grid layout similar to Seleris */}
        <div 
          ref={titleRef}
          className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-8"
        >
          <div className="md:col-span-2"></div>
          <div className="md:col-span-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <span className="inline-block hover:scale-105 transition-transform duration-500 ease-out">
                {t('hero.title.impulsa')}
              </span>
              <span className="inline-block mx-3 hover:scale-105 transition-transform duration-500 ease-out" style={{ transitionDelay: '100ms' }}>
                {t('hero.title.tus')}
              </span>
              <span className="block md:inline-block hover:scale-105 transition-transform duration-500 ease-out logo-gradient" style={{ transitionDelay: '200ms' }}>
                {t('hero.title.ventas')}
              </span>
              <span className="block hover:scale-105 transition-transform duration-500 ease-out" style={{ transitionDelay: '300ms' }}>
                {t('hero.title.alMaximo')}
              </span>
            </h1>
          </div>
          <div className="md:col-span-2"></div>
        </div>

        {/* Subtitle */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-12">
          <div className="md:col-span-2"></div>
          <div className="md:col-span-8">
            <p 
              ref={subtitleRef}
              className="text-lg md:text-xl text-text-gray leading-relaxed hover:text-white transition-colors duration-500 ease-out"
              style={{ lineHeight: '1.6' }}
            >
              {t('hero.subtitle')}
            </p>
          </div>
          <div className="md:col-span-2"></div>
        </div>

        {/* CTA Buttons with hover animations */}
        <div 
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="group relative cta-primary px-8 py-4 text-lg font-medium overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              {t('buttons.scheduleDemo', { ns: 'common' })}
            </span>
            <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </button>
          
          <button className="group relative border-2 border-white/20 text-white px-8 py-4 text-lg font-medium rounded-lg backdrop-blur-sm hover:border-white/40 hover:bg-white/5 transition-all duration-500 hover:scale-105 hover:shadow-xl">
            <span className="relative z-10 group-hover:logo-gradient transition-all duration-300">
              {t('buttons.seeFeatures', { ns: 'common' })}
            </span>
            <div className="absolute inset-0 bg-primary-gradient opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg"></div>
          </button>
        </div>

        {/* Stats or metrics row */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group hover:scale-105 transition-all duration-500">
            <div className="text-2xl md:text-3xl font-bold logo-gradient">{t('hero.stats.conversion.value')}</div>
            <div className="text-text-gray group-hover:text-white transition-colors duration-300">{t('hero.stats.conversion.label')}</div>
          </div>
          <div className="group hover:scale-105 transition-all duration-500">
            <div className="text-2xl md:text-3xl font-bold logo-gradient">{t('hero.stats.management.value')}</div>
            <div className="text-text-gray group-hover:text-white transition-colors duration-300">{t('hero.stats.management.label')}</div>
          </div>
          <div className="group hover:scale-105 transition-all duration-500">
            <div className="text-2xl md:text-3xl font-bold logo-gradient">{t('hero.stats.users.value')}</div>
            <div className="text-text-gray group-hover:text-white transition-colors duration-300">{t('hero.stats.users.label')}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default REHero