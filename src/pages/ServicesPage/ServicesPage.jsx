//./pages/TeamPage/TeamPage.jsx
import React from 'react';
import { useMissions } from '../../hooks/useMissions';
import ServicesCard from '../../components/ServicesCard/ServicesCard';
import FAQAccordion from '../../components/Accordeon/Accordeon';
import s from './style.module.scss';

const ServicesPage = () => {
  const { missions, loading, error } = useMissions();
    
    return (
      <div className={s.servicesPage}>
        <section className={s.servicesSection}>
          <h2>Les services que propose l’agence</h2>
          {loading && <p>Chargement des services...</p>}
          {error && <p>Erreur: {error}</p>}
          <div className={s.missionsGrid}>
            {!loading && missions && missions.length > 0 && missions[0].categories.map(category => (
              <div key={category.categorie} className={s.missionCategory}>
                <h3>{category.categorie}</h3>
                {category.services.map(service => (
                  <ServicesCard key={service.id} service={service} />
                ))}
              </div>
            ))}
          </div>
        </section>
        <section className={s.agencyDescription}>
          <h2>L’agence</h2>
          <p>
            Notre mission : vous accompagner et sécuriser vos transactions. Forte de son expérience dans la transaction immobilière,
            nous répondons aux attentes des clients grâce à un réseau positionné en Ille-et-Vilaine, à Rennes, Bruz, Cesson-Sévigné, Pacé,
            Saint-Malo, Dinard.
          </p>
          <p>
            Implantée dans la région de Rennes, Nidimmo vous garantit une proximité et une connaissance parfaite du marché, une écoute
            personnalisée, la maîtrise des contraintes, une équipe motivée et expérimentée qui accompagne les particuliers et professionnels
            à chaque étape de leur projet. Notre mission consiste à accompagner nos clients afin de donner vie à leur projet, en toute sérénité.
            Dans un environnement en évolution constante sur le plan réglementaire et fiscal, la qualité et la pertinence du conseil sont
            primordiales pour faire le bon choix.
          </p>
        </section>
        <FAQAccordion />
      </div>
  );
};

export default ServicesPage;
