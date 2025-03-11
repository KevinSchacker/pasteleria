import { FaFacebookF, FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa"
import "../styles/Footer.css"
import logo from "/logo.webp"

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
            <img src="/logo.webp" alt="Dulce Artesanal Logo" />
              <h2>Dulce Artesanal</h2>
            </div>
            <p className="footer-description">
              Creamos momentos dulces y memorables con nuestras creaciones artesanales. Cada producto es elaborado con
              amor y los mejores ingredientes.
            </p>
            <div className="footer-social">
              <a href="#" className="social-icon">
                <FaFacebookF />
              </a>
              <a href="#" className="social-icon">
                <FaInstagram />
              </a>
              <a href="#" className="social-icon">
                <FaWhatsapp />
              </a>
              <a href="#" className="social-icon">
                <FaTiktok />
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3>Explorar</h3>
            <div className="footer-links">
              <a href="#inicio">Inicio</a>
              <a href="#nosotros">Nosotros</a>
              <a href="#productos">Productos</a>
              <a href="#contacto">Contacto</a>
            </div>
          </div>

          <div className="footer-column">
            <h3>Productos</h3>
            <div className="footer-links">
              <a href="#productos">Pasteles</a>
              <a href="#productos">Cupcakes</a>
              <a href="#productos">Galletas</a>
              <a href="#productos">Postres</a>
            </div>
          </div>

          <div className="footer-column">
            <h3>Contacto</h3>
            <div className="footer-links">
              <a href="#">Calle Dulce 123, Ciudad</a>
              <a href="tel:+123456789">+123 456 789</a>
              <a href="mailto:info@dulceartesanal.com">info@dulceartesanal.com</a>
              <a href="#">Lun-Sáb: 9:00 - 19:00</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Dulce Artesanal. Todos los derechos reservados.  
        &copy; <a href="https://www.fullpc.com.ar" target="_blank" rel="noopener noreferrer">FullPc</a>
        </div>
      </div>
    </footer>
  )
}

