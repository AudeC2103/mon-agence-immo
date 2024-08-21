import React, { useState, useEffect } from 'react';
import { getProperties } from './../../api/NotesAPI';
import PropertyCard from './../../components/PropertyCard/PropertyCard';
import SearchBar from './../../components/SearchBar/SearchBar';
import s from './style.module.scss';

const PropertiesListPage = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);

  useEffect(() => {
    async function fetchProperties() {
      const data = await getProperties();
      setProperties(data);
      setFilteredProperties(data);
    }
    fetchProperties();
  }, []);

  const handleSearch = (criteria) => {
    const filtered = properties.filter(property => {
      return (
        (criteria.location ? property.city.toLowerCase().includes(criteria.location.toLowerCase()) : true) &&
        (criteria.price ? property.price <= criteria.price : true) &&
        (criteria.propertyType ? property.type === criteria.propertyType : true)
      );
    });
    setFilteredProperties(filtered);
>>>>>>> Stashed changes
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className={s.propertiesList}>
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default PropertiesListPage;
