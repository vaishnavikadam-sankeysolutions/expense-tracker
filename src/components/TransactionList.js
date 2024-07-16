import React, { useState } from "react";
import "./static/TransactionList.css";

const TransactionList = ({
  transactions,
  viewTransaction,
  editTransaction,
  deleteTransaction,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to the first page on new search
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const filteredTransactions = transactions.filter(
    (transaction) =>
      transaction.type === "income" ||
      transaction.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedTransactions = filteredTransactions.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTransactions = sortedTransactions.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(sortedTransactions.length / itemsPerPage);

  return (
    <div className="transaction-list">
      <h3>Transactions</h3>
      <input
        type="text"
        placeholder="Search by category"
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-bar"
      />
      <ul>
        {currentTransactions.map((transaction) => (
          <li key={transaction.id}>
            <span>{new Date(transaction.date).toLocaleDateString()}</span>
            {/* Conditionally render category */}
            {transaction.type === "expense" && (
              <span>{transaction.category}</span>
            )}
            <span>{transaction.amount}</span>
            <button onClick={() => viewTransaction(transaction.id)}>
              View
            </button>
            <button onClick={() => editTransaction(transaction.id)}>
              Edit
            </button>
            <button onClick={() => deleteTransaction(transaction.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TransactionList;
