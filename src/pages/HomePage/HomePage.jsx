import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PropertiesAPI } from '../../api/properties-api';
import Carrousel from '../../components/Carrousel/Carrousel';
import styles from './style.module.scss';

const HomePage = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    PropertiesAPI.fetchAll()
      .then(data => {
        console.log("Données récupérées :", data);
        // Mise à jour de l'état directement avec le tableau de propriétés
        if (Array.isArray(data)) {
          setProperties(data);
        } else {
          console.error("Les données récupérées ne sont pas un tableau de propriétés");
        }
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des données :", error);
      });
  }, []);

  return (
    <div className={styles.homepage}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Bienvenue à Notre Agence Immobilière</h1>
          <p>Trouvez la maison de vos rêves avec nous.</p>
          <Link to="/properties" className={styles.ctaButton}>Voir les Propriétés</Link>
        </div>
      </section>
      <section className={styles.propertiesSection}>
        <h2>Nos Dernières Propriétés</h2>
        {properties.length > 0 ? (
          <Carrousel properties={properties} />
        ) : (
          <p>Chargement des propriétés...</p>
        )}
      </section>
      <section className={styles.contactSection}>
        <h2>Contactez-nous</h2>
        <p>Vous avez des questions ou souhaitez visiter une propriété ? Contactez-nous dès aujourd'hui.</p>
        <Link to="/contact" className={styles.ctaButton}>Contactez-nous</Link>
      </section>
    </div>
  );
};

export default HomePage;
