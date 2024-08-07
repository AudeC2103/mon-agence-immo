// src/pages/HomePage/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./style.module.scss";
import property1_1 from "../../assets/property1_1.jpg"

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Bienvenue à Notre Agence Immobilière</h1>
          <p>Trouvez la maison de vos rêves avec nous.</p>
          <Link to="/properties" className={styles.ctaButton}>Voir les Propriétés</Link>
        </div>
      </section>
      <section className={styles.featuredProperties}>
        <h2>Propriétés en Vedette</h2>
        <div className={styles.propertiesList}>
          {/* Exemple de propriétés, à remplacer par des composants dynamiques */}
          <div className={styles.propertyCard}>
            <img src={property1_1} alt="Maison 1" />
            <h3>Maison Moderne</h3>
            <p>3 chambres, 2 salles de bain, 150m²</p>
            <Link to="/properties/1" className={styles.moreInfo}>En savoir plus</Link>
          </div>
          <div className={styles.propertyCard}>
            <img src="/assets/house2.jpg" alt="Maison 2" />
            <h3>Appartement Spacieux</h3>
            <p>2 chambres, 1 salle de bain, 100m²</p>
            <Link to="/properties/2" className={styles.moreInfo}>En savoir plus</Link>
          </div>
          {/* Ajoutez d'autres propriétés ici */}
        </div>
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



.ctaButton {
  background-color: $primary-color;
  color: $background-color;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  margin-top: 10px;
  display: inline-block;

  &:hover {
    background-color: darken($primary-color, 10%);
  }
}