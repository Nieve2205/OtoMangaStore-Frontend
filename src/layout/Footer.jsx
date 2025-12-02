import React from 'react';
import './Footer.css';
import { FaFacebookF} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <img src="/logo.avif" alt="Otamanga Logo" />
          </div>
          <p className="footer-description">
            Tu tienda de confianza para manga, comics y todo lo relacionado con la cultura otaku.
          </p>
          <div className="footer-social">
            <a href="https://www.facebook.com/profile.php?id=61568360135055" className="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Tienda</h3>
          <ul className="footer-links">
            <li><a href="#manga">Manga</a></li>
            <li><a href="#comics">Comics</a></li>
            <li><a href="#novedades">Novedades</a></li>
            <li><a href="#ofertas">Ofertas</a></li>
            <li><a href="#preventas">Preventas</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Información</h3>
          <ul className="footer-links">
            <li><a href="#nosotros">Sobre Nosotros</a></li>
            <li><a href="#contacto">Contacto</a></li>
            <li><a href="#envios">Envíos</a></li>
            <li><a href="#devoluciones">Devoluciones</a></li>
            <li><a href="#faq">Preguntas Frecuentes</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Mi Cuenta</h3>
          <ul className="footer-links">
            <li><a href="#perfil">Mi Perfil</a></li>
            <li><a href="#pedidos">Mis Pedidos</a></li>
            <li><a href="#wishlist">Lista de Deseos</a></li>
            <li><a href="#direcciones">Mis Direcciones</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="copyright">
            © 2024 Otamanga. Todos los derechos reservados.
          </p>
          <div className="footer-legal">
            <a href="#terminos">Términos y Condiciones</a>
            <span className="separator">|</span>
            <a href="#privacidad">Política de Privacidad</a>
            <span className="separator">|</span>
            <a href="#cookies">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;