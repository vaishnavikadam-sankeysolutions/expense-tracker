// import React, { useState } from "react";
// import "./static/UserProfile.css";

// const UserProfile = ({ profile = {}, setProfile = () => {} }) => {
//   const [name, setName] = useState(profile.name || "");
//   const [balance, setBalance] = useState(profile.balance || 0);
//   const [budget, setBudget] = useState(profile.budget || 0);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setProfile({ name, balance, budget });

//     setName("");
//     setBalance("");
//     setBudget("");

//     console.log("User gets created");
//   };

//   return (
//     <div className="user-profile">
//       <h2>User Profile</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Current Balance</label>
//           <input
//             type="number"
//             value={balance}
//             onChange={(e) => setBalance(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Monthly Budget</label>
//           <input
//             type="number"
//             value={budget}
//             onChange={(e) => setBudget(e.target.value)}
//           />
//         </div>
//         <button type="submit">Save</button>
//       </form>
//     </div>
//   );
// };

// export default UserProfile;

//

// import React, { useState } from "react";
// import "./static/UserProfile.css";

// const UserProfile = ({ profile = {}, setProfile = () => {} }) => {
//   const [name, setName] = useState(profile.name || "");
//   const [balance, setBalance] = useState(profile.balance || 0);
//   const [budget, setBudget] = useState(profile.budget || 0);
//   const [errors, setErrors] = useState({});

//   const validate = () => {
//     const newErrors = {};
//     if (!name) newErrors.name = "Name is required.";
//     if (balance <= 0) newErrors.balance = "Balance must be greater than zero.";
//     if (budget < 0) newErrors.budget = "Budget cannot be negative.";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       setProfile({ name, balance, budget });
//       setName("");
//       setBalance("");
//       setBudget("");
//       setErrors({});
//       console.log("User profile updated");
//     }
//   };

//   return (
//     <div className="user-profile">
//       <h2>User Profile</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           {errors.name && <p className="error">{errors.name}</p>}
//         </div>
//         <div>
//           <label>Current Balance</label>
//           <input
//             type="number"
//             value={balance}
//             onChange={(e) => setBalance(e.target.value)}
//           />
//           {errors.balance && <p className="error">{errors.balance}</p>}
//         </div>
//         <div>
//           <label>Monthly Budget</label>
//           <input
//             type="number"
//             value={budget}
//             onChange={(e) => setBudget(e.target.value)}
//           />
//           {errors.budget && <p className="error">{errors.budget}</p>}
//         </div>
//         <button type="submit">Save</button>
//       </form>
//     </div>
//   );
// };

// export default UserProfile;

import React, { useState } from "react";
import "./static/UserProfile.css";

const UserProfile = ({ profile = {}, setProfile = () => {} }) => {
  const [name, setName] = useState(profile.name || "");
  const [balance, setBalance] = useState(profile.balance || 0);
  const [budget, setBudget] = useState(profile.budget || 0);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!name) newErrors.name = "Name is required.";
    else if (!nameRegex.test(name))
      newErrors.name = "Name can only contain letters and spaces.";

    // Balance validation
    if (!balance) newErrors.balance = "Balance field cannot be empty";
    else if (balance <= 0)
      newErrors.balance = "Balance must be greater than zero.";

    // Budget validation
    if (!budget) newErrors.budget = "Budget field cannot be empty.";
    else if (budget <= 0)
      newErrors.budget = "Budget must be greater than zero.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setProfile({ name, balance, budget });
      setName("");
      setBalance("");
      setBudget("");
      setErrors({});
      console.log("User profile updated");
    }
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
    validate(); // Validate on change
  };

  const handleChangeBalance = (e) => {
    setBalance(e.target.value);
    validate(); // Validate on change
  };

  const handleChangeBudget = (e) => {
    setBudget(e.target.value);
    validate(); // Validate on change
  };

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={handleChangeName}
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div>
          <label>Current Balance</label>
          <input
            type="number"
            value={balance}
            onChange={handleChangeBalance}
            required
          />
          {errors.balance && <p className="error">{errors.balance}</p>}
        </div>
        <div>
          <label>Monthly Budget</label>
          <input
            type="number"
            value={budget}
            onChange={handleChangeBudget}
            required
          />
          {errors.budget && <p className="error">{errors.budget}</p>}
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default UserProfile;
