import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './style.module.scss';

const AllPropertiesList = ({ properties }) => {
  console.log(properties); // Ajoute ceci pour vérifier les données
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 10;

  // Vérifie si properties est défini et contient des éléments
  if (!properties || properties.length === 0) {
    return <p>Aucune propriété disponible pour le moment.</p>;
  }

  // Filtrer les biens "en vente"
  const propertiesForSale = properties.filter(property => property.listing_type === 'Vente');
  console.log(propertiesForSale); // Ajoute ceci pour vérifier les biens filtrés

  // Logique de pagination
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = propertiesForSale.slice(indexOfFirstProperty, indexOfFirstProperty + propertiesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={s.allPropertiesList}>
      <h2>Biens en vente</h2>
      <div className={s.grid}>
        {currentProperties.map((property) => (
          <div className={s.propertyCard} key={property.id}>
            <div
              className={s.thumbnail}
              style={{ backgroundImage: `url(${property.images[0]})` }}
            />
            <div className={s.propertyDetails}>
              <h3 className={s.title}>{property.title}</h3>
              <p className={s.price}>{property.price.toLocaleString()} {property.currency}</p>
              <p className={s.summary}>
                {property.rooms} pièces, {property.area} m², {property.city}
              </p>
              <Link to={`/biens_a_vendre/${property.id}`} className={s.viewDetails}>
                Voir les détails
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className={s.pagination}>
        {[...Array(Math.ceil(propertiesForSale.length / propertiesPerPage)).keys()].map(number => (
          <button
            key={number + 1}
            onClick={() => paginate(number + 1)}
            className={currentPage === number + 1 ? s.active : ''}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AllPropertiesList;

