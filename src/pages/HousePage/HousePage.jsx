import React from 'react';
import HouseList from './../../components/HouseList/HouseList';
import TeamOverView from './../../containers/TeamOverview/TeamOverView';
import ContactOverView from './../../containers/ContactOverview/ContactOverView';
import TemoignagesList from './../../containers/TemoignagesList/TemoignagesList';
import s from './style.module.scss';

const HousePage = () => {
  return (
    <div className={s.page}>
      <HouseList />
      <TeamOverView />
      <TemoignagesList />
      <ContactOverView />

    </div>
  );
};

export default HousePage;