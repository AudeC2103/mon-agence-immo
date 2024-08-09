import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';
import { NotesAPI } from './NotesAPI';

const TextProperties = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        const fetchProperties = async () => {
            const data = await NotesAPI.fetchAllProperties();
            setProperties(data);
        };
        fetchProperties();
    }, []);

    return (
        <div className={styles.PropertiesContainer}>
            {properties.map(property => (
                <div key={property.id}>
                    <h1 className={styles.propertyTitle}>{property.title}</h1>
                    {property.images && property.images.length > 0 && (
                        <img className={styles.propertyImage} src={property.images[0]} alt={property.title} />
                    )}
                    <div className={styles.propertyDescription}>
                        <p>{property.description}</p>
                    </div>
                    <div className={styles.propertyDetails}>
                        <p><strong>Adresse:</strong> {property.address}, {property.city}, {property.postal_code}, {property.region}, {property.country}</p>
                        <p><strong>Prix:</strong> {property.price} {property.currency}</p>
                        <p><strong>Surface:</strong> {property.area} m²</p>
                        <p><strong>Chambres:</strong> {property.bedrooms}</p>
                        <p><strong>Salles de bain:</strong> {property.bathrooms}</p>
                        <p><strong>Parking:</strong> {property.parking.type} ({property.parking.spaces} place(s))</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TextProperties;
