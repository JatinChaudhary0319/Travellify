import React from 'react';
import '../Styles/Collections.css';

const CollectionCard = ({ url, description }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${url})`
  };

  return (
    <div className="collection-card-wrapper">
      <div className="card-parent">
        <div className="card-child" style={backgroundImageStyle}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
