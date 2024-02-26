import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./style/footer.css";

function Footer() {
  return (
    <footer>
      <img className="vector" src="images/Group 94.png" alt="" />
      <div className="footer-content">
        <div className="footer-social">
          {/* Social Media Icons */}
          <a href="#">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>

        <div className="footer-pages">
          {/* Footer Pages */}
          <div className="footer-column">
            <h4>Pages</h4>
            <ul>
              <li>Home</li>
              <li>Shop</li>
              <li>IOS</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Platform</h4>
            <ul>
              <li>Android</li>
              <li>IOS</li>
              <li>Windows</li>
              <li>Mac OS</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li>Support request</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Subscribe</h4>
            <ul>
              <input placeholder="Enter your email"></input>
              <li>
                Join our newsletter to stay up to <br /> date on features and
                releases
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-app">
        <h2>WEATHER APP</h2>
        <button>GET NOW</button>
      </div>
    </footer>
  );
}

export default Footer;
