// src/FAQAccordion.js
import React, { useState } from 'react';
import AccordionItem from './../AccordionItem/AccordionItem';
import { useFAQ } from './../../hooks/useFAQ';
import './FAQAccordion.css';

const FAQAccordion = () => {
  const { FAQ, loading, error } = useFAQ(); // Utilisation du hook useFAQ
  const [selectedCategory, setSelectedCategory] = useState('Toutes');

  if (loading) {
    return <div>Chargement en cours...</div>;
  }

  if (error) {
    return <div>Erreur : {error}</div>;
  }

  const categories = ['Toutes', ...new Set(FAQ.map(item => item.catégorie))];

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredFaqData = selectedCategory === 'Toutes'
    ? FAQ
    : FAQ.filter(item => item.catégorie === selectedCategory);

  return (
    <div className="faq-accordion" style={{ padding: '20px' }}>
      <h1>FAQ</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="categoryFilter" style={{ marginRight: '10px' }}>Filtrer par catégorie:</label>
        <select id="categoryFilter" value={selectedCategory} onChange={handleCategoryChange}>
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      
      {filteredFaqData.map(item => (
        <AccordionItem key={item.id} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default FAQAccordion;
