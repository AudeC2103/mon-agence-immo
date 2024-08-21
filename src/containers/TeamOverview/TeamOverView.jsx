import React from 'react';
import { useAgents } from '../../hooks/useAgents';
import { Link } from 'react-router-dom';
import AgentCard from '../../components/AgentCard/AgentCard';
import Carrousel from '../../components/Carrousel/Carrousel';
import Button from '../../components/Button/Button';
import s from './style.module.scss';

const TeamOverView = () => {
    const { agents, loading: agentsLoading, error: agentsError } = useAgents();


    if (agentsLoading) {
        return <div>Chargement en cours...</div>;
    }

    if (agentsError) {
        return <div>Erreur : {agentsError.message}</div>;
    }
    
    return (
        <div className={s.teamOverview}>
            <h2>L'équipe</h2>
            <div className="container">
                <div className={s.teamOverview__agency}>
                    <h3 className={s.teamOverview__agencyTitle}>Notre mission</h3>
                    <p className={s.teamOverview__agencyText}>Experte en transaction immobilière, et spécialisée sur le bassin de Rennes et ses environs, nous vous accompagnons à chaque étape de votre projet.</p>
                    <Button variant="secondary"><Link to="/contact" className={s.teamOverview__ctaLink}>Contactez-nous</Link>
                    </Button>
                    <Button variant="secondary"><Link to="/agency" className={s.teamOverview__ctaLink}>En savoir plus</Link>
                    </Button>
                </div>
                <div className={s.teamOverview__agents}>
                    <h3 className={s.teamOverview__agentsTitle}>Les conseillers</h3>
                    <Carrousel
                        items={agents}
                        renderCard={(agent) => <AgentCard agent={agent} />}
                        visibleCards={1}
                    />
                </div>
            </div>
        </div>
    );
}

export default TeamOverView;
