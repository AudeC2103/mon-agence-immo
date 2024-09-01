import React from 'react';
import AllPropertiesList from './../../containers/AllPropertiesList/AllProperties';
import TeamOverView from './../../containers/TeamOverview/TeamOverView';
import ContactOverView from './../../containers/ContactOverview/ContactOverView';
import TemoignagesList from './../../containers/TemoignagesList/TemoignagesList';
import s from './style.module.scss';

const AllPropertiesPage = () => {
  return (
    <div className={s.page}>
      <AllPropertiesList />
      <TemoignagesList />
      <TeamOverView />
      <ContactOverView />

    </div>
  );
};

export default AllPropertiesPage;