import { FaQuoteRight, FaStar, FaStarHalfAlt } from "react-icons/fa"
import "../styles/Testimonials.css"

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      content:
        "Los pasteles de Dulce Artesanal son simplemente increíbles. Pedí uno para el cumpleaños de mi hija y todos quedaron encantados con el sabor y la presentación.",
      author: "María González",
      role: "Cliente frecuente",
      avatar: "https://i.pinimg.com/736x/3e/27/6d/3e276d99fdb191d79717bfec6df18a8e.jpg",
      rating: 5,
    },
    {
      id: 2,
      content:
        "Nunca había probado cupcakes tan deliciosos. La textura, el sabor y la decoración son perfectos. Definitivamente volveré a comprar para mis eventos.",
      author: "Carlos Rodríguez",
      role: "Cliente satisfecho",
      avatar: "https://i.pinimg.com/736x/e7/77/2e/e7772edb66ba76fa109f2df4c224fd4b.jpg",
      rating: 4.5,
    },
    {
      id: 3,
      content:
        "Encargué galletas personalizadas para un evento corporativo y superaron mis expectativas. El servicio fue excelente y todos mis colegas quedaron impresionados.",
      author: "Laura Martínez",
      role: "Cliente corporativo",
      avatar: "https://i.pinimg.com/736x/59/cf/96/59cf968c4101c23600631e2d5070cde5.jpg",
      rating: 5,
    },
  ]

  // Función para renderizar estrellas según la calificación
  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`star-${i}`} />)
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half-star" />)
    }

    return stars
  }

  return (
    <section className="testimonials">
      <div className="testimonials-header">
        <h2>Lo que dicen nuestros clientes</h2>
        <p>Descubre por qué nuestros clientes nos eligen para sus momentos especiales</p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="testimonial-quote">
              <FaQuoteRight />
            </div>
            <p className="testimonial-content">{testimonial.content}</p>
            <div className="testimonial-author">
              <div className="author-avatar">
                <img src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
              </div>
              <div className="author-info">
                <h4>{testimonial.author}</h4>
                <p>{testimonial.role}</p>
                <div className="rating">{renderStars(testimonial.rating)}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

