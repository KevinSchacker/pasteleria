import { FaWhatsapp } from "react-icons/fa"
import "../styles/Contact.css"

export function Contact() {
  const phoneNumber = "+5493755000000" // Reemplaza con tu número real
  const message = "Hola! Me gustaría hacer un pedido"
  
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <>
      <button className="whatsapp-button" onClick={handleWhatsAppClick}>
        <FaWhatsapp className="whatsapp-icon" />
        <span className="whatsapp-text">Contáctanos</span>
      </button>
    </>
  )
}