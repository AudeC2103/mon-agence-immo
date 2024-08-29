import React from 'react';
import { useParams } from 'react-router-dom';
import { useProperties } from './../../hooks/useProperties';
import Carousel from './../../components/Carousel/Carousel';
import Button from '../../components/Button/Button';
import './style.module.scss';

const PropertyDetailsPage = () => {
  const { id } = useParams();
  const { properties } = useProperties();
  const property = properties.find(p => p.id === parseInt(id));

  if (!property) return <p className="error-message">Propriété non trouvée.</p>;

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="property-details-container">
      <div className="property-header">
        <h1 className="property-title">{property.title}</h1>
      </div>

      <div className="property-carousel">
        <Carousel 
          items={property.images}
          renderItem={(image) => (
            <img src={`/${image}`} alt={property.title} className="carousel-image" />
          )}
          settings={carouselSettings}
        />
      </div>

      <div className="property-details">
        <p className="property-description">{property.description}</p>
        <div className="property-info">
          <p className="property-price">Prix: {property.price} EUR</p>
          <p className="property-address">Adresse: {property.address}, {property.city}</p>
          <p className="property-type">Type: {property.type}</p>
          <p className="property-area">Surface: {property.area} m²</p>
          <p className="property-bedrooms">Chambres: {property.bedrooms}</p>
          <p className="property-bathrooms">Salles de bain: {property.bathrooms}</p>
        </div>
        <Button variant="primary" to="/contact" className="contact-button">Contactez-nous</Button>
      </div>
    </div>
  );
};

export default PropertyDetailsPage;