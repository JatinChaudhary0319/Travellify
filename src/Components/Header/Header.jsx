import React, { useEffect, useState } from 'react';
import Background from './Background';

import '../Styles/Header.css';
import HeaderNav from './HeaderNav';
import Searchbar from './Searchbar';

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: 'none',
    color: state.isSelected ? 'red' : '#727272',
    padding: 10,
    cursor: 'pointer',
    background: state.isSelected ? 'white' : 'white',
    fontSize: '13px',
    textAlign: 'left',
    width: 120
  }),
  control: () => ({
    width: 150,
    display: 'flex',
    fontSize: '14px',
    marginTop: '10px',
    paddingLeft: '5px'
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
};

const Header = (props) => {
  const [experience, setExperience] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const changeExperience = (event) => {
    setExperience(event.target.value);
  };

  const {
    backgroundImagesData,
    navigationData,
    selectedCity,
    history
  } = props;

  return (
    <>
      <HeaderNav
        changeExperience={changeExperience}
        experience={experience}
        history={history}
        selectedCity={selectedCity}
        navigationData={navigationData}
      />
      <Background backgroundImagesData={backgroundImagesData} />
      <div className="search-bar-div">
        <div className="select-city-large">
          <i className="fas fa-map-marker" />
          <Searchbar
            style={customStyles}
            history={props.history}
            selectedCity={props.selectedCity}
          />
        </div>
        <div className="select-experience-large">
          <input
            type="text"
            placeholder="Search for experiences"
            onChange={changeExperience}
            value={experience}
          />
          <i className="fas fa-search" />
        </div>
        <button id="go">Let's Go</button>
      </div>
    </>
  );
};

export default Header;