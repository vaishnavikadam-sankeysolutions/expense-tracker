import React from "react";
import "./static/Home.css";

const Home = ({ balance = 0, budget = 0, expenses = [] }) => {
  const totalExpenses = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );
  const warning = totalExpenses > budget;

  return (
    <div className="home">
      <div className={`balance-card ${warning ? "warning" : ""}`}>
        <h3>Current Balance</h3>
        <p>${balance}</p>
      </div>
      {warning && (
        <p className="warning-text">
          Warning: You have exceeded your monthly budget!
        </p>
      )}
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
