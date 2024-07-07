import React from "react";
import { Link, NavLink } from "react-router-dom";

import avatar from "../Images/avatar.png";
import Logo from "../Images/travellify-new.png";
import MobileApp from "../Images/mobile-app.gif";

import Searchbar from "./Searchbar";
import "../Styles/Header.css";

const smallSearchbar = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "none",
    color: state.isSelected ? "red" : "#727272",
    padding: 10,
    cursor: "pointer",
    background: state.isSelected ? "white" : "white",
    fontSize: "13px",
    textAlign: "left",
    paddingLeft: "20px",
    width: 150,
  }),
  control: () => ({
    width: 150,
    display: "flex",
    fontSize: "11px",
    marginLeft: "15px",
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
};

const HeaderNav = ({
  navigationData = [
    { id: 1, name: "Travellify Picks" },
    { id: 2, name: "Best Sellers" },
    { id: 3, name: "Abu Dhabi City Tours" },
    { id: 4, name: "Amsterdam Attractions" },
    { id: 5, name: "Burj Khalifa" },
  ],
  selectedCity,
  history,
  changeExperience,
  experience,
}) => {
  // const { navigationData } = props;

  return (
    <div className="header-wrap">
      <div className="header-wrapper navbar-fixed-top">
        <div className="header-left">
          <div className="nav">
            <div className="first-line">
              <NavLink to="/">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "36px",
                    gap: "10px",
                  }}
                >
                  <img
                    src={Logo}
                    alt="Travellify"
                    style={{ height: "36px", width: "36px" }}
                  />
                  <p
                    style={{
                      fontSize: "24px",
                      textDecoration: "none",
                    }}
                  >
                    Travellify
                  </p>
                </div>
              </NavLink>
              <div className="select-city">
                <Searchbar
                  style={smallSearchbar}
                  history={history}
                  selectedCity={selectedCity}
                />
              </div>
              <div className="select-experience">
                <input
                  type="text"
                  placeholder="Search for experiences"
                  onChange={changeExperience}
                  value={experience}
                />
                <i className="fas fa-search" />
              </div>
            </div>
            <div className="second-line">
              <div className="best-picked">
                {navigationData &&
                  navigationData.map(({ id, name }) => <p key={id}>{name}</p>)}
              </div>
              <div className="support">
                <p>
                  24/7 Support{" "}
                  <span className="arrow-down">
                    {" "}
                    <i className="fas fa-angle-down" />
                  </span>
                </p>
                <p style={{ marginRight: "0px" }}>
                  English/USD
                  <span className="arrow-down">
                    {" "}
                    <i className="fas fa-angle-down" />
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="header-right">
            <a
              href="https://github.com/JatinChaudhary0319/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div
                className="sign-in"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "36px",
                  gap: "10px",
                }}
              >
                <div className="JatinChaudhary0319-img">
                  <img src={avatar} alt="JatinChaudhary0319" style={{ height: "24px", aspectRatio: "1/1"}}/>
                </div>
                <p style={{ color: "#ec1943", marginLeft: "5px" }}>
                  JatinChaudhary0319
                  <span className="arrow-down">
                    {" "}
                    <i className="fas fa-angle-down" />
                  </span>
                </p>
              </div>
            </a>
            <Link
              to={{ pathname: `/app` }}
              style={{
                textDecoration: "none",
              }}
            >
              <div className="download-app">
                <img src={MobileApp} id="mobile-app" alt="Download our App" />
                <p style={{ color: "#24a1b2" }}>Download App</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// HeaderNav.defaultProps = {
//   navigationData: [
//     { id: 1, name: "Travellify Picks" },
//     { id: 2, name: "Best Sellers" },
//     { id: 3, name: "Abu Dhabi City Tours" },
//     { id: 4, name: "Amsterdam Attractions" },
//     { id: 5, name: "Burj Khalifa" },
//   ],
// };

export default HeaderNav;
