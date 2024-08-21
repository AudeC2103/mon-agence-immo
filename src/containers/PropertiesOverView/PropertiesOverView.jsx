import React, { useState } from 'react';
import Carousel from './../../components/Carousel/Carousel';
import PropertyCard from './../../components/PropertyCard/PropertyCard';
import FilterBar from '../../components/FilterBar/FilterBar';
import { useProperties } from './../../hooks/useProperties';

const PropertiesOverview = () => {
  const { properties, loading, error } = useProperties();
  const [filterCriteria, setFilterCriteria] = useState({ city: '', priceRange: [0, 1000000], type: '' });

  const handleFilterChange = (criteria) => {
    setFilterCriteria(prev => ({ ...prev, ...criteria }));
  };

  if (loading) {
    return <div>Chargement en cours...</div>;
  }

  if (error) {
    return <div>Erreur : {error}</div>;
  }

  const filterFunction = (property) => {
    const matchesCity = filterCriteria.city ? property.city.includes(filterCriteria.city) : true;
    const matchesPrice = property.price >= filterCriteria.priceRange[0] && property.price <= filterCriteria.priceRange[1];
    const matchesType = filterCriteria.type ? property.type === filterCriteria.type : true;
    return matchesCity && matchesPrice && matchesType;
  };

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
      <h2>Propriétés</h2>
      <FilterBar onFilterChange={handleFilterChange} />
      <Carousel 
        items={properties.filter(filterFunction)}  // Applique le filtre avant d'envoyer les données
        renderItem={(property) => <PropertyCard property={property} />}  // Utilisation correcte de renderItem
        settings={carouselSettings}  // Utilisation des settings pour contrôler le carrousel
      />
    </div>
  );
};

export default PropertiesOverview;
