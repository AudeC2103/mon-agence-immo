//./pages/AdviceDetailsPage/AdviceDetailsPage.jsx
// ./src/pages/AdviceDetailsPage/AdviceDetailsPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useAdvices } from './../../hooks/useAdvices';
import MainBanner from './../../containers/MainBanner/MainBanner';
import TeamOverView from '../../containers/TeamOverview/TeamOverView';
import ContactOverView from '../../containers/ContactOverview/ContactOverView';
import s from './style.module.scss';

const AdviceDetailsPage = () => {
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  const { advices, loading, error } = useAdvices();

  if (loading) {
    return <div>Chargement en cours...</div>;
  }

  if (error) {
    return <div>Erreur : {error}</div>;
  }

  const advice = advices.find(advice => advice.id === parseInt(id));

  if (!advice) {
    return <div>Conseil non trouvé.</div>;
  }

  return (
    
    <div className={s.page}>
      <MainBanner categorie="Advice" />
      <div className={s.content}>
        <h1 className={s.title}>{advice.title}</h1>
        <p className={s.author}>Par {advice.author}</p>
        <img src={advice.image} alt={advice.title} className={s.image} />
        <div className={s.summary}>{advice.summary}</div>
        
        {advice.sections.map((section, index) => (
          <div key={index} className={s.section}>
            <h2 className={s.sectionHeader}>{section.header}</h2>
            <p className={s.sectionText}>{section.text}</p>
            {section.subsections && (
              <div className={s.subsections}>
                {section.subsections.map((subsection, subIndex) => (
                  <div key={subIndex} className={s.subsection}>
                    <h3 className={s.subheader}>{subsection.subheader}</h3>
                    <p className={s.subtext}>{subsection.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))} 
      </div>
      <TeamOverView />
      <ContactOverView />
    </div>
  );
};

export default AdviceDetailsPage;
