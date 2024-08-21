import React from 'react';
import { useParams } from 'react-router-dom';
import { useProperties } from './../../hooks/useProperties';

const PropertyDetailsPage = () => {
  const { id } = useParams(); // Récupère l'ID de la propriété à partir de l'URL
  const { properties } = useProperties(); // Récupère la liste des propriétés
  const property = properties.find(p => p.id === parseInt(id));

  if (!property) return <p>Propriété non trouvée.</p>;

  return (
    <div className="property-details">
      <h1>{property.title}</h1>
      <img src={`/${property.images[0]}`} alt={property.title} className="property-image" />
      <p>{property.description}</p>
      <p>Prix: {property.price} EUR</p>
      <p>Adresse: {property.address}, {property.city}</p>
      <p>Type: {property.type}</p>
      <p>Surface: {property.area} m²</p>
      <p>Chambres: {property.bedrooms}</p>
      <p>Salles de bain: {property.bathrooms}</p>
      {/* Ajoutez plus de détails selon vos besoins */}
      <button>Contacter l'Agence</button>
    </div>
  );
};

export default PropertyDetailsPage;
