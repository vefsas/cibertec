import React, { useState, useEffect } from 'react';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ['/img1.jpg', '/img2.jpg', '/img3.jpg'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section className="galeria">
      <h2>GALERIA DE EVENTOS</h2>
      <div className="gallery-container">
        <button className="gallery-btn" onClick={prevImage}>❮</button>
        <div className="gallery-slide">
          {images.map((img, index) => (
            <img 
              key={index}
              src={img}
              className={`gallery-img ${index === currentIndex ? 'active' : ''}`}
              alt={`Evento ${index + 1}`}
            />
          ))}
        </div>
        <button className="gallery-btn" onClick={nextImage}>❯</button>
      </div>
    </section>
  );
};

export default Gallery;