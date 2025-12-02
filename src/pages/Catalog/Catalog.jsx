import React, { useState } from 'react';
import { useCart } from '../../context/CartContext'; // Importamos el hook del carrito
import './Catalog.css';

// Mock Data inspirado en MyAnimeList
const MOCK_PRODUCTS = [
  { id: 1, title: 'Berserk Vol. 1', price: 65.00, category: 'Seinen', image: 'https://cdn.myanimelist.net/images/manga/1/157897.jpg' },
  { id: 2, title: 'One Piece Vol. 100', price: 45.00, category: 'Shonen', image: 'https://cdn.myanimelist.net/images/manga/3/55381.jpg' },
  { id: 3, title: 'Vagabond Vol. 5', price: 58.00, category: 'Seinen', image: 'https://cdn.myanimelist.net/images/manga/1/259079.jpg' },
  { id: 4, title: 'Oyasumi Punpun', price: 42.00, category: 'Drama', image: 'https://cdn.myanimelist.net/images/manga/3/164420.jpg' },
  { id: 5, title: 'Monster Vol. 1', price: 55.00, category: 'Seinen', image: 'https://cdn.myanimelist.net/images/manga/3/258224.jpg' },
  { id: 6, title: 'Fullmetal Alchemist', price: 48.00, category: 'Shonen', image: 'https://cdn.myanimelist.net/images/manga/3/243675.jpg' },
  { id: 7, title: 'Uzurnaki (Junji Ito)', price: 70.00, category: 'Horror', image: 'https://cdn.myanimelist.net/images/manga/3/54525.jpg' },
  { id: 8, title: 'Chainsaw Man', price: 35.00, category: 'Shonen', image: 'https://cdn.myanimelist.net/images/manga/3/216464.jpg' },
];

const Catalog = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const { addToCart } = useCart(); // Extraemos la función para agregar

  // Filtrado simple
  const filteredProducts = activeFilter === 'Todos' 
    ? MOCK_PRODUCTS 
    : MOCK_PRODUCTS.filter(p => p.category === activeFilter);

  return (
    <div className="catalog-container">
      
      {/* 1. HERO BANNER */}
      <section className="cat-hero">
        <div className="cat-hero-left">
          <div className="cat-title-box">
            <h1 className="cat-title-main">CATÁLOGO</h1>
          </div>
        </div>
        <div className="cat-hero-right">
          <img 
            src="/images/catalog/hero-banner.jpg" 
            alt="Manga Close Up" 
            className="cat-hero-img" 
          />
        </div>
      </section>

      <div className="cat-layout">
        
        {/* 2. SIDEBAR FILTER */}
        <aside className="cat-sidebar">
          <div className="filter-group">
            <h3 className="filter-title">MANGAS <span>-</span></h3>
            <ul className="filter-list">
              {['Todos', 'Shonen', 'Seinen', 'Shojo', 'Horror', 'Drama'].map(cat => (
                <li 
                  key={cat}
                  className={`filter-item ${activeFilter === cat ? 'active' : ''}`}
                  onClick={() => setActiveFilter(cat)}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="filter-group">
            <h3 className="filter-title">ANIMES <span>+</span></h3>
          </div>
          
          <div className="filter-group">
            <h3 className="filter-title">NOVELAS LIGERAS <span>+</span></h3>
          </div>
        </aside>

        {/* 3. PRODUCT GRID */}
        <section className="cat-grid-area">
          <div className="cat-controls">
            <select className="sort-select">
              <option>Ordenar por: Más relevantes</option>
              <option>Precio: Menor a Mayor</option>
              <option>Precio: Mayor a Menor</option>
            </select>
          </div>

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="card-image-container">
                  <img src={product.image} alt={product.title} className="card-img" />
                  
                  {/* Botón Funcional */}
                  <button 
                    className="add-to-cart-btn"
                    onClick={() => addToCart(product)}
                  >
                    Agregar al Carrito
                  </button>
                </div>
                <div className="card-info">
                  <h3 className="card-title">{product.title}</h3>
                  <p className="card-price">S/ {product.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="load-more-container">
            <button className="btn-load-more">CARGAR MÁS</button>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Catalog;