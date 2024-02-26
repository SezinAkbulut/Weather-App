import React from "react";
import "./style/landing.css";

function Landing() {
  return (
    <div className="landing-container">
      <div className="landing-text">
        <h1>
          Your Live
          <br />
          Forecaster
        </h1>
        <p className="white-text">
          Together We Forecast: Building Dreams, <br /> One Day at a Time!
        </p>
        <p className="gray-text">
          1 million People like you have purchased this product!
        </p>
        <div className="buttons">
          <button className="gray-button">TRY NOW</button>
          <button className="yellow-button">FREE TILL 26 JUN 2024</button>
        </div>
      </div>
      <div className="landing-image">
        <img src="/images/phone-mock-up.png" alt="" />
      </div>
    </div>
  );
}

export default Landing;
