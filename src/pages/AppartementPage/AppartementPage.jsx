import React from 'react';
import AppartementList from '../../components/AppartementList/AppartementList';
import TeamOverView from '../../containers/TeamOverview/TeamOverView';
import ContactOverView from '../../containers/ContactOverview/ContactOverView';
import TemoignagesList from '../../containers/TemoignagesList/TemoignagesList';
import s from './style.module.scss';

const AppartementPage = () => {
  return (
    <div className={s.page}>
      <AppartementList />
      <TeamOverView />
      <TemoignagesList />
      <ContactOverView />

    </div>
  );
};

export default AppartementPage;