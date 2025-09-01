const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp number and message
    const phoneNumber = "1234567890" // Replace with actual phone number
    const message = encodeURIComponent("Hola! Me interesa la auditoría gratuita de automatización de UPNOVA")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="w-15 h-15 bg-green-500 rounded-full flex items-center justify-center text-white text-3xl transition-all duration-300 hover:scale-110 hover:shadow-2xl"
        style={{ 
          backgroundColor: '#25d366',
          boxShadow: '0 10px 30px rgba(37, 211, 102, 0.3)',
          width: '60px',
          height: '60px'
        }}
        aria-label="Contactar por WhatsApp"
      >
        <span>📱</span>
      </button>
    </div>
  )
}

export default WhatsAppFloat