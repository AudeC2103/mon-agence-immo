// src/components/Carrousel/Carrousel.jsx
import React from 'react';
import Slider from 'react-slick';
import './style.module.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carrousel = ({ properties }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ]
  };

  return (
    <div className="carrousel-container">
      <Slider {...settings}>
        {properties.map(property => (
          <div key={property.id} className="carrousel-slide">
            <img src={property.images[0]} alt={property.title} className="carrousel-image" />
            <div className="carrousel-caption">
              <h3>{property.title}</h3>
              <p>{property.description}</p>
              <div className="property-details">
                <p>{property.city}</p>
                <p>{property.price} {property.currency}</p>
                <p>{property.area} m²</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carrousel;
