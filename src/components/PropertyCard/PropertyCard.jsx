import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useFavorites } from './../../hooks/useFavorites';
import Carousel from './../Carousel/Carousel';
import s from './style.module.scss';
import coeurPlein from './../../assets/icones/coeurplein.png';
import coeurVide from './../../assets/icones/coeurvide.png';


const PropertyCard = ({ property }) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const handleFavoriteToggle = () => {
    if (isFavorite(property.id)) {
      removeFavorite(property.id);
    } else {
      addFavorite(property);
    }
  };

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className={s.propertyCard}>
      <Link to={`/biens_a_vendre/${property.id}`}>
        <Carousel 
          items={property.images} 
          renderItem={(image, styleOptions) => (
            <img src={`/${image}`} alt={property.title} className={s.image} style={styleOptions} />
          )}
          settings={carouselSettings}
          width="100%"
          height="200px" // Ajustez cette valeur selon vos besoins
          borderRadius="8px"
        />
        <div className={s.details}>
          <h3>{property.title}</h3>
          <p>{property.city}, {property.region}</p>
          <p>{property.price} {property.currency}</p>
        </div>
      </Link>
      <button onClick={handleFavoriteToggle} aria-label={isFavorite(property.id) ? 'Retirer des Favoris' : 'Ajouter aux Favoris'} className={s.favoriteButton}>
        <img 
          src={isFavorite(property.id) ? coeurPlein : coeurVide} 
          alt={isFavorite(property.id) ? 'Retirer des Favoris' : 'Ajouter aux Favoris'} 
        />
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
