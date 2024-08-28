// components/AgentCard
import React from 'react';
import PropTypes from 'prop-types';
import s from './style.module.scss';

const AgentCard = ({ agent }) => {
  return (
    <div className={s.agentCard}>
      <div className={s.contact}>
        <img src={agent.photo} alt={`${agent.firstName} ${agent.lastName}`} className={s.image} />
        <div className={s.details}>
          <h4 className={s.name}>{agent.firstName} {agent.lastName}</h4>
          <h5 className={s.phone}>{agent.phone}</h5>
        </div>
      </div>
      <div className={s.description}>
        <h6 className={s.email}>{agent.email}</h6>
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
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default AgentCard;
