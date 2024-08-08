// src/pages/PropertyListPage/PropertyListPage.jsx
import React, { useState } from 'react';
import FilterBar from '../../components/FilterBar/FilterBar';
import PropertyList from '../../components/PropertyList/PropertyList';

const PropertyListPage = () => {
  const [filters, setFilters] = useState({
    price: '',
    city: '',
    propertyType: '',
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    // Utilisez les filtres pour filtrer les propriétés
  };

  return (
    <div>
      <h1>Liste des Propriétés</h1>
      <FilterBar onFilterChange={handleFilterChange} />
      {/* Le composant PropertyList pourrait être filtré en fonction de l'état des filtres */}
      <PropertyList filters={filters} />
    </div>
  );
};

export default PropertyListPage;
