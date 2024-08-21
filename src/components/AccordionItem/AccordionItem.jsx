// src/AccordionItem.js
import React, { useState } from 'react';

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item" style={{ marginBottom: '10px' }}>
      <div 
        className="accordion-header" 
        onClick={toggleAccordion} 
        style={{ cursor: 'pointer', padding: '10px', borderBottom: '1px solid #ccc', backgroundColor: '#f1f1f1' }}
      >
        <h3>{question}</h3>
      </div>
      {isOpen && (
        <div className="accordion-content" style={{ padding: '10px', border: '1px solid #ccc', borderTop: 'none' }}>
          {answer}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
