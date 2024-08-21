import React, { useState } from 'react';
import s from './style.module.scss';

const SearchBar = ({ onSearch }) => {
    const [searchCriteria, setSearchCriteria] = useState({
      price: '',
      location: '',
      propertyType: '',
    });
  
    const handleChange = (e) => {
      setSearchCriteria({
        ...searchCriteria,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSearch = () => {
      onSearch(searchCriteria);
    };
  
    return (
      <div className={s.searcBbar}>
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={searchCriteria.location}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Max Price"
          value={searchCriteria.price}
          onChange={handleChange}
        />
        <select
          name="propertyType"
          value={searchCriteria.propertyType}
          onChange={handleChange}
        >
          <option value="">Property Type</option>
          <option value="Maison">Maison</option>
          <option value="Appartement">Appartement</option>
          <option value="Terrain">Terrain</option>
        </select>
        <button onClick={handleSearch}>Search</button>
      </div>
    );
  };

export default SearchBar;
