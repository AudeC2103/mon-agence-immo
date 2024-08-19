// PropetiesNewOverView.jsx
import React, { useState } from 'react';
import Carrousel from './../../components/Carrousel/Carrousel';
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

  return (
    <div>
      <h2>Propriétés</h2>
      <FilterBar onFilterChange={handleFilterChange} />
      <Carrousel 
        items={properties}
        renderCard={(property) => <PropertyCard property={property} />}
        visibleCards={3}
        filterFunction={filterFunction}
      />
    </div>
  );
};

export default PropertiesOverview;