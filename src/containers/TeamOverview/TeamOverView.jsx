import React from 'react';
import { useAgents } from '../../hooks/useAgents';
import AgentCard from '../../components/AgentCard/AgentCard';
import Carousel from '../../components/Carousel/Carousel';
import Button from '../../components/Button/Button';
import Team from './../../assets/team/team.jpg';
import s from './style.module.scss';

const TeamOverview = () => {
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
        slidesToShow: 1,  // Affiche une carte à la fois
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <div className={s.teamOverview}>
            <h2>L'équipe</h2>
            <div className={s.containers}>
                <div className={s.agency}>
                    <h3 className={s.agencyTitle}>Notre mission</h3>
                    <img src={Team} alt="équipe" className={s.teamImg} />
                    <p className={s.agencyText}>
                        Experte en transaction immobilière, et spécialisée sur le bassin de Rennes et ses environs, nous vous accompagnons à chaque étape de votre projet.
                    </p>
                    <div className={s.buttonContainer}>
                        <Button variant="primary" to="/contact">Contactez-nous</Button>
                        <Button variant="secondary" to="/l_agence">En savoir plus</Button>
                    </div>
                </div>
                <div className={s.agents}>
                    <h3 className={s.agentsTitle}>Les conseillers</h3>
                    <Carousel
                        items={agents}
                        renderItem={(agent) => <AgentCard agent={agent} />}
                        settings={carouselSettings}
                    />
                </div>
            </div>
        </div>
    );
}

export default TeamOverview;
