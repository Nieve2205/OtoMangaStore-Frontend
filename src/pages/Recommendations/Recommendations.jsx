import React from 'react';
import { Link } from 'react-router-dom';
import './Recommendations.css';

const Recommendations = () => {
  return (
    <div className="recommendations-container">
      
      {/* 1. HERO SECTION (Banner dividido) */}
      <section className="rec-hero">
        <div className="rec-hero-left">
          <div className="rec-title-box">
            <h1 className="rec-title-main">RECOMENDACIÓN</h1>
            <span className="rec-title-sub">del día</span>
          </div>
        </div>
        <div className="rec-hero-right">
          {/* Imagen de Cosplayers - Asegúrate de tenerla en public/images/recommendations/ */}
          <img 
            src="/images/recommendations/cosplayers.avif" 
            alt="Comunidad Otaku Cosplay" 
            className="rec-hero-img"
          />
        </div>
      </section>

      {/* 2. SPOTLIGHT SECTION (Yato + Feature Card) */}
      <section className="rec-spotlight">
        {/* Mascota Yato (Absolute Position) */}
        <img 
          src="/images/recommendations/mascota-yato.png" 
          alt="Yato Noragami" 
          className="mascot-yato"
        />

        {/* Tarjeta de Contenido */}
        <div className="feature-card">
          <div className="feature-content">
            <Link to="/nosotros" className="feature-link">
              <span className="feature-arrow">→</span> ¿Quiénes somos?
            </Link>
            <p style={{ marginTop: '1rem', color: '#666', fontSize: '1.1rem' }}>
              Conoce al equipo detrás de tu tienda favorita.
            </p>
          </div>
          <div className="feature-image-container">
            <img 
              src="/images/recommendations/team-rocket.jpg" 
              alt="Team Rocket" 
              className="feature-image"
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Recommendations;