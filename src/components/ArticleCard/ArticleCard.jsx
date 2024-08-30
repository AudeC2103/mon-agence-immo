import React from 'react';
import PropTypes from 'prop-types';
import s from './style.module.scss';

const ArticleCard = ({ article }) => {
  // Ajout de vérifications pour éviter les erreurs
  if (!article) {
    return null;
  }

  return (
    <div className={s.card}>
      <img src={article.photo_source} alt={article.title} className={s.image} />
      <div className={s.content}>
        <h3 className={s.title}>{article.title}</h3>
        <p className={s.author}>Par {article.author}</p>
        <p className={s.date}>{article.date}</p>
        <p className={s.summary}>{article.summary}</p>
        <a href={article.link} target="_blank" rel="noopener noreferrer" className={s.link}>
          Lire plus
        </a>
      </div>
    </div>
  );
};

ArticleCard.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    photo_source: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default ArticleCard;