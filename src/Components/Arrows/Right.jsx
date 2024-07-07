import React from 'react';
import '../Styles/arrow.css';

const Right = ({ style, onClick }) => {
  return (
    <div
      className="slick-arrow-right"
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <i className="fas fa-arrow-right right-arrow" />
    </div>
  );
};

export default Right;
