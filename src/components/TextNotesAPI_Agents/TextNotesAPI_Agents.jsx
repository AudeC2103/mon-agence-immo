import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';
import { NotesAPI } from './NotesAPI';

const TextAgents = () => {
    const [agents, setAgents] = useState([]);
    
    useEffect(() => {
        const fetchAgents = async () => {
            const data = await NotesAPI.fetchAllAgents();
            setAgents(data);
        };
        fetchAgents();
    }, []);

    return (
        <div className={styles.AgentsContainer}>
            {agents.map(agent => (
                <div key={agent.id}>
                    <h1 className={styles.agentName}>{agent.firstName} {agent.lastName}</h1>
                    <img className={styles.agentPhoto} src={agent.photo} alt={`${agent.firstName} ${agent.lastName}`} />
                    <div className={styles.agentDescription}>
                        <p>{agent.description}</p>
                    </div>
                    <div className={styles.agentDetails}>
                        <p><strong>Téléphone:</strong> {agent.phone}</p>
                        <p><strong>Email:</strong> {agent.email}</p>
                        <p><strong>Expérience:</strong> {agent.experienceYears} ans</p>
                        <p><strong>Projets:</strong> {agent.projects}</p>
                        <p><strong>Ventes:</strong> {agent.sales}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TextAgents;
