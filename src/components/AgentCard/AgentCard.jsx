// components/AgentCard
import React from 'react';
import PropTypes from 'prop-types';
import s from './style.module.scss';
import Email from './../../assets/icones/email.png'
import Phone from './../../assets/icones/phone.png'
import Info from './../../assets/icones/info.png'

const AgentCard = ({ agent }) => {
  return (
    <div className={s.agentCard}>
      <div className={s.contact}>
        <img src={agent.photo} alt={`${agent.firstName} ${agent.lastName}`} className={s.image} />
        <div className={s.details}>
          <h4 className={s.name}>{agent.firstName} {agent.lastName}</h4>
          <div className={s.phone}>
            <img src={Phone} className={s.iconPhone} alt="icone telephone" />
            <p className={s.phoneNumber}>{agent.phone} </p>
          </div>
        </div>
      </div>
      <div className={s.description}>
        <div className={s.email}>
          <img src={Email} className={s.iconMail} alt="icone e-mail" />
          <p className={s.emailAdress}>{agent.email}</p>
        </div>
        <div className={s.infoText}>
          <img src={Info} className={s.iconInfo} alt="icone info" />
          <p>{agent.description} </p>
        </div>
        
        
        
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
