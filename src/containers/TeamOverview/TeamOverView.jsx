import React from 'react';
import { useAgents } from '../../hooks/useAgents';
import { Link } from 'react-router-dom';
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
            <div className={s.teamOverview__containers}>
                <div className={s.teamOverview__containers_agency}>
                    <h3 className={s.teamOverview__containers_agencyTitle}>Notre mission</h3>
                    <img src={Team} className={s.teamOverview__containers_img} alt="équipe" />
                    <p className={s.teamOverview__containers_agencyText}>
                        Experte en transaction immobilière, et spécialisée sur le bassin de Rennes et ses environs, nous vous accompagnons à chaque étape de votre projet.
                    </p>
                    <Button variant="primary">
                        <Link to="/contact" className={s.teamOverview__containers_ctaLink}>Contactez-nous</Link>
                    </Button>
                    <Button variant="primary">
                        <Link to="/l_agence" className={s.teamOverview__containers_ctaLink}>En savoir plus</Link>
                    </Button>
                </div>                
                <div className={s.teamOverview__containers_agents}>
                    <h3 className={s.teamOverview__containers_agentsTitle}>Les conseillers</h3>
                    <Carousel
                        items={agents}
                        renderItem={(agent) => <AgentCard agent={agent} />}
                        settings={carouselSettings}  // Utilisation des settings pour contrôler le carrousel
                    />
                </div>
            </div>
        </div>
    );
}

export default TeamOverview;
