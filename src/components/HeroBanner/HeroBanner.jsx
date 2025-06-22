import React, { useState, useEffect } from 'react';
import './HeroBanner.css'; // We'll create this CSS file next

const HeroBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Sample images - replace with your actual image paths
  const images = [
    {
      src: '/images/man1.jpg',
      alt: 'First slide'
    },
    {
      src: '/images/icons.avif',
      alt: 'Second slide'
    },
    {
      src: '/images/background.avif',
      alt: 'Third slide'
    }
  ];

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="hero-banner-container">
      <div className="hero-banner-slide">
        <img 
          src={images[currentIndex].src} 
          alt={images[currentIndex].alt} 
          className="hero-banner-image"
        />
      </div>
      
      {/* Navigation arrows */}
      <button className="hero-banner-arrow left-arrow" onClick={goToPrevious}>
        ❮
      </button>
      <button className="hero-banner-arrow right-arrow" onClick={goToNext}>
        ❯
      </button>
      
      {/* Dots indicator */}
      <div className="hero-banner-dots">
        {images.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className={`hero-banner-dot ${slideIndex === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(slideIndex)}
          >
            •
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;