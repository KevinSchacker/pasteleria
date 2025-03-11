"use client"

import { useState, useEffect } from "react"
import { FaChevronLeft, FaChevronRight, FaWhatsapp } from "react-icons/fa"
import { productsData } from "../data/products"
import "../styles/Hero.css"

export function Hero() {
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const featured = productsData.filter((product) => product.featured)
    setFeaturedProducts(featured.length > 0 ? featured : [productsData[0]])
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === featuredProducts.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? featuredProducts.length - 1 : prevIndex - 1))
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [featuredProducts.length])

  const handleWhatsAppClick = () => {
    const phoneNumber = "+123456789"
    const message = "Hola, me gustaría hacer un pedido."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  if (featuredProducts.length === 0) {
    return <div>Cargando...</div>
  }

  return (
    <section id="inicio" className="hero">
      <div className="hero-content">
        <h1 className="text-gradient">Dulces Momentos, Sabores Únicos</h1>
        <p>
          Descubre el arte de la pastelería artesanal, donde cada creación es una obra maestra de sabor y dedicación.
          Hacemos tus momentos especiales aún más dulces.
        </p>
        <div className="hero-buttons">
          <a href="#productos" className="btn btn-primary">
            Explorar Catálogo
          </a>
          <button onClick={handleWhatsAppClick} className="btn btn-outline">
            <FaWhatsapp />
            Hacer Pedido
          </button>
        </div>
      </div>

      <div className="hero-carousel">
        <div className="carousel-container">
          {featuredProducts.map((product, index) => (
            <div key={product.id} className={`carousel-slide ${index === currentIndex ? "active" : ""}`}>
              <img
                src={product.image || "/placeholder.svg?height=800&width=800"}
                alt={product.name}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>

        <button className="carousel-control prev" onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        <button className="carousel-control next" onClick={nextSlide}>
          <FaChevronRight />
        </button>

        <div className="carousel-indicators">
          {featuredProducts.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

