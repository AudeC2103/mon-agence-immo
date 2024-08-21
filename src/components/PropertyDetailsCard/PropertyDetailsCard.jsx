import React from 'react';
import PropTypes from 'prop-types';
import s from './style.module.scss';

// Déclarez l'URL de l'image par défaut
const defaultImageUrl = '/public/assets/properties/default.jpg';

const PropertyDetailsCard = ({ property }) => {
  // Utilisation de l'image par défaut si `property.photo` n'est pas défini
  const propertyPhoto = property.photo ? property.photo : defaultImageUrl;

  return (
    <div className={s.propertyDetailsCard}>
      <img src={propertyPhoto} alt={property.title} className={s.propertyPhoto} />
      <div className={s.propertyInfo}>
        <h3>{property.title}</h3>
        <p>{property.description}</p>
      </div>
    </div>
  );
};

PropertyCard.propTypes = {
  property: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    photo: PropTypes.string,
  }).isRequired,
};

export default PropertyDetailsCard;
