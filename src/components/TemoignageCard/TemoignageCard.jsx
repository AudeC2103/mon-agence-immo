import React from 'react';
import s from './style.module.scss';

const TemoignageCard = ({ client, categorie, commentaire }) => {
  return (
    <div className={s.card}>
      <div className={s.header}>
        <h3 className={s.client}>{client}</h3>
        <p className={s.categorie}>{Array.isArray(categorie) ? categorie.join(', ') : categorie}</p>
      </div>
      <p className={s.commentaire}>{commentaire}</p>
    </div>
  );
};

export default TemoignageCard;
