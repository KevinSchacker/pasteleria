import "../styles/About.css"

export function About() {
  return (
    <section id="nosotros" className="about">
      <div className="about-container">
        <div className="about-content">
          <h2>Nuestra Historia</h2>
          <p>
            En Dulce Artesanal, llevamos más de 15 años creando pasteles únicos que combinan tradición e innovación.
            Cada receta tiene un toque especial que nos distingue, utilizando ingredientes frescos y de la más alta
            calidad.
          </p>
          <p>
            Nuestra pasión por la repostería nos ha llevado a perfeccionar cada detalle, desde la textura hasta la
            presentación, creando experiencias inolvidables para nuestros clientes.
          </p>

          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Años de Experiencia</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Clientes Satisfechos</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Recetas Únicas</div>
            </div>
          </div>
        </div>

        <div className="about-image">
          <img src="dulceartesanal.webp" alt="Nuestra pastelería" loading="lazy" />
        </div>
      </div>
    </section>
  )
}

