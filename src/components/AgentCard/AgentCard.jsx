// components/AgentCard
import React from 'react';
import PropTypes from 'prop-types';
import s from './style.module.scss';

const AgentCard = ({ agent }) => {
  return (
    <div className={s.agentCard}>
      <img src={agent.photo} alt={`${agent.firstName} ${agent.lastName}`} className={s.image} />
      <div className={s.details}>
        <h3>{agent.firstName} {agent.lastName}</h3>
        <p>{agent.phone}</p>
        <p>{agent.email}</p>
        <p>{agent.description}</p>
      </div>
    </div>
  );
};

AgentCard.propTypes = {
  agent: PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired,
};

export default AgentCard;
