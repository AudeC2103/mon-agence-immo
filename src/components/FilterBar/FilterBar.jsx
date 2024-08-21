// src/components/FilterBar/FilterBar.jsx
import React from 'react';

const FilterBar = ({ onFilterChange }) => {
  const handleCityChange = (e) => {
    onFilterChange({ city: e.target.value });
  };

  const handlePriceChange = (range) => {
    onFilterChange({ priceRange: range });
  };

  const handleTypeChange = (e) => {
    onFilterChange({ type: e.target.value });
  };

  return (
    <div>
      <input type="text" placeholder="Ville" onChange={handleCityChange} />
      <input type="range" min="0" max="1000000" onChange={(e) => handlePriceChange([0, e.target.value])} />
      <select onChange={handleTypeChange}>
        <option value="">Tous</option>
        <option value="Appartement">Appartement</option>
        <option value="Maison">Maison</option>
        {/* Ajouter d'autres types de propriétés ici */}
      </select>
    </div>
  );
};

export default FilterBar;
