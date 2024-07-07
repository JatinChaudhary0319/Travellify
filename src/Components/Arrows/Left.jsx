import React from 'react';
import '../Styles/arrow.css';

const Left = ({ style, onClick }) => {
  return (
    <div
      className="slick-arrow-left"
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <i className="fas fa-arrow-left left-arrow" />
    </div>
  );
};

export default Left;