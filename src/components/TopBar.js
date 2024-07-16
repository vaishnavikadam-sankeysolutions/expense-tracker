import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faUser } from "@fortawesome/free-solid-svg-icons";
import "./static/TopBar.css";

const TopBar = ({ profile }) => {
  return (
    <div className="top-bar">
      
      <div className="user-info">
        <FontAwesomeIcon icon={faUser} />
        {/* <img src="./assets/User.jpg" alt="User" /> */}
        User:
        <span>{profile.name}</span>
      </div>
    </div>
  );
};

export default TopBar;
