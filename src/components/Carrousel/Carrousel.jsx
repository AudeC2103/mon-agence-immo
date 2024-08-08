import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { PropertiesAPI } from '../../api/properties-api';
import styles from './style.module.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Carrousel = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    PropertiesAPI.fetchAllProperties().then(data => {
      setProperties(data);
    }).catch(error => {
      console.error("Erreur lors de la récupération des propriétés:", error);
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // 2 propriétés visibles en mode desktop
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ]
  };

  return (
    <div className={styles.carrouselContainer}>
      <Slider {...settings}>
        {properties.map(property => (
          <div key={property.id} className={styles.carrouselSlide}>
            <img src={property.images[0]} alt={property.title} className={styles.carrouselImage} />
            <div className={styles.carrouselCaption}>
              <h3>{property.title}</h3>
              <p>{property.description}</p>
              <div className={styles.propertyDetails}>
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
