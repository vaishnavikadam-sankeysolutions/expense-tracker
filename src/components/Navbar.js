import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faList,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import "./static/Navbar.css";

const Navbar = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navbar">
      <h1 className="logo">Expense Tracker</h1>
      <ul>
        <li onClick={() => handleScroll("profile")}>
          <FontAwesomeIcon icon={faUser} />
          <span>Profile</span>
        </li>
        <li onClick={() => handleScroll("home")}>
          <FontAwesomeIcon icon={faHome} />
          <span>Home</span>
        </li>
        <li onClick={() => handleScroll("transactions")}>
          <FontAwesomeIcon icon={faList} />
          <span>Transactions</span>
        </li>
        <li onClick={() => handleScroll("add-transaction")}>
          <FontAwesomeIcon icon={faPlus} />
          <span>Add Transaction</span>
        </li>
        <li onClick={() => handleScroll("delete-transaction")}>
          <FontAwesomeIcon icon={faTrash} />
          <span>Delete Transaction</span>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
