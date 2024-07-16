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
      const balanceAdjustment =
        previousTransaction.type === "income"
          ? -previousTransaction.amount
          : previousTransaction.amount;
      setProfile({
        ...profile,
        balance:
          profile.balance + balanceAdjustment + updatedTransaction.amount,
      });
    }
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
