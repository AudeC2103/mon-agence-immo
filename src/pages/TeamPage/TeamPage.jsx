//./pages/TeamPage/TeamPage.jsx
import React from 'react';
import { useAgents } from '../../hooks/useAgents';
import { useMissions } from './../../hooks/useMissions';
import MissionCard from './../../components/MissionCard/MissionCard';
import MainBanner from '../../containers/MainBanner/MainBanner';
import AgentCard from '../../components/AgentCard/AgentCard';
import Carousel from '../../components/Carousel/Carousel';
import s from './style.module.scss';

const TeamPage = () => {
  const { missions, loading, error } = useMissions();
  const { agents, loading: agentsLoading, error: agentsError } = useAgents();

    if (agentsLoading) {
        return <div>Chargement en cours...</div>;
    }

    if (agentsError) {
        return <div>Erreur : {agentsError.message}</div>;
    }

    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,  // Affiche une carte à la fois
        slidesToScroll: 1,
        arrows: true,
    };

    
    return (
      <div className={s.teamPage}>
        <MainBanner categorie="Agency" />
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

        <section className={s.servicesSection}>
          <h2>Les services que propose l’agence</h2>
          {loading && <p>Chargement des services...</p>}
          {error && <p>Erreur: {error}</p>}
          <div className={s.missionsGrid}>
            {!loading && missions && missions.length > 0 && missions[0].categories.map(category => (
              <div key={category.categorie} className={s.missionCategory}>
                <h3>{category.categorie}</h3>
                {category.services.map(service => (
                  <MissionCard key={service.id} service={service} />
                ))}
              </div>
            ))}
          </div>
        </section>
        <div className={s.agents}>
              <h2>L'équipe</h2>
                  <div className={s.agents}>
                      <Carousel
                          items={agents}
                          renderItem={(agent) => <AgentCard agent={agent} />}
                          settings={carouselSettings}
                      />
                  </div>
        </div>
      </div>
  );
};

export default TeamPage;
