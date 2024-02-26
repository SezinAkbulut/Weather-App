import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./style/landing.css";

function Landing() {
  return (
    <div className="landing-container">
      <div className="landing-content">
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

      <img src="images/Vector2.png" alt="" />
      <div className="additional-content">
        <div className="additional-items">
          <div className="additional-item">
            <h4>Personalized</h4>
            <p>
              A personalized weather report that shows the best time and place
              for couples to enjoy outdoor activities based on their preferences
              and location.
            </p>
          </div>
          <div className="additional-item">
            <h4>Gallery</h4>
            <p>
              A cloud gallery that allows users to upload and share their photos
              and videos of the sky and the weather with other users and get
              feedback and tips.
            </p>
          </div>
          <div className="additional-item">
            <h4>Mood Tracker</h4>
            <p>
              A mood tracker that analyzes the user’s mood based on the weather
              and suggests activities, music, or quotes to cheer them up or calm
              them down.
            </p>
          </div>
        </div>

        <div className="testimonials-content">
          <div className="landing-image">
            <img src="/images/mock-up-detail.png" alt="" />
          </div>

          <div className="testimonials-text">
            <h1 className="header-text">
              Plan Your Outdoor <br /> Activities with Ease
            </h1>
            <p className="text-2">
              Get notified before rain stops. <br /> Plan your outdoor
              activities
            </p>
            <div className="text-group">
              <p className="gray-texts">
                Share your weather stories and photos.
              </p>
              <p className="gray-texts">
                Custom weather alerts and notifications.
              </p>
              <p className="gray-texts">
                Smart weather integrations for your home
              </p>
            </div>
          </div>
        </div>
        <img className="icon2" src="images/Vector -BG-.png" alt="" />
      </div>

      <div className="testimonials-cards">
        <div className="card">
          <div className="card-content">
            <p>
              Juniper is a great app for checking the weather. It's easy to use
              and has a beautiful interface. I love how it shows me the cloud
              patterns and predicts the weather for the next few days. It's like
              having a personal meteorologist in my pocket.
            </p>
            <br />
            <div className="card-info">
              <img src="images/Ellipse 35.png" alt="" />
              <div className="text-info">
                <p className="testimonials-name">Priyanka</p>
                <p className="customer">Happy Customer</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <p>
              I was sceptical about Juniper at first, but I'm glad I gave it a
              try. It's a whole new way of looking at the sky. It uses cloud
              technology to give me accurate and reliable forecasts, and it also
              has some fun features like cloud art and trivia. It's a must-have
              app for anyone who loves nature.
            </p>
            <div className="card-info">
              <img src="images/Ellipse 35-2.png" alt="" />
              <div className="text-info">
                <p className="testimonials-name">Jack</p>
                <p className="customer">Happy Customer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="context">
        <h2 className="header-text">
          The Weather App That Brings <br /> You Wonder
        </h2>
        <p className="text-2">
          We care about your happiness and well-being, no matter the weather
        </p>
        <br />
        <div className="context-info">
          <p>How can I customize the Juniper app to suit my needs?</p>
          <hr />
          <p>How can I share my weather updates with my partner?</p>
          <hr />
          <p>How long is the free trial for the Juniper app?</p>
          <hr />
          <p>What happens after the free trial ends?</p>
          <hr />
        </div>
        <br /> <br />
        <div className="download">
          <p>Experience the weather like never before</p>
          <h3>
            The Only Weather App You Need to Stay <br /> Connected with Nature
            and Each Other
          </h3>
          <br />
          <button>DOWNLOAD NOW</button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
