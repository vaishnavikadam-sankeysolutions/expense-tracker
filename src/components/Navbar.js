// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHome,
//   faUser,
//   faList,
//   faPlus,
//   faEdit,
//   faTrash,
// } from "@fortawesome/free-solid-svg-icons";
// import "./Navbar.css";

// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <h1 className="logo">Track.</h1>
//       <ul>
//         <li>
//           <a href="#profile">
//             <FontAwesomeIcon icon={faUser} />
//             <span>Profile</span>
//           </a>
//         </li>
//         <li>
//           <a href="#home">
//             <FontAwesomeIcon icon={faHome} />
//             <span>Home</span>
//           </a>
//         </li>
//         <li>
//           <a href="#transactions">
//             <FontAwesomeIcon icon={faList} />
//             <span>Transactions</span>
//           </a>
//         </li>
//         <li>
//           <a href="#add-transaction">
//             <FontAwesomeIcon icon={faPlus} />
//             <span>Add Transaction</span>
//           </a>
//         </li>
//         <li>
//           <a href="#edit-transaction">
//             <FontAwesomeIcon icon={faEdit} />
//             <span>Edit Transaction</span>
//           </a>
//         </li>
//         <li>
//           <a href="#delete-transaction">
//             <FontAwesomeIcon icon={faTrash} />
//             <span>Delete Transaction</span>
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faList,
  faPlus,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import "./static/Navbar.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="logo">Expense Tracker</h1>
      <ul>
        <li>
          <a href="#profile">
            <FontAwesomeIcon icon={faUser} />
            <span>Profile</span>
          </a>
        </li>
        <li>
          <a href="#home">
            <FontAwesomeIcon icon={faHome} />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="#transactions">
            <FontAwesomeIcon icon={faList} />
            <span>Transactions</span>
          </a>
        </li>
        <li>
          <a href="#add-transaction">
            <FontAwesomeIcon icon={faPlus} />
            <span>Add Transaction</span>
          </a>
        </li>
        <li>
          <a href="#edit-transaction">
            <FontAwesomeIcon icon={faEdit} />
            <span>Edit Transaction</span>
          </a>
        </li>
        <li>
          <a href="#delete-transaction">
            <FontAwesomeIcon icon={faTrash} />
            <span>Delete Transaction</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
