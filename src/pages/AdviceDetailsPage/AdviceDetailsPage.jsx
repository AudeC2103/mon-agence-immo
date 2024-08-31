//./pages/AdviceDetailsPage/AdviceDetailsPage.jsx
import React from 'react';
import MainBanner from './../../containers/MainBanner/MainBanner'
import TeamOverView from '../../containers/TeamOverview/TeamOverView';
import ContactOverView from '../../containers/ContactOverview/ContactOverView';
import s from './style.module.scss';

const AdviceDetailsPage = () => {
  return (
    <div className={s.page}>
      <MainBanner categorie="Advice" />
      <TeamOverView />
      <ContactOverView />
    </div>
  );
};

export default AdviceDetailsPage;