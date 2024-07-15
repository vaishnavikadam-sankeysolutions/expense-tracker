// import React, { useState } from "react";
// import Navbar from "./components/Navbar";
// import TopBar from "./components/TopBar";
// import UserProfile from "./components/UserProfile";
// import Home from "./components/Home";
// import TransactionList from "./components/TransactionList";
// import AddTransaction from "./components/AddTransaction";
// import EditTransaction from "./components/EditTransaction";
// import DeleteTransaction from "./components/DeleteTransaction";
// import "./App.css";

// function App() {
//   const [profile, setProfile] = useState({ name: "", balance: 0, budget: 0 });
//   const [transactions, setTransactions] = useState([]);

//   const addTransaction = (transaction) => {
//     setTransactions([...transactions, { ...transaction, id: Date.now() }]);
//     if (transaction.type === "income") {
//       setProfile({ ...profile, balance: profile.balance + transaction.amount });
//     } else {
//       setProfile({ ...profile, balance: profile.balance - transaction.amount });
//     }
//     console.log(transaction);
//     console.log(profile);
//   };

//   const editTransaction = (updatedTransaction) => {
//     setTransactions(
//       transactions.map((transaction) =>
//         transaction.id === updatedTransaction.id
//           ? updatedTransaction
//           : transaction
//       )
//     );
//   };

//   const deleteTransaction = (id) => {
//     const transactionToDelete = transactions.find(
//       (transaction) => transaction.id === id
//     );
//     if (transactionToDelete.type === "income") {
//       setProfile({
//         ...profile,
//         balance: profile.balance - transactionToDelete.amount,
//       });
//     } else {
//       setProfile({
//         ...profile,
//         balance: profile.balance + transactionToDelete.amount,
//       });
//     }
//     setTransactions(
//       transactions.filter((transaction) => transaction.id !== id)
//     );
//   };

//   return (
//     <div className="app">
//       <Navbar />
//       <TopBar />
//       <div className="main-content">
//         <UserProfile profile={profile} setProfile={setProfile} />
//         <Home
//           balance={profile.balance}
//           budget={profile.budget}
//           expenses={transactions.filter((t) => t.type === "expense")}
//         />
//         <TransactionList transactions={transactions} />
//         <AddTransaction addTransaction={addTransaction} />
//         <EditTransaction
//           transaction={transactions[0]}
//           editTransaction={editTransaction}
//         />
//         <DeleteTransaction
//           transactions={transactions}
//           deleteTransaction={deleteTransaction}
//         />
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import UserProfile from "./components/UserProfile";
import Home from "./components/Home";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import EditTransaction from "./components/EditTransaction";
import ViewTransaction from "./components/ViewTransaction";
import DeleteTransaction from "./components/DeleteTransaction";
import "./App.css";

function App() {
  const [profile, setProfile] = useState({ name: "", balance: 0, budget: 0 });
  const [transactions, setTransactions] = useState([]);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [mode, setMode] = useState(""); // "view" or "edit"

  const addTransaction = (transaction) => {
    setTransactions([...transactions, { ...transaction, id: Date.now() }]);
    if (transaction.type === "income") {
      setProfile({ ...profile, balance: profile.balance + transaction.amount });
    } else {
      setProfile({ ...profile, balance: profile.balance - transaction.amount });
    }
  };

  const updateTransaction = (updatedTransaction) => {
    setTransactions(
      transactions.map((transaction) =>
        transaction.id === updatedTransaction.id
          ? updatedTransaction
          : transaction
      )
    );
    setMode("");
    setSelectedTransaction(null);
  };

  const deleteTransaction = (id) => {
    const transactionToDelete = transactions.find(
      (transaction) => transaction.id === id
    );
    if (transactionToDelete.type === "income") {
      setProfile({
        ...profile,
        balance: profile.balance - transactionToDelete.amount,
      });
    } else {
      setProfile({
        ...profile,
        balance: profile.balance + transactionToDelete.amount,
      });
    }
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
    setMode("");
    setSelectedTransaction(null);
  };

  const viewTransaction = (id) => {
    const transaction = transactions.find(
      (transaction) => transaction.id === id
    );
    setSelectedTransaction(transaction);
    setMode("view");
  };

  const editTransaction = (id) => {
    const transaction = transactions.find(
      (transaction) => transaction.id === id
    );
    setSelectedTransaction(transaction);
    setMode("edit");
  };

  return (
    <div className="app">
      <Navbar />
      <TopBar />
      <div className="main-content">
        <UserProfile profile={profile} setProfile={setProfile} />
        <Home
          balance={profile.balance}
          budget={profile.budget}
          expenses={transactions.filter((t) => t.type === "expense")}
        />
        <TransactionList
          transactions={transactions}
          viewTransaction={viewTransaction}
          editTransaction={editTransaction}
          deleteTransaction={deleteTransaction}
        />
        {mode === "view" && selectedTransaction && (
          <ViewTransaction transaction={selectedTransaction} />
        )}

        {mode === "edit" && selectedTransaction && (
          <EditTransaction
            transaction={selectedTransaction}
            updateTransaction={updateTransaction}
          />
        )}

        <AddTransaction addTransaction={addTransaction} />

        <DeleteTransaction
          transactions={transactions}
          deleteTransaction={deleteTransaction}
        />
      </div>
    </div>
  );
}

export default App;
