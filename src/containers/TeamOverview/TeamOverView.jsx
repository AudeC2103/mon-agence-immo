import React from 'react';
import { useAgents } from '../../hooks/useAgents';
import { Link } from 'react-router-dom';
import AgentCard from '../../components/AgentCard/AgentCard';
import Carousel from '../../components/Carousel/Carousel';
import Button from '../../components/Button/Button';
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
            <div className="container">
                <div className={s.teamOverview__agency}>
                    <h3 className={s.teamOverview__agencyTitle}>Notre mission</h3>
                    <p className={s.teamOverview__agencyText}>Experte en transaction immobilière, et spécialisée sur le bassin de Rennes et ses environs, nous vous accompagnons à chaque étape de votre projet.</p>
                    <Button variant="secondary">
                        <Link to="/contact" className={s.teamOverview__ctaLink}>Contactez-nous</Link>
                    </Button>
                    <Button variant="secondary">
                        <Link to="/l_agence" className={s.teamOverview__ctaLink}>En savoir plus</Link>
                    </Button>
                </div>
                <div className={s.teamOverview__agents}>
                    <h3 className={s.teamOverview__agentsTitle}>Les conseillers</h3>
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
