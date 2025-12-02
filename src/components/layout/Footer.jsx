import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaTiktok,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaPaperPlane
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Decoración superior naranja */}
      <div className="footer-border"></div>

      <div className="footer-content">
        
        {/* SECCIÓN 1: MARCA Y REDES */}
        <div className="footer-brand-section">
          <div className="footer-logo-container">
            {/* Asegúrate de que el logo esté en public/images/general/ */}
            <img src="/logo.avif" alt="Otamanga Logo" className="footer-logo" />
          </div>
          <p className="footer-desc">
            Tu puerta de entrada a mundos infinitos. La mejor tienda de manga y cultura otaku, 
            creada por fans para fans.
          </p>
          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon"><FaTwitter /></a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="social-icon"><FaTiktok /></a>
          </div>
        </div>

        {/* SECCIÓN 2: EXPLORAR */}
        <div className="footer-links-section">
          <h3 className="footer-heading">EXPLORAR</h3>
          <ul className="footer-list">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/catalogo">Catálogo Completo</Link></li>
            <li><Link to="/recomendaciones">Recomendaciones</Link></li>
            <li><Link to="/catalogo?filter=novedades">Novedades</Link></li>
            <li><Link to="/catalogo?filter=ofertas">Ofertas</Link></li>
          </ul>
        </div>

        {/* SECCIÓN 3: AYUDA */}
        <div className="footer-links-section">
          <h3 className="footer-heading">AYUDA</h3>
          <ul className="footer-list">
            <li><Link to="/nosotros">Sobre Nosotros</Link></li>
            <li><Link to="/envios">Envíos y Entregas</Link></li>
            <li><Link to="/devoluciones">Política de Devolución</Link></li>
            <li><Link to="/faq">Preguntas Frecuentes</Link></li>
            <li><Link to="/contacto">Contáctanos</Link></li>
          </ul>
        </div>

        {/* SECCIÓN 4: NEWSLETTER */}
        <div className="footer-newsletter-section">
          <h3 className="footer-heading">ÚNETE A LA LEGIÓN</h3>
          <p className="newsletter-text">Recibe ofertas exclusivas y noticias de nuevos lanzamientos antes que nadie.</p>
          
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
              <input type="email" placeholder="Tu correo electrónico..." required />
              <button type="submit" aria-label="Suscribirse">
                <FaPaperPlane />
              </button>
            </div>
          </form>

          <div className="payment-methods">
            <span className="payment-label">Aceptamos:</span>
            <div className="payment-icons">
              <FaCcVisa />
              <FaCcMastercard />
              <FaCcPaypal />
            </div>
          </div>
        </div>
      </div>

      {/* BARRA INFERIOR */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="copyright">© 2025 OtoManga Store. Todos los derechos reservados.</p>
          <div className="legal-links">
            <Link to="/privacidad">Privacidad</Link>
            <span className="divider">|</span>
            <Link to="/terminos">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;