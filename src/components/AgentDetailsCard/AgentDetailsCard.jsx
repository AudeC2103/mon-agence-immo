import React from 'react';
import PropTypes from 'prop-types';
import s from './style.module.scss';

const AgentDetailsCard = ({ agent }) => {
  return (
    <div className={s.agentDetailsCard}>
      <img 
        src={agent.photo} 
        alt={`${agent.firstName} ${agent.lastName}`} 
        className={s.agentDetailsCard__photo} 
      />
      <div className={s.agentDetailsCard__info}>
        <h3 className={s.agentDetailsCard__name}>{`${agent.firstName} ${agent.lastName}`}</h3>
        <p className={s.agentDetailsCard__description}>{agent.description}</p>
        <p className={s.agentDetailsCard__contact}><strong>Téléphone : </strong>{agent.phone}</p>
        <p className={s.agentDetailsCard__contact}><strong>Email : </strong>{agent.email}</p>
        <p className={s.agentDetailsCard__experience}><strong>Années d'expérience : </strong>{agent.experienceYears}</p>
        <p className={s.agentDetailsCard__projects}><strong>Projets réalisés : </strong>{agent.projects}</p>
        <p className={s.agentDetailsCard__sales}><strong>Ventes : </strong>{agent.sales}</p>
      </div>
    </div>
  );
};

AgentDetailsCard.propTypes = {
  agent: PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    experienceYears: PropTypes.number.isRequired,
    projects: PropTypes.number.isRequired,
    sales: PropTypes.number.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
};

export default AgentDetailsCard;
