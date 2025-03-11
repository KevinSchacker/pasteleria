// src/components/ProductModal.jsx
import { useState } from 'react';
import '../styles/ProductModal.css';

export function ProductModal({ product, onClose }) {
  const [activeImage, setActiveImage] = useState(product.image);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (amount) => {
    const newQuantity = quantity + amount;
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  const handleOrderClick = () => {
    const phoneNumber = "+123456789"; // Reemplaza con tu número real
    const message = `Hola! Me gustaría ordenar ${quantity} ${product.name}(s). Gracias!`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="product-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        
        <div className="modal-content">
          <div className="product-gallery">
            <div className="main-image">
              <img src={activeImage || "/placeholder.svg"} alt={product.name} />
            </div>
            <div className="thumbnail-gallery">
              <img 
                src={product.image || "/placeholder.svg"} 
                alt={product.name} 
                className={activeImage === product.image ? 'active' : ''}
                onClick={() => setActiveImage(product.image)}
              />
              {product.gallery && product.gallery.map((img, index) => (
                <img 
                  key={index}
                  src={img || "/placeholder.svg"} 
                  alt={`${product.name} - vista ${index + 1}`}
                  className={activeImage === img ? 'active' : ''}
                  onClick={() => setActiveImage(img)}
                />
              ))}
            </div>
          </div>
          
          <div className="product-details">
            <h2>{product.name}</h2>
            <p className="product-price">${product.price.toFixed(2)}</p>
            
            <div className="product-info">
              <p className="product-description">{product.longDescription || product.description}</p>
              
              <div className="product-meta">
                <div className="meta-item">
                  <span className="meta-label">Categoría:</span>
                  <span className="meta-value">{product.category}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Porciones:</span>
                  <span className="meta-value">{product.servings}</span>
                </div>
              </div>
              
              <div className="quantity-selector">
                <span className="quantity-label">Cantidad:</span>
                <div className="quantity-controls">
                  <button onClick={() => handleQuantityChange(-1)}>-</button>
                  <span>{quantity}</span>
                  <button onClick={() => handleQuantityChange(1)}>+</button>
                </div>
              </div>
              
              <button className="order-button" onClick={handleOrderClick}>
                Ordenar por WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}