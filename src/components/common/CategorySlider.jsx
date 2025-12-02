import React from 'react';
import { Link } from 'react-router-dom';
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
            <div className="category-content">
              <h3 className="category-title">{category.title}</h3>
              <Link to={category.link} className="category-btn">
                EXPLORAR
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySlider;