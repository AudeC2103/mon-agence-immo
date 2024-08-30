// ./src/components/AdviceCard/AdviceCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import s from './style.module.scss';
import { Link } from 'react-router-dom';

const AdviceCard = ({ advice }) => {
  // Ajout de vérifications pour éviter les erreurs
  if (!advice) {
    return null;
  }
  return (
    <div className={s.card}>
      <img src={advice.image} alt={advice.title} className={s.image} />
      <div className={s.content}>
        <h3 className={s.title}>{advice.title}</h3>
        <p className={s.author}>Par {advice.author}</p>
        <p className={s.summary}>{advice.summary}</p>
        <Link to={`/conseils/${advice.id}`} className={s.link}>
          Lire plus
        </Link>
      </div>
    </div>
  );
};

AdviceCard.propTypes = {
  advice: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
  }).isRequired,
};

export default AdviceCard;


