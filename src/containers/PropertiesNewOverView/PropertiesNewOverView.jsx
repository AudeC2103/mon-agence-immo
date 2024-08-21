// PropetiesNewOverView.jsx
import React from 'react';
import Carrousel from './../../components/Carrousel/Carrousel';
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

  return (
    <div>
      <h2>Dernières Propriétés</h2>
      <Carrousel 
        items={properties}
        renderCard={(property) => <PropertyCard property={property} />}
        visibleCards={2} // Afficher 2 cartes à la fois
        sortFunction={sortByDateListed} // Trier par date_listed
      />
    </div>
  );
};

export default PropertiesNewOverView;