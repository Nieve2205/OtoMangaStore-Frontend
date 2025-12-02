import React from 'react';
import './MangaCarousel.css';

const MangaCarousel = ({ mangas }) => {
  return (
    <div className="carousel-container">
      <div className="manga-grid">
        {mangas.map((manga) => (
          <div key={manga.id} className="manga-card">
            <img src={manga.image} alt={manga.title} className="manga-cover" />
            <div className="manga-overlay">
              <h3>{manga.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MangaCarousel;