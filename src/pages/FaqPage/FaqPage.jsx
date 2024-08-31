import React from 'react';
import MainBanner from '../../containers/MainBanner/MainBanner';
import PropertiesNewOverView from './../../containers/PropertiesNewOverView/PropertiesNewOverView';
import TeamOverView from '../../containers/TeamOverview/TeamOverView';
import ContactOverView from '../../containers/ContactOverview/ContactOverView';
import s from './style.module.scss';
import FAQAccordion from '../../components/Accordeon/Accordeon';

const FaqPage = () => {
  return (
    <div className={s.page}>
      <MainBanner categorie="Advice" />
      <div className={s.faq}>
        <FAQAccordion />
      </div>
    </div>
  );
};

export default FaqPage;