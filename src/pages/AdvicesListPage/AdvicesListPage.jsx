// ./src/pages/AdvicesListPage/AdvicesListPage.jsx
import React from 'react';
import MainBanner from '../../containers/MainBanner/MainBanner';
import AdviceCard from '../../components/AdviceCard/AdviceCard';
import { useAdvices } from '../../hooks/useAdvices';
import s from './style.module.scss';

const AdvicesListPage = () => {
  const { advices, loading, error } = useAdvices();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading advices</div>;

  return (
    <div className={s.page}>
      <MainBanner categorie="Advice" />
      <div className={s.advices}>
        {advices.map((advice) => (
          <AdviceCard key={advice.id} advice={advice} />
        ))}
      </div>
    </div>
  );
};

export default AdvicesListPage;
