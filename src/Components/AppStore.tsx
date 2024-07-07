import React, { useEffect, useState } from "react";

import Download from "./Download";
import Footer from "./footer";
import HeaderNav from "./Header/HeaderNav";
import TopCities from "./TopCities/TopCities";

const AppStore = (props) => {
  const [experience, setExperience] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const changeExperience = (event) => {
    setExperience(event.target.value);
  };

  const { navigationData, selectedCity, history } = props;

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <HeaderNav
        changeExperience={changeExperience}
        experience={experience}
        history={history}
        selectedCity={selectedCity}
        navigationData={navigationData}
      />
      <div style={{ paddingTop: "110px" }}>
        <Download />
      </div>
      <TopCities />
      <Footer />
    </div>
  );
};

export default AppStore;
