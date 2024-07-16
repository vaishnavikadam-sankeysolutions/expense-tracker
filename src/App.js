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
  const [mode, setMode] = useState("");

  const addTransaction = (transaction) => {
    const transactionAmount = parseFloat(transaction.amount); // Ensure amount is treated as a number
    setTransactions([...transactions, { ...transaction, id: Date.now() }]);
    if (transaction.type === "income") {
      setProfile({ ...profile, balance: profile.balance + transactionAmount });
    } else {
      setProfile({ ...profile, balance: profile.balance - transactionAmount });
    }
  };

  const updateTransaction = (updatedTransaction) => {
    const transactionAmount = parseFloat(updatedTransaction.amount); // Ensure amount is treated as a number
    const updatedTransactions = transactions.map((transaction) =>
      transaction.id === updatedTransaction.id
        ? updatedTransaction
        : transaction
    );
    setTransactions(updatedTransactions);

    const previousTransaction = transactions.find(
      (transaction) => transaction.id === updatedTransaction.id
    );

    if (previousTransaction) {
      const previousAmount = parseFloat(previousTransaction.amount);
      const balanceAdjustment =
        previousTransaction.type === "income"
          ? -previousAmount
          : previousAmount;
      setProfile({
        ...profile,
        balance:
          profile.balance +
          balanceAdjustment +
          (updatedTransaction.type === "income"
            ? transactionAmount
            : -transactionAmount),
      });
    }
  };

  const deleteTransaction = (id) => {
    const transactionToDelete = transactions.find(
      (transaction) => transaction.id === id
    );
    const transactionAmount = parseFloat(transactionToDelete.amount); // Ensure amount is treated as a number
    if (transactionToDelete.type === "income") {
      setProfile({
        ...profile,
        balance: profile.balance - transactionAmount,
      });
    } else {
      setProfile({
        ...profile,
        balance: profile.balance + transactionAmount,
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
      <TopBar profile={profile} />
      <div className="main-content">
        <div id="profile">
          <UserProfile profile={profile} setProfile={setProfile} />
        </div>
        <div id="home">
          <Home
            balance={profile.balance}
            budget={profile.budget}
            expenses={transactions.filter((t) => t.type === "expense")}
          />
        </div>
        <div id="transactions">
          <TransactionList
            transactions={transactions}
            viewTransaction={viewTransaction}
            editTransaction={editTransaction}
            deleteTransaction={deleteTransaction}
          />
        </div>
        {mode === "view" && selectedTransaction && (
          <ViewTransaction transaction={selectedTransaction} />
        )}
        {mode === "edit" && selectedTransaction && (
          <EditTransaction
            transaction={selectedTransaction}
            updateTransaction={updateTransaction}
          />
        )}
        <div id="add-transaction">
          <AddTransaction addTransaction={addTransaction} />
        </div>

        <div id="delete-transaction">
          <DeleteTransaction
            transactions={transactions}
            deleteTransaction={deleteTransaction}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
