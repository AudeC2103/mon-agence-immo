import React, { useState } from 'react';
import PropertyCard from './PropertyCard';
import { useProperties } from '../hooks/useProperties';
import s from './style.module.scss';

const ApartmentList = () => {
  const { properties, loading, error } = useProperties();
  const [currentPage, setCurrentPage] = useState(1);

  if (loading) return <p>Chargement en cours...</p>;
  if (error) return <p>Erreur : {error}</p>;

  // Filtrer uniquement les appartements
  const apartments = properties.filter(property => property.type === 'Appartement');

  // Configuration des propriétés par page selon le format d'écran
  const itemsPerPage = window.innerWidth >= 992 ? 9 : window.innerWidth >= 768 ? 6 : 4;

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentApartments = apartments.slice(indexOfFirstItem, indexOfLastItem);

  // Calcul du nombre total de pages
  const totalPages = Math.ceil(apartments.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={s.propertyList}>
      <h2>Appartements à Vendre</h2>
      <div className={s.grid}>
        {currentApartments.map(apartment => (
          <PropertyCard key={apartment.id} property={apartment} />
        ))}
      </div>
      <div className={s.pagination}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index + 1} onClick={() => paginate(index + 1)} className={currentPage === index + 1 ? s.active : ''}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ApartmentList;
