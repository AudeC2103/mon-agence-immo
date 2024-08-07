// src/components/FilterBar/FilterBar.jsx
import React, { useState } from 'react';
import styles from './style.module.scss';


const FilterBar = ({ onFilterChange }) => {
  // États locaux pour les filtres
  const [price, setPrice] = useState('');
  const [city, setCity] = useState('');
  const [propertyType, setPropertyType] = useState('');

  // Fonction pour gérer les changements de filtres
  const handleFilterChange = () => {
    onFilterChange({
      price,
      city,
      propertyType,
    });
  };

  return (
    <div className={styles.filterBar}>
      <div className={styles.filter}>
        <label htmlFor="price">Prix:</label>
        <input
          type="text"
          id="price"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
            handleFilterChange();
          }}
        />
      </div>

      <div className={styles.filter}>
        <label htmlFor="city">Ville:</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
            handleFilterChange();
          }}
        />
      </div>

      <div className={styles.filter}>
        <label htmlFor="propertyType">Type de Bien:</label>
        <select
          id="propertyType"
          value={propertyType}
          onChange={(e) => {
            setPropertyType(e.target.value);
            handleFilterChange();
          }}
        >
          <option value="">Sélectionnez un type</option>
          <option value="appartement">Appartement</option>
          <option value="maison">Maison</option>
          <option value="terrain">Terrain</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
