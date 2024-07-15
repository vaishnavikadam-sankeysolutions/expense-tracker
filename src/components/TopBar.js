import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faSearch } from "@fortawesome/free-solid-svg-icons";
import "./static/TopBar.css";

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="search-bar">
        <FontAwesomeIcon icon={faSearch} />
        <input type="text" placeholder="Search" />
      </div>
      <div className="user-info">
        <FontAwesomeIcon icon={faBell} />
        <img src="user-icon.jpg" alt="User" />
        <span></span>
      </div>
    </div>
  );
};

export default TopBar;
