import { useEffect, useRef } from 'react'
import { Check, Star, Zap } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const REPricing = () => {
  const titleRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const { t } = useTranslation('realEstate')

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === titleRef.current) {
            entry.target.classList.add('animate-slide-up')
            entry.target.classList.remove('opacity-0', 'translate-y-8')
          }
          if (entry.target === cardsRef.current) {
            const pricingCards = entry.target.querySelectorAll('.pricing-card')
            pricingCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-slide-up')
                card.classList.remove('opacity-0', 'translate-y-8')
              }, index * 200)
            })
          }
        }
      })
    }, observerOptions)

    const elements = [titleRef.current, cardsRef.current]
    elements.forEach(el => {
      if (el) {
        observer.observe(el)
      }
    })

    // Initialize animations
    if (titleRef.current) {
      titleRef.current.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700', 'ease-out')
    }

    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll('.pricing-card')
      cards.forEach(card => {
        card.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700', 'ease-out')
      })
    }

    return () => observer.disconnect()
  }, [])

  const plans = [
    {
      planKey: 'launch',
      gradient: 'from-accent-blue to-accent-purple',
      popular: false,
      comingSoon: false
    },
    {
      planKey: 'connect',
      gradient: 'from-accent-orange to-accent-purple',
      popular: true,
      comingSoon: false
    },
    {
      planKey: 'next',
      gradient: 'from-accent-purple to-accent-blue',
      popular: false,
      comingSoon: true
    }
  ]

  return (
    <section className="relative py-24 bg-darker-bg overflow-hidden" style={{ paddingTop: '90px', paddingBottom: '90px' }}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-accent-purple/3 to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-orange/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent-blue/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container relative z-10 max-w-7xl mx-auto px-4">
        {/* Section title */}
        <div ref={titleRef} className="text-center mb-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-2"></div>
            <div className="md:col-span-8">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="inline-block hover:scale-105 transition-transform duration-500 ease-out">
                  {t('pricing.title.planes')}
                </span>
                <span className="block logo-gradient hover:scale-105 transition-transform duration-500 ease-out" style={{ transitionDelay: '100ms' }}>
                  {t('pricing.title.paraCrecer')}
                </span>
              </h2>
              <p className="text-xl text-text-gray hover:text-white transition-colors duration-500" style={{ lineHeight: '1.6' }}>
                {t('pricing.subtitle')}
              </p>
            </div>
            <div className="md:col-span-2"></div>
          </div>
        </div>

        {/* Pricing cards */}
        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card relative group ${plan.popular ? 'lg:scale-110 lg:-mt-8 lg:mb-8' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="flex items-center space-x-1 bg-gradient-to-r from-accent-orange to-accent-purple px-4 py-2 rounded-full text-white text-sm font-semibold">
                    <Star className="w-4 h-4 fill-current" />
                    <span>{t('pricing.popular')}</span>
                  </div>
                </div>
              )}

              {/* Main card */}
              <div className={`relative bg-white/[0.02] backdrop-blur-sm border border-white/[0.08] rounded-3xl p-8 lg:p-10 hover:bg-white/[0.05] hover:border-white/[0.15] transition-all duration-500 hover:scale-105 hover:shadow-2xl ${plan.popular ? 'border-white/[0.15]' : ''}`}>
                {/* Coming soon overlay */}
                {plan.comingSoon && (
                  <div className="absolute inset-0 bg-darker-bg/80 backdrop-blur-sm rounded-3xl flex items-center justify-center z-20">
                    <div className="text-center">
                      <Zap className="w-12 h-12 text-accent-orange mx-auto mb-4 animate-pulse" />
                      <div className="text-xl font-bold logo-gradient mb-2">{t('pricing.comingSoon.title')}</div>
                      <div className="text-text-gray">{t('pricing.comingSoon.subtitle')}</div>
                    </div>
                  </div>
                )}

                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>

                <div className="relative z-10">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className="text-sm text-text-gray uppercase tracking-wider mb-2">
                      {t(`pricing.plans.${plan.planKey}.subtitle`)}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:logo-gradient transition-all duration-300">
                      {t(`pricing.plans.${plan.planKey}.name`)}
                    </h3>
                    <div className="mb-4">
                      <span className="text-4xl lg:text-5xl font-bold text-white group-hover:logo-gradient transition-all duration-300">
                        {t(`pricing.plans.${plan.planKey}.price`)}
                      </span>
                      <span className="text-text-gray text-lg ml-2">
                        {t(`pricing.plans.${plan.planKey}.period`)}
                      </span>
                    </div>
                    <p className="text-text-gray group-hover:text-white transition-colors duration-300 text-sm leading-relaxed">
                      {t(`pricing.plans.${plan.planKey}.description`)}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <div className="space-y-4">
                      {(t(`pricing.plans.${plan.planKey}.features`, { returnObjects: true }) as string[]).map((feature: string, featureIndex: number) => (
                        <div
                          key={featureIndex}
                          className="flex items-start space-x-3 group-hover:scale-[1.02] transition-transform duration-300"
                          style={{ transitionDelay: `${featureIndex * 50}ms` }}
                        >
                          <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r ${plan.gradient} p-[1px] mt-0.5`}>
                            <div className="w-full h-full bg-darker-bg rounded-full flex items-center justify-center">
                              <Check className="w-3 h-3 text-white" />
                            </div>
                          </div>
                          <span className="text-text-gray group-hover:text-white transition-colors duration-300 text-sm leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button 
                    className={`w-full py-4 text-center font-semibold rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                      plan.popular 
                        ? 'cta-primary text-white' 
                        : 'border border-white/20 text-white hover:border-white/40 hover:bg-white/5 backdrop-blur-sm'
                    }`}
                    disabled={plan.comingSoon}
                  >
                    <span className={`relative z-10 ${plan.popular ? '' : 'group-hover:logo-gradient'} transition-all duration-300`}>
                      {plan.planKey === 'launch' && t('buttons.startFree', { ns: 'common' })}
                      {plan.planKey === 'connect' && t('buttons.requestDemo', { ns: 'common' })}
                      {plan.planKey === 'next' && t('buttons.waitingList', { ns: 'common' })}
                    </span>
                    {!plan.popular && (
                      <div className={`absolute inset-0 bg-gradient-to-r ${plan.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl`}></div>
                    )}
                  </button>
                </div>

                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className={`absolute inset-0 bg-gradient-to-r ${plan.gradient} rounded-3xl blur-xl opacity-20`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="text-center mt-16">
          <div className="mb-8">
            <p className="text-lg text-text-gray mb-4 hover:text-white transition-colors duration-500">
              {t('pricing.bottomText')}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-text-gray">
              {(t('pricing.guarantees', { returnObjects: true }) as string[]).map((guarantee: string, index: number) => (
                <div key={index} className="flex items-center space-x-2">
                  <Check className={`w-4 h-4 ${index === 0 ? 'text-accent-orange' : index === 1 ? 'text-accent-blue' : 'text-accent-purple'}`} />
                  <span>{guarantee}</span>
                </div>
              ))}
            </div>
          </div>
          
          <button className="group relative border-2 border-white/20 text-white px-8 py-4 text-lg font-medium rounded-lg backdrop-blur-sm hover:border-white/40 hover:bg-white/5 transition-all duration-500 hover:scale-105 hover:shadow-xl">
            <span className="relative z-10 group-hover:logo-gradient transition-all duration-300">
              {t('buttons.customProposal', { ns: 'common' })}
            </span>
            <div className="absolute inset-0 bg-primary-gradient opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg"></div>
          </button>
        </div>
      </div>
    </section>
  )
}

export default REPricing