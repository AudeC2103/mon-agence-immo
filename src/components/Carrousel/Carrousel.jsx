// Carrousel.jsx
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import s from './style.module.scss';

const Carrousel = ({ items = [], renderCard, visibleCards = 1, sortFunction, filterFunction }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    let updatedItems = items;
    if (filterFunction) {
      updatedItems = updatedItems.filter(filterFunction);
    }
    if (sortFunction) {
      updatedItems = updatedItems.slice().sort(sortFunction);
    }
    setFilteredItems(updatedItems);
  }, [items, sortFunction, filterFunction]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + visibleCards) % filteredItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - visibleCards + filteredItems.length) % filteredItems.length
    );
  };

  if (!items || items.length === 0) {
    return <p>Aucun élément à afficher.</p>;
  }

  return (
    <div className={s.carrousel}>
      <button onClick={handlePrev} className={s.navButton}>{"<"}</button>
      <div className={s.cardContainer}>
        {filteredItems.slice(currentIndex, currentIndex + visibleCards).map((item, index) => (
          <div key={index} className={s.cardWrapper}>
            {renderCard(item)}
          </div>
        ))}
      </div>
      <button onClick={handleNext} className={s.navButton}>{">"}</button>
    </div>
  );
};

Carrousel.propTypes = {
  items: PropTypes.array.isRequired,
  renderCard: PropTypes.func.isRequired,
  visibleCards: PropTypes.number,
  sortFunction: PropTypes.func,
  filterFunction: PropTypes.func,
};

export default Carrousel;