import React, { useState, useEffect } from 'react';

const images = [
  require('../Assets/hos1.jpg'),
  require('../Assets/hos3.jpg'),
  require('../Assets/hos2.jpg')
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
        />
      ))}
    </div>
  );
}

export default Carousel;
