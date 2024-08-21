import React from 'react';
import Carousel from './../../components/Carousel/Carousel';
import PropertyCard from './../../components/PropertyCard/PropertyCard';
import { useProperties } from './../../hooks/useProperties';

const PropertiesNewOverView = () => {
  const { properties, loading, error } = useProperties();

  if (loading) {
    return <div>Chargement en cours...</div>;
  }

  if (error) {
    return <div>Erreur : {error}</div>;
  }

  const sortByDateListed = (a, b) => new Date(b.date_listed) - new Date(a.date_listed);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Affiche 3 cartes à la fois par défaut
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // Pour les écrans de bureau moyens (tablettes et petits laptops)
        settings: {
          slidesToShow: 2, // Affiche 2 cartes à la fois
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768, // Pour les écrans de tablettes
        settings: {
          slidesToShow: 1, // Affiche 1 carte à la fois
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480, // Pour les petits écrans (téléphones)
        settings: {
          slidesToShow: 1, // Affiche 1 carte à la fois
          slidesToScroll: 1,
          arrows: false, // Désactive les flèches pour économiser de l'espace
          dots: true
        }
      }
    ]
  };


  return (
    <div>
      <h2>Dernières Propriétés</h2>
      <Carousel 
        items={properties.sort(sortByDateListed)} // Trie les propriétés par date avant de les passer au carousel
        renderItem={(property) => <PropertyCard property={property} />} // Utilisation correcte de renderItem
        settings={carouselSettings}  // Utilisation des settings pour contrôler le carrousel
      />
    </div>
  );
};

export default PropertiesNewOverView;
