import React, { useState, useEffect } from "react";
import CityRoutes from "./CityRoutes";
import logo from "./Components/Images/travellify-new.png";

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  const updateWindowDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowDimensions);
    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  const mobileTablet = width <= 1100;

  if (mobileTablet) {
    return (
      <div className="mobile-tablet">
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
            src={logo}
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
        <p>
          Currently, we're not supporting Mobile & Tablets{" "}
          <span role="img" aria-label="Warn">
            🙏
          </span>
        </p>
      </div>
    );
  } else {
    return <CityRoutes />;
  }
}

export default App;
