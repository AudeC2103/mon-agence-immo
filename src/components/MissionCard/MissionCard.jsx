import React from 'react';
import PropTypes from 'prop-types';
import s from './style.module.scss';

const MissionCard = ({ service }) => {
  if (!service) {
    return null;
  }

  return (
    <div className={s.missionCard}>
      <img src={service.image} alt={service.titre} className={s.image} />
      <div className={s.content}>
        <h4 className={s.title}>{service.titre}</h4>
        <p className={s.description}>{service.description}</p>
      </div>
    </div>
  );
};

MissionCard.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.number.isRequired,
    titre: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default MissionCard;
