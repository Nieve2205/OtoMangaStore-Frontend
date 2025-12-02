import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './ProductDetail.css';

// Mock Data (En el futuro esto viene de tu API .NET)
const ALL_MANGAS = [
  { id: 1, title: 'Naruto Vol. 1', price: 45.00, category: 'Shonen', description: 'Naruto Uzumaki es un ninja adolescente hiperactivo que busca constantemente aprobación y reconocimiento, así como convertirse en Hokage.', image: 'https://m.media-amazon.com/images/M/MV5BZTNjOWI0ZTAtOGY1OS00ZGU0LWEyOWYtMjhkYjdlYmVjMDk2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg' },
  { id: 2, title: 'La nobleza de las flores', price: 38.50, category: 'Shojo', description: 'Una historia conmovedora sobre el crecimiento personal y el amor en la escuela secundaria.', image: 'https://gekko.pe/wp-content/uploads/2024/06/lanoblezadelasflores01-300x450.jpg' },
  // ... agrega más para que coincidan con los IDs de tu Home
];

const ProductDetail = () => {
  const { id } = useParams(); // Captura el ID de la URL
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Simular llamada a API
    const found = ALL_MANGAS.find(p => p.id === parseInt(id));
    setProduct(found || ALL_MANGAS[0]); // Fallback al primero si no encuentra
  }, [id]);

  if (!product) return <div>Cargando...</div>;

  return (
    <div className="product-detail-container">
      <div className="detail-wrapper">
        <div className="detail-image">
          <img src={product.image} alt={product.title} />
        </div>
        
        <div className="detail-info">
          <span className="detail-category">{product.category}</span>
          <h1 className="detail-title">{product.title}</h1>
          <p className="detail-price">S/ {product.price.toFixed(2)}</p>
          
          <div className="detail-description">
            <h3>Sinopsis</h3>
            <p>{product.description}</p>
          </div>

          <div className="detail-actions">
            <button 
              className="btn-add-cart"
              onClick={() => addToCart(product)}
            >
              Añadir al Carrito
            </button>
            <button className="btn-wishlist">
              ❤️ Favoritos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;