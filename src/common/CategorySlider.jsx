import React from 'react';
import './CategorySlider.css';

const CategorySlider = ({ categories }) => {
  return (
    <div className="category-slider">
      <div className="category-grid">
        {categories.map((category) => (
          <div key={category.id} className="category-card">
            <img 
              src={category.image} 
              alt={category.title} 
              className="category-image" 
            />
            <div className="category-overlay">
              <h3 className="category-title">{category.title}</h3>
              <a href={category.link} className="category-button">
                →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySlider;