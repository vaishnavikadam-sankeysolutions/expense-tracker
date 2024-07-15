import React from "react";
import "./static/ViewTransaction.css";

const ViewTransaction = ({ transaction }) => {
  return (
    <div className="view-transaction">
      <h2>View Transaction</h2>
      {transaction ? (
        <div>
          <p>
            <strong>Type:</strong> {transaction.type}
          </p>
          <p>
            <strong>Category:</strong> {transaction.category}
          </p>
          <p>
            <strong>Amount:</strong> ${transaction.amount}
          </p>
          <p>
            <strong>Date & Time:</strong> {transaction.date}
          </p>
          <p>
            <strong>Note:</strong> {transaction.note}
          </p>
          <p>
            <strong>Payee:</strong> {transaction.payee}
          </p>
        </div>
      ) : (
        <p>No transaction selected</p>
      )}
    </div>
  );
};

export default ViewTransaction;
