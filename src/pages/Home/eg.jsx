import React from 'react';

import PropTypes from 'prop-types';
import './eg.css'; // Optional for any specific styles

const ExampleCarouselImage = ({ text, imgSrc }) => {
  return (
    <div className="carousel-image-container">
      <img src={imgSrc} alt={text} className="carousel-image" />
      <div className="overlay">
        <h3>{text}</h3>
      </div>
    </div>
  );
};

ExampleCarouselImage.propTypes = {
  text: PropTypes.string.isRequired,
  imgSrc: PropTypes.string, // imgSrc can be passed if you want to display images
};

export default ExampleCarouselImage;
