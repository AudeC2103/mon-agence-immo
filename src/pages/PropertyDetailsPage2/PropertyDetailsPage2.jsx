import React from 'react';
import { useParams } from 'react-router-dom';
import { useProperties } from '../../hooks/useProperties';
import s from './style.module.scss';

const PropertyDetailsPage2 = () => {
  const { id } = useParams();
  const { properties, loading, error } = useProperties();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const property = properties.find(p => p.id === parseInt(id));

  if (!property) {
    return <p>Property not found</p>;
  }

  return (
    <div className={s.propertyDetailsPage}>
      <div className={s.container}>
        
        <div className={s.propertyGalleryContainers}>
        <h2>{property.title}</h2>
          <div className={s.propertyGallery}>
            <img src={`/${property.images[0]}`} alt="Main" className={s.mainImage} />
          </div>
          <div className={s.thumbnails}>
            {property.images.slice(1).map((image, index) => (
              <img key={index} src={`/${image}`} alt={`Thumbnail ${index + 1}`} className={s.thumbnail} />
            ))}
          </div>
        </div>
      </div>
      <div className={s.propertyInfoPrincipales}>
        <p className={s.price}>{property.price.toLocaleString()} {property.currency}</p>
        <p className={s.area}>{property.area} m²</p>
        <p className={s.rooms}>{property.rooms} pièces - {property.bedrooms} chambres - {property.bathrooms} salles de bain</p>
        <p className={s.yearBuilt}>Construit en {property.year_built}</p>
      </div>
      <div className={s.propertyInfo}>
        <h3>{property.type} à {property.city}, {property.region}</h3>
      </div>
      <div className={s.details}>
        <div className={s.additionalDetails}>
          <h4>Détails supplémentaires :</h4>
          <p className={s.description}>{property.description}</p>
          <p>Étage : {property.floor}/{property.total_floors}</p>
          <p>Chauffage : {property.heating}</p>
          <p>Climatisation : {property.cooling}</p>
          <p>Parking : {property.parking.available ? `${property.parking.type}, ${property.parking.spaces} place(s)` : 'Non'}</p>
          <p>Balcon : {property.balcony ? 'Oui' : 'Non'}</p>
          <p>Terrasse : {property.terrace ? 'Oui' : 'Non'}</p>
          <p>Ascenseur : {property.elevator ? 'Oui' : 'Non'}</p>
        </div>
        <div className={s.contactInfo}>
          <h4>Contactez l'agence</h4>
          <p>Agent : {property.contact_info.name}</p>
          <p>Téléphone : {property.contact_info.phone}</p>
          <p>Email : <a href={`mailto:${property.contact_info.email}`}>{property.contact_info.email}</a></p>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsPage2;
