import { useState, useEffect } from "react"
import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Products } from "./components/Products"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { Testimonials } from "./components/Testimonials"
import "./App.css"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
        <p>Cargando delicias...</p>
      </div>
    )
  }

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Testimonials/>
        <About />
        
      </main>
      <Contact /> {/* Ahora es un botón flotante de WhatsApp */}
      <Footer />
    </div>
  )
}

export default App