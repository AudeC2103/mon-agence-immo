import React from 'react';
import MainBanner from '../../containers/MainBanner/MainBanner';
import FilterBar from '../../components/FilterBar/FilterBar';
import PropertiesOverview from './../../containers/PropertiesOverView/PropertiesOverView';
import PropertiesNewOverView from './../../containers/PropertiesNewOverView/PropertiesNewOverView';
import TeamOverView from '../../containers/TeamOverview/TeamOverView';
import ContactOverView from '../../containers/ContactOverview/ContactOverView';
import s from './style.module.scss';

const HomePage = () => {
  return (
    <div className={s.homepage}>
      <MainBanner categorie="Home" />
      <FilterBar />
      <PropertiesOverview />
      <TeamOverView />
      <PropertiesNewOverView />
      <ContactOverView />
    </div>
  );
};

export default HomePage;