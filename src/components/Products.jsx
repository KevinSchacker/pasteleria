import { useState, useEffect } from "react";
import { productsData } from "../data/products";
import { ProductModal } from "./ProductModal";
import "../styles/Products.css";

export function Products() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("todos");
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  useEffect(() => {
    // Simulando carga de productos desde API
    setProducts(productsData);
  }, []);
  
  const filteredProducts = category === "todos" 
    ? products 
    : products.filter(product => product.category === category);
  
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };
  
  const closeModal = () => {
    setSelectedProduct(null);
  };
  
  return (
    <section id="productos" className="products">
      <h2>Nuestros Productos</h2>
      <p>Descubre nuestra variedad de delicias artesanales</p>
      
      <div className="product-categories">
        <button 
          className={category === "todos" ? "active" : ""} 
          onClick={() => setCategory("todos")}
        >
          Todos
        </button>
        <button 
          className={category === "pasteles" ? "active" : ""} 
          onClick={() => setCategory("pasteles")}
        >
          Pasteles
        </button>
        <button 
          className={category === "cupcakes" ? "active" : ""} 
          onClick={() => setCategory("cupcakes")}
        >
          Cupcakes
        </button>
        <button 
          className={category === "galletas" ? "active" : ""} 
          onClick={() => setCategory("galletas")}
        >
          Galletas
        </button>
      </div>
      
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <img 
                src={product.image || "/placeholder.svg"} 
                alt={product.name} 
                loading="lazy" 
                className="product-image" 
              />
              {product.new && <span className="new-badge">Nuevo</span>}
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="product-footer">
                <span className="product-price">${product.price.toFixed(2)}</span>
                <button 
                  className="add-to-cart"
                  onClick={() => handleProductClick(product)}
                >
                  Ver Detalles
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={closeModal} 
        />
      )}
    </section>
  );
}