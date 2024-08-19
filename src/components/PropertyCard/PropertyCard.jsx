import React from 'react';
import PropTypes from 'prop-types';
import s from './style.module.scss';

const PropertyCard = ({ property }) => {
  return (
    <div className={s.propertyCard}>
      <img src={property.images[0]} alt={property.title} className={s.image} />
      <div className={s.details}>
        <h3>{property.title}</h3>
        <p>{property.city}, {property.region}</p>
        <p>{property.price} {property.currency}</p>
      </div>
    </div>
  );
};

PropertyCard.propTypes = {
  property: PropTypes.object.isRequired,
};

export default PropertyCard;