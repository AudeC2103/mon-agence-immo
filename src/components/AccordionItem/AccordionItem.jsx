import React, { useState } from 'react';
import s from './style.module.scss';

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={s.accordionItem}> {/* Utilisation de la classe SCSS ici */}
      <div 
        className={s.accordionHeader} 
        onClick={toggleAccordion}
      >
        <h3>{question}</h3>
      </div>
      {isOpen && (
        <div className={s.accordionContent}>
          {answer}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
