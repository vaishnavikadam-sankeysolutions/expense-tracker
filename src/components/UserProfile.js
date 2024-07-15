import React, { useState } from "react";
import "./static/UserProfile.css";

const UserProfile = ({ profile = {}, setProfile = () => {} }) => {
  const [name, setName] = useState(profile.name || "");
  const [balance, setBalance] = useState(profile.balance || 0);
  const [budget, setBudget] = useState(profile.budget || 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfile({ name, balance, budget });
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
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Current Balance</label>
          <input
            type="number"
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
          />
        </div>
        <div>
          <label>Monthly Budget</label>
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default UserProfile;
