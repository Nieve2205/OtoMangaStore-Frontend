import React from 'react';
// CORRECCIÓN: Subimos 2 niveles (../../) para llegar a 'common'
import MangaCarousel from '../../components/common/MangaCarousel';
import CategorySlider from '../../components/common/CategorySlider';
import './Home.css';

const Home = () => {
  // Datos simulados (Mock Data)
  const featuredMangas = [
    { id: 1, title: 'Naruto', image: 'https://m.media-amazon.com/images/M/MV5BZTNjOWI0ZTAtOGY1OS00ZGU0LWEyOWYtMjhkYjdlYmVjMDk2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg' },
    { id: 2, title: 'La nobleza de las flores', image: 'https://gekko.pe/wp-content/uploads/2024/06/lanoblezadelasflores01-300x450.jpg' },
    { id: 3, title: 'No Game No Life', image: 'https://cdn2.penguin.com.au/covers/original/9781626920798.jpg' },
    { id: 4, title: 'Dragon Ball', image: 'https://m.media-amazon.com/images/M/MV5BYTgyMzA5MjEtNDY3Ny00ZDkyLWJhYzEtYzI2Nzk5Mzc3ZDk1XkEyXkFqcGc@._V1_.jpg' },
  ];

  const newArrivals = [
    { id: 5, title: 'One Piece', image: 'https://i.pinimg.com/736x/ec/2d/c9/ec2dc9d709fb63ae1172950a1b5530f2.jpg' },
    { id: 6, title: 'Attack on Titan', image: 'https://i.pinimg.com/736x/67/b6/90/67b690140f09b858dd942c7a35e434e2.jpg' },
    { id: 7, title: 'Demon Slayer', image: 'https://i.pinimg.com/736x/81/c7/9c/81c79cb8cfcb320fb7890403fc9bc81d.jpg' },
    { id: 8, title: 'Jujutsu Kaisen', image: 'https://i.pinimg.com/736x/76/ac/0e/76ac0e714bff05658d7eb6423057549b.jpg' },
  ];

  const categories = [
    { 
      id: 1, 
      title: 'MANGAS', 
      image: 'https://i.pinimg.com/1200x/6b/37/11/6b37110b83aefe3ab6d56c46c3ccc8ff.jpg',
      link: '/catalogo?cat=mangas'
    },
    { 
      id: 2, 
      title: 'NOVELAS LIGERAS', 
      image: 'https://i.pinimg.com/1200x/6e/79/75/6e79753ea4026e9663194affa12133ca.jpg',
      link: '/catalogo?cat=novelas'
    },
    { 
      id: 3, 
      title: 'ANIME', 
      image: 'https://i.pinimg.com/736x/f0/d2/8e/f0d28e243d83019070a775f2400128e7.jpg',
      link: '/catalogo?cat=anime'
    },
  ];

  return (
    <main className="home-container">
      {/* SECCIÓN HERO: Fondo estilo japonés/olas que vimos en las referencias */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-brand">OTAMANGA</h1>
            <p className="hero-subtitle">TU TIENDA FAVORITA DE MANGA Y CÓMICS</p>
          </div>
        </div>
      </section>

      {/* SECCIÓN CATEGORÍAS: Los 3 bloques naranjas grandes */}
      <section className="categories-section">
        <CategorySlider categories={categories} />
      </section>

      {/* SECCIÓN NOSOTROS: Texto izquierda, Manga derecha */}
      <section className="about-section">
        <div className="about-split-layout">
          <div className="about-text-area">
            <h2 className="about-title">
              <span className="text-white">CON</span> <br/>
              <span className="text-white">NOSOTROS</span> <br/>
              <span className="text-dark">JAMÁS TE</span> <br/>
              <span className="text-dark">ABURRIRÁS</span>
            </h2>
            <p className="about-desc">
              Con OTAManga, tendrás el acceso a todas las historias por contar de varios o un sin fin de personajes.
            </p>
            <button className="btn-primary-outline">LEER MÁS</button>
          </div>
          <div className="about-image-area">
            {/* Usamos una imagen vertical estilo panel de manga como en tu referencia */}
            <img src="https://i.pinimg.com/736x/91/ec/0f/91ec0f029f59f805d0800f03b87c7514.jpg" alt="Manga Panel" />
          </div>
        </div>
      </section>

      {/* SECCIÓN DESTACADOS: Fondo papel arrugado */}
      <section className="products-section">
        <h2 className="section-header">MANGAS DESTACADOS</h2>
        <MangaCarousel mangas={featuredMangas} />
      </section>

      <section className="products-section bg-alt">
        <h2 className="section-header">NUEVOS LANZAMIENTOS</h2>
        <MangaCarousel mangas={newArrivals} />
      </section>
      
      {/* Botón Flotante */}
      <div className="chat-widget">
        <button className="chat-btn">
          💬 ¡CHATEA CON NOSOTROS!
        </button>
      </div>
    </main>
  );
};

export default Home;