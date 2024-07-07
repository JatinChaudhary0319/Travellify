import React from 'react';
import '../Styles/travellify-picks.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PickedSlider from './PickedSlider';

const TopPicks = ({ pickedData, headline }) => {
    return (
      <div className="travellify-picks-wrapper">
        <div className="travellify-picks-nav">
          <div>
            <h1>{headline}</h1>
          </div>
          <div className="view-all">
            <h3>View All</h3>
            <i className="fas fa-arrow-right" />
          </div>
        </div>
        <hr
          style={{
            backgroundColor: '#ffbb58',
            width: '75px',
            height: '2px',
            border: 'none',
            marginTop: '0px',
            marginLeft: '0px',
            marginBottom: '20px'
          }}
        />
        <div className="top-picked-carousel-wrap">
          <PickedSlider pickedData={pickedData} />
        </div>
      </div>
    );
  };

export default TopPicks;
