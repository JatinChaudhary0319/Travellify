import React, { useState } from "react";
import "./Styles/footer.css";
import TravellifyLogo from "./Images/travellify-new.png";
import Googlelogo from "./Images/gplus-connect.png";
import Twitterlogo from "./Images/twitter-connect.png";
import Facebooklogo from "./Images/fb-connect.png";
import Pinterestlogo from "./Images/pinterest-connect.png";
import Instagramlogo from "./Images/instagram-connect.png";
import { NavLink, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    changeUrl(selectedOption);
  };

  const changeUrl = (url) => {
    let path = url.replace(/ /g, "-").toLowerCase();
    navigate(`/cities/${path}`);
  };
  return (
    <div className="footer-wrap">
      <div className="footer-wrapper">
        <div className="column-one">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              height: "36px",
              gap: "10px",
            }}
          >
            <img
              src={TravellifyLogo}
              alt="Travellify"
              style={{ height: "36px", width: "36px" }}
            />
            Travellify
          </div>
          <p>
            Travellify is building the future of how we experience our cities.
          </p>
          <p
            style={{
              color: "#2980b9",
              fontSize: "14px",
            }}
          >
            Made with{" "}
            <span role="img" aria-label="love">
              ❤️
            </span>{" by "}
            <NavLink
              to="https://jatinchaudhary0319.github.io/Personal-Website/"
              target="_blank"
              style={{ fontSize: "20px", fontWeight: "500" }}
            >Jatin Chaudhary
            </NavLink>
          </p>
          <p>&copy; Travellify Inc.</p>
        </div>
        <div className="column-two">
          <h3>Cities</h3>
          <ul>
            <li onClick={() => handleChange("New York")}>New York</li>
            <li onClick={() => handleChange("Las Vegas")}>Las Vegas</li>
            <li onClick={() => handleChange("Rome")}>Rome</li>
            <li onClick={() => handleChange("Paris")}>Paris</li>
            <li onClick={() => handleChange("London")}>London</li>
            <li onClick={() => handleChange("Dubai")}>Dubai</li>
            <li onClick={() => handleChange("Barcelona")}>Barcelona</li>
            <li>+8 more</li>
          </ul>
        </div>
        <div className="column-three">
          <h3>About us</h3>
          <ul>
            <li>About Travellify</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Privacy Policy</li>
            <li>Terms of Usage</li>
          </ul>
        </div>
        <div className="column-four">
          <h3>Contact</h3>
          <p>Feel free to get in touch via email:</p>
          <p style={{ color: "#4fc3f7", cursor: "pointer" }}>
            xyz.abc@gmail.com
          </p>
          <div className="social-media-contact">
            <img
              src={Googlelogo}
              className="social-connect"
              alt="Connect with us"
            />
            <img
              src={Twitterlogo}
              className="social-connect"
              alt="Connect with us"
            />
            <img
              src={Facebooklogo}
              className="social-connect"
              alt="Connect with us"
            />
            <img
              src={Pinterestlogo}
              className="social-connect"
              alt="Connect with us"
            />
            <img
              src={Instagramlogo}
              className="social-connect"
              alt="Connect with us"
              style={{ width: "25px", paddingBottom: "2px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
