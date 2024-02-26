import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./style/header.css";

function Header() {
  return (
    <div className="App">
      <nav>
        <ul className="nav-container">
          <a href="/">
            <li className="left-item">WEATHER APP</li>
          </a>
          <div className="right-items">
            <li>Home</li>
            <li>Info</li>
            <li>Shop</li>
            <li>TOS</li>
            <li>
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
