import React from "react";
import CreditCardStyle from "./CreditCardStyle"; // Import the CreditCardStyle component
import "./static/Home.css";

const Home = ({ balance = 0, budget = 0, expenses = [] }) => {
  const totalExpenses = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );
  const warning = totalExpenses > budget;

  return (
    <div className="home">
      <CreditCardStyle balance={balance} />{" "}
      {/* Display balance using CreditCardStyle */}
      {warning && (
        <p className="warning-text">
          Warning: You have exceeded your monthly budget!
        </p>
      )}
      <br /> <br />
      <div className="top-expenses">
        <h3>Top Expenses</h3>
        <ul>
          {expenses.slice(0, 5).map((expense, index) => (
            <li key={index}>
              {expense.category}: ${expense.amount}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
