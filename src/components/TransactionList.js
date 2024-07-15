// import React from "react";
// import "./static/TransactionList.css";

// const TransactionList = ({ transactions = [] }) => {
//   return (
//     <div className="transaction-list">
//       <h2>Transactions</h2>
//       <ul>
//         {transactions.length > 0 ? (
//           transactions.map((transaction, index) => (
//             <li key={index}>
//               <span>{transaction.date}</span>
//               <span>{transaction.category}</span>
//               <span>${transaction.amount}</span>
//             </li>
//           ))
//         ) : (
//           <p>No transactions available</p>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default TransactionList;

import React from "react";
import "./static/TransactionList.css";

const TransactionList = ({ transactions = [], viewTransaction, editTransaction, deleteTransaction }) => {
  return (
    <div className="transaction-list">
      <h2>Transactions</h2>
      <ul>
        {transactions.length > 0 ? (
          transactions.map((transaction, index) => (
            <li key={index}>
              <span>{transaction.date}</span>
              <span>{transaction.category}</span>
              <span>${transaction.amount}</span>
              <button onClick={() => viewTransaction(transaction.id)}>View</button>
              <button onClick={() => editTransaction(transaction.id)}>Edit</button>
              <button onClick={() => deleteTransaction(transaction.id)}>Delete</button>
            </li>
          ))
        ) : (
          <p>No transactions available</p>
        )}
      </ul>
    </div>
  );
};

export default TransactionList;

