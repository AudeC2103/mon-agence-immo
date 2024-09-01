import React from 'react';
import Slider from 'react-slick';
import TemoignageCard from './../../components/TemoignageCard/TemoignageCard';
import { useTemoignages } from './../../hooks/useTemoignages';
import s from './style.module.scss';

const TemoignagesList = () => {
  const { temoignages, loading, error } = useTemoignages();

  if (loading) return <p>Chargement des témoignages...</p>;
  if (error) return <p>Erreur lors du chargement des témoignages : {error}</p>;

  // Configuration du slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // 3 en desktop
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // En dessous de 1024px, 2 témoignages affichés
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // En dessous de 600px, 1 témoignage affiché
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={s.container}>
      <h2>C'est vous qui en parlez le mieux ! Merci</h2>
      <Slider {...settings}>
        {temoignages.map((temoignage, index) => (
          <TemoignageCard
            key={index}
            client={temoignage.client}
            categorie={temoignage.catégorie}
            commentaire={temoignage.commentaire}
          />
        ))}
      </Slider>
    </div>
  );
};

export default TemoignagesList;
