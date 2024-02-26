import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./style/header.css";

function Header() {
  return (
    <div className="Header">
      <nav>
        <ul className="nav-container">
          <a href="/">
            <li className="left-item nav-item">WEATHER APP</li>
          </a>
          <div className="right-items">
            <li className="nav-item">Home</li>
            <li className="nav-item">Info</li>
            <li className="nav-item">Shop</li>
            <li className="nav-item">TOS</li>
            <li className="nav-item search">
              <a href="#">
                <FontAwesomeIcon icon={faSearch} />
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
