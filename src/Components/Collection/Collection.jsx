import React from 'react';
import '../Styles/Collections.css';
import CollectionCard from './CollectionCard';

const Collection = ({ collectionsData }) => (
  <div>
    <div className="collections-wrapper">
      <h1>Our Collections</h1>
      <hr
        style={{
          backgroundColor: '#ffbb58',
          width: '75px',
          height: '2px',
          border: 'none',
          marginTop: '0px',
          marginLeft: '0px'
        }}
      />
    </div>
    <div className="cards-wrapper">
      {collectionsData &&
        collectionsData.map(({ url, id, description }) => (
          <CollectionCard key={id} url={url} description={description} />
        ))}
    </div>
  </div>
);

export default Collection;
