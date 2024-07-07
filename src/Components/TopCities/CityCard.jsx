const CityCard = ({ city, url, description }) => {
    const backgroundImageStyle = {
      backgroundImage: `url(${url})`
    };
  
    return (
      <div className="city-card-wrapper">
        <div className="city-card">
          <div className="city-card-img" style={backgroundImageStyle} />
          <div className="city-details">
            <div id="triangle" />
            <p>{city}</p>
            <div id="city-hidden">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default CityCard;