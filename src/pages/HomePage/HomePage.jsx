import React from 'react';
import MainBanner from '../../containers/MainBanner/MainBanner';
import PropertiesOverview from './../../containers/PropertiesOverView/PropertiesOverView';
import PropertiesNewOverView from './../../containers/PropertiesNewOverView/PropertiesNewOverView';
import TeamOverView from '../../containers/TeamOverview/TeamOverView';
import ContactOverView from '../../containers/ContactOverview/ContactOverView';
import TemoignagesList from '../../containers/TemoignagesList/TemoignagesList';
import s from './style.module.scss';

const HomePage = () => {
  return (
    <div className={s.homepage}>
      <MainBanner categorie="Home" />
      <PropertiesOverview />
      <TeamOverView />
      <TemoignagesList />
      <PropertiesNewOverView />
      <ContactOverView />

    </div>
  );
};

export default HomePage;