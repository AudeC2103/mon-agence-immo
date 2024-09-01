// ./src/pages/AllAdvicesPage/AllAdvicesPage.jsx
import React from 'react';
import MainBanner from './../../containers/MainBanner/MainBanner';
import AdviceCard from './../../components/AdviceCard/AdviceCard';
import { useAdvices } from './../../hooks/useAdvices';
import s from './style.module.scss';
import FAQAccordion from './../../components/Accordeon/Accordeon';

const AllAdvicesPage = () => {
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
      <div className={s.faq}>
        <FAQAccordion/>
      </div>
    </div>
  );
};

export default AllAdvicesPage;
