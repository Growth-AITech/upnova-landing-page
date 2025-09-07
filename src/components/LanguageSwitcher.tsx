import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronDown, Globe } from 'lucide-react'

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const languages = [
    {
      code: 'es',
      name: t('languages.spanish'),
      flag: '🇪🇸'
    },
    {
      code: 'en',
      name: t('languages.english'),
      flag: '🇺🇸'
    },
    {
      code: 'fr',
      name: t('languages.french'),
      flag: '🇫🇷'
    }
  ]

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0]

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode)
    setIsOpen(false)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Language Selector Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/[0.05] border border-white/[0.08] hover:bg-white/[0.10] hover:border-white/[0.15] transition-all duration-300 backdrop-blur-sm"
        aria-label="Select Language"
      >
        {/* Globe icon for mobile, flag for desktop */}
        <div className="flex items-center space-x-1">
          <Globe className="w-4 h-4 text-text-gray group-hover:text-white transition-colors duration-300 md:hidden" />
          <span className="text-lg hidden md:inline">{currentLanguage.flag}</span>
          <span className="text-sm font-medium text-text-gray group-hover:text-white transition-colors duration-300 hidden md:inline">
            {currentLanguage.code.toUpperCase()}
          </span>
        </div>
        <ChevronDown 
          className={`w-4 h-4 text-text-gray group-hover:text-white transition-all duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`} 
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-darker-bg/95 backdrop-blur-lg border border-white/[0.10] rounded-xl shadow-2xl z-50 overflow-hidden">
          <div className="py-2">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => changeLanguage(language.code)}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-white/[0.08] transition-all duration-300 ${
                  language.code === i18n.language 
                    ? 'bg-white/[0.05] text-white' 
                    : 'text-text-gray hover:text-white'
                }`}
              >
                <span className="text-lg">{language.flag}</span>
                <span className="flex-1 text-sm font-medium">{language.name}</span>
                {language.code === i18n.language && (
                  <div className="w-2 h-2 bg-primary-gradient rounded-full"></div>
                )}
              </button>
            ))}
          </div>

          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 to-accent-blue/5 pointer-events-none rounded-xl"></div>
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher