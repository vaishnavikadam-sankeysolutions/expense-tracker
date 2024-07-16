import React from "react";
import "./static/CreditCardStyle.css"; 

const CreditCardStyle = ({ balance }) => {
  
  const formattedBalance = Number(balance).toFixed(2);

  return (
    <div className="credit-card">
      <div className="credit-card-header">
        <h3>My Bank</h3> 
      </div>
      <div className="credit-card-body">
        <p className="balance-label">Current Balance</p>
        <p className="balance-amount">${formattedBalance}</p>
      </div>
      <div className="credit-card-footer">
        <p>Credit Card</p> 
      </div>
    </div>
  );
};

export default CreditCardStyle;
