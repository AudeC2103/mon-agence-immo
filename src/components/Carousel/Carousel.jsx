import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const CarouselContainer = styled.div`
  max-width: ${(props) => props.width || '100%'};
  margin: 0 auto;
`;

const Carousel = ({ 
  items, 
  renderItem, 
  settings = { 
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    arrows: true 
  }, 
  width = '100%', 
  height = 'auto', 
  borderRadius = '0px' 
}) => {
  return (
    <CarouselContainer width={width}>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index}>
            {renderItem(item, { height, borderRadius })}
          </div>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

Carousel.propTypes = {
  items: PropTypes.array.isRequired, // Les éléments à afficher dans le carousel
  renderItem: PropTypes.func.isRequired, // Fonction pour rendre chaque élément
  settings: PropTypes.object, // Paramètres du carousel
  width: PropTypes.string, // Largeur personnalisable du carousel
  height: PropTypes.string, // Hauteur personnalisable des images
  borderRadius: PropTypes.string, // Bordures arrondies personnalisables
};

export default Carousel;
