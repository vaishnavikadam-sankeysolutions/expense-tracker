import React from "react";
import "./static/DeleteTransaction.css";

const DeleteTransaction = ({ transactions = [], deleteTransaction }) => {
  return (
    <div className="delete-transaction">
      <h2>Delete Transaction</h2>
      <ul>
        {transactions.length > 0 ? (
          transactions.map((transaction, index) => (
            <li key={index}>
              <span>{transaction.date}</span>
              <span>{transaction.category}</span>
              <span>${transaction.amount}</span>
              <button onClick={() => deleteTransaction(transaction.id)}>
                Delete
              </button>
            </li>
          ))
        ) : (
          <p>No transactions available</p>
        )}
      </ul>
    </div>
  );
};

export default DeleteTransaction;
