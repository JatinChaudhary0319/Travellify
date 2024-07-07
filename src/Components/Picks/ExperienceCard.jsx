import React, { useState } from 'react';

const ExperienceCard = (props) => {
  const [listed, setListed] = useState(false);

  const addtoWishlist = () => {
    setListed(prevListed => !prevListed);
  };

  const url = `url(${props.url})`;

  let style = {
    fontSize: '20px',
    position: 'absolute',
    right: '10px',
    top: '15px',
    fontWeight: listed ? '700' : '400',
    color: listed ? '#f43361' : 'white',
    transition: 'transform 0.3s ease-in-out'
  };

  return (
    <div className="exp-card">
      {props.showMore ? (
        <div className="show-more">
          <p>View All</p>
        </div>
      ) : (
        <>
          <div
            className="exp-card-img"
            style={{ backgroundImage: url }}
          >
            {props.cashback && (
              <div className="cashback">
                <p>{`${props.cashback}% CASHBACK`}</p>
              </div>
            )}
            {props.highlight && (
              <div className="cashback">
                <p>{props.highlight}</p>
              </div>
            )}
            <div className="exp-heart">
              <i
                className="far fa-heart"
                role="button"
                onClick={addtoWishlist}
                style={style}
              />
            </div>
          </div>
          <div className="exp-content-wrap">
            <div className="exp-info-wrap">
              {props.city ? (
                <>
                  <p id="exp-city">{props.city}</p>
                  <p id="exp-description">{props.description}</p>
                </>
              ) : (
                <>
                  <p id="exp-about">{props.about}</p>
                  <p id="exp-description">{props.description}</p>
                </>
              )}
            </div>
            <div>
              <div className="price-section">
                <div className="div">
                  {props.discount ? (
                    <div className="discount">
                      <p>
                        <span>
                          <i className="fas fa-gift" />
                        </span>
                        {`upto ${props.discount}% off`}
                      </p>
                    </div>
                  ) : (
                    <div className="discount" />
                  )}
                  <div className="ratings-section">
                    {props.stars ? (
                      <div className="stars">
                        <p id="stars-p">
                          {parseFloat(
                            Math.round(props.stars * 100) / 100
                          ).toFixed(1)}
                          <span id="star"> &#9733;</span>
                        </p>
                      </div>
                    ) : (
                      <div
                        style={{
                          width: '25px',
                          height: '20px',
                          borderRadius: '50%',
                          background:
                            'linear-gradient(340deg, #ffbb58, #f5c684)',
                          paddingTop: '3px'
                        }}
                      >
                        <p id="stars-p">
                          <span> &#9733;</span>
                        </p>
                      </div>
                    )}
                    {props.ratings ? (
                      props.ratings === 1 ? (
                        <p id="ratings">{`(${props.ratings} Rating)`}</p>
                      ) : (
                        <p id="ratings">{`(${props.ratings} Ratings)`}</p>
                      )
                    ) : (
                      <p id="ratings">Newly Arrived</p>
                    )}
                  </div>
                </div>
                <div className="price">
                  <p>from</p>
                  {props.lastPrice && props.city === 'DUBAI' ? (
                    <p id="last-price">{`${props.currency} ${props.lastPrice}`}</p>
                  ) : null}
                  {props.lastPrice && props.city !== 'DUBAI' ? (
                    <p id="last-price">{`${props.currency}${props.lastPrice}`}</p>
                  ) : null}
                  {props.currency === 'AED' ? (
                    <p id="price">{`${props.currency} ${props.price}`}</p>
                  ) : (
                    <p id="price">{`${props.currency}${props.price}`}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ExperienceCard;
