import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "../styles/Navbar.css";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const phoneNumber = "+5493755000000"; // Reemplaza con tu número real
  const message = "¡Hola! Me gustaría hacer un pedido";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="logo.webp" alt="Dulce Artesanal Logo" />
          <h1>Dulce Artesanal</h1>
        </div>
        
        <div className="navbar-menu-icon" onClick={toggleMenu}>
          <span className={isMenuOpen ? "open" : ""}></span>
          <span className={isMenuOpen ? "open" : ""}></span>
          <span className={isMenuOpen ? "open" : ""}></span>
        </div>
        
        <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <li><a onClick={() => scrollToSection('inicio')} href="#inicio">Inicio</a></li>
          <li><a onClick={() => scrollToSection('nosotros')} href="#nosotros">Nosotros</a></li>
          <li><a onClick={() => scrollToSection('productos')} href="#productos">Productos</a></li>
          
          <li>
            <button className="order-button" onClick={handleWhatsAppClick}>
              <FaWhatsapp className="whatsapp-icon" />
              Hacer Pedido
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}