//./pages/SucessPage/SucessPage.jsx
import React from 'react';
import Carousel from './../../components/Carousel/Carousel';
import PropertyCard from './../../components/PropertyCard/PropertyCard';
import { useProperties } from './../../hooks/useProperties';

const SuccessPage = () => {

  const { properties, loading, error } = useProperties();

  if (loading) {
    return <div>Chargement en cours...</div>;
  }

  if (error) {
    return <div>Erreur : {error}</div>;
  }

  // Filtrer les propriétés pour ne garder que celles avec listing_type "Vendu"
  const soldProperties = properties.filter(property => property.listing_type === "Vendu");

  // Fonction pour trier les propriétés par date de publication
  const sortByDateListed = (a, b) => new Date(b.date_listed) - new Date(a.date_listed);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      }
    ]
  };

  return (
    <div>
      <h2>Propriétés Vendues</h2>
      <Carousel 
        items={soldProperties.sort(sortByDateListed)} // Filtrer et trier avant de passer au carousel
        renderItem={(property) => <PropertyCard property={property} />}
        settings={carouselSettings}
      />
    </div>
  );
};

export default SuccessPage