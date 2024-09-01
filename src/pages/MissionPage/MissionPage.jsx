//./pages/MissionPage/MissionPage.jsx
//./pages/TeamPage/TeamPage.jsx
import React from 'react';
import s from './style.module.scss';

const MissionPage = () => {
    
    return (
      <div className={s.missionPage}>
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
      </div>
  );
};

export default MissionPage;
