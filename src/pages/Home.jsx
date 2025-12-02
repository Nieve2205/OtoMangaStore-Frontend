import React from 'react';
import MangaCarousel from '../common/MangaCarousel';
import CategorySlider from '../common/CategorySlider';
import './Home.css';

const Home = () => {
  const featuredMangas = [
    { id: 1, title: 'Naruto', image: 'https://m.media-amazon.com/images/M/MV5BZTNjOWI0ZTAtOGY1OS00ZGU0LWEyOWYtMjhkYjdlYmVjMDk2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg' },
    { id: 2, title: 'La nobleza de las flores', image: 'https://gekko.pe/wp-content/uploads/2024/06/lanoblezadelasflores01-300x450.jpg' },
    { id: 3, title: 'No Game No Life', image: 'https://cdn2.penguin.com.au/covers/original/9781626920798.jpg' },
    { id: 4, title: 'Dragon Ball', image: 'https://m.media-amazon.com/images/M/MV5BYTgyMzA5MjEtNDY3Ny00ZDkyLWJhYzEtYzI2Nzk5Mzc3ZDk1XkEyXkFqcGc@._V1_.jpg' },
  ];;

  const newArrivals = [
    { id: 5, title: 'One Piece', image: 'https://i.pinimg.com/736x/ec/2d/c9/ec2dc9d709fb63ae1172950a1b5530f2.jpg' },
    { id: 6, title: 'Attack on Titan', image: 'https://i.pinimg.com/736x/67/b6/90/67b690140f09b858dd942c7a35e434e2.jpg' },
    { id: 7, title: 'Demon Slayer', image: 'https://i.pinimg.com/736x/81/c7/9c/81c79cb8cfcb320fb7890403fc9bc81d.jpg' },
    { id: 8, title: 'Jujutsu Kaisen', image: 'https://i.pinimg.com/736x/76/ac/0e/76ac0e714bff05658d7eb6423057549b.jpg' },
  ];

  const categories = [
    { 
      id: 1, 
      title: 'Genero Romance', 
      image: 'https://i.pinimg.com/1200x/6b/37/11/6b37110b83aefe3ab6d56c46c3ccc8ff.jpg',
      link: '/categoria/romance'
    },
    { 
      id: 2, 
      title: 'Mas SHŌNEN', 
      image: 'https://i.pinimg.com/1200x/6e/79/75/6e79753ea4026e9663194affa12133ca.jpg',
      link: '/categoria/shonen'
    },
    { 
      id: 3, 
      title: 'Llegaron los ISEKAIS', 
      image: 'https://i.pinimg.com/736x/f0/d2/8e/f0d28e243d83019070a775f2400128e7.jpg',
      link: '/categoria/isekai'
    },
  ];

  return (
    <main className="home">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Bienvenido a Otamanga</h1>
          <p className="hero-subtitle">Tu tienda favorita de manga y comics</p>
        </div>
      </section>

      <section className="categories-section">
        <CategorySlider categories={categories} />
      </section>

      <section className="featured-section">
        <h2 className="section-title">Mangas Destacados</h2>
        <MangaCarousel mangas={featuredMangas} />
      </section>

      <section className="about-section">
        <div className="about-container">
          <div className="about-content">
            <h2 className="about-title">
              <span className="about-title-highlight">CON NOSOTROS</span>
              <span className="about-title-main">JAMAS TE ABURRIRÁS</span>
            </h2>
            <p className="about-description">
              Con OTAManga, tendrás el acceso a todas las historias por contar de varios o un sin fin de personajes.
            </p>
            <button className="about-button">Leer más</button>
          </div>
          <div className="about-image">
            <img src="https://i.pinimg.com/736x/91/ec/0f/91ec0f029f59f805d0800f03b87c7514.jpg" alt="Manga Panels" />
          </div>
        </div>
      </section>

      <section className="new-arrivals-section">
        <h2 className="section-title">Nuevos Lanzamientos</h2>
        <MangaCarousel mangas={newArrivals} />
      </section>
      
      <section className="chat-section">
        <button className="chat-button">
          💬 ¡CHATEA CON NOSOTROS!
        </button>
      </section>
    </main>
  );
};

export default Home;