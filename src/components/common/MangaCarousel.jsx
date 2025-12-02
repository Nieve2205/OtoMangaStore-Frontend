import React from 'react';
import { Link } from 'react-router-dom';
import './MangaCarousel.css';

const MangaCarousel = ({ mangas }) => {
  if (!mangas || mangas.length === 0) return <p>No hay mangas disponibles.</p>;

  return (
    <div className="carousel-container">
      <div className="manga-track">
        {mangas.map((manga) => (
          <Link to={`/catalogo/producto/${manga.id}`} key={manga.id} style={{ textDecoration: 'none' }}>
            <div className="manga-card">
              <div className="manga-cover-container">
                <img src={manga.image} alt={manga.title} className="manga-cover" />
                
                {/* Overlay que aparece al hover */}
                <div className="manga-overlay">
                  <span className="btn-view">Ver Detalles</span>
                </div>
              </div>
              
              <div className="manga-info">
                <h3 className="manga-title" title={manga.title}>{manga.title}</h3>
                {/* Si no tienes precio en el objeto, mostramos un placeholder */}
                <div className="manga-price">
                  {manga.price ? `S/ ${manga.price.toFixed(2)}` : 'S/ --.--'}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MangaCarousel;