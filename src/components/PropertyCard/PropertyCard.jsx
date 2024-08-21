import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useFavorites } from './../../hooks/useFavorites';
import s from './style.module.scss';

const PropertyCard = ({ property }) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const handleFavoriteToggle = () => {
    if (isFavorite(property.id)) {
      removeFavorite(property.id);
    } else {
      addFavorite(property);
    }
  };

  return (
    <div className={s.propertyCard}>
      <Link to={`/biens_a_vendre/${property.id}`}>
        <img src={`${process.env.PUBLIC_URL}/${property.images[0]}`} alt={property.title} className={s.image} />
        <div className={s.details}>
          <h3>{property.title}</h3>
          <p>{property.city}, {property.region}</p>
          <p>{property.price} {property.currency}</p>
        </div>
      </Link>
      <button onClick={handleFavoriteToggle}>
        {isFavorite(property.id) ? 'Retirer des Favoris' : 'Ajouter aux Favoris'}
      </button>
    </div>
  );
};

PropertyCard.propTypes = {
  property: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default PropertyCard;