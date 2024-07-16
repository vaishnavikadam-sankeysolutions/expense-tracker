import React, { useState, useEffect } from "react";
import "./static/EditTransaction.css";

const EditTransaction = ({ transaction, updateTransaction }) => {
  const [type, setType] = useState(transaction.type || "expense");
  const [category, setCategory] = useState(transaction.category || "");
  const [amount, setAmount] = useState(transaction.amount || 0);
  const [date, setDate] = useState(transaction.date || "");
  const [note, setNote] = useState(transaction.note || "");
  const [payee, setPayee] = useState(transaction.payee || "");

  useEffect(() => {
    if (transaction) {
      setType(transaction.type);
      setCategory(transaction.category);
      setAmount(transaction.amount);
      setDate(transaction.date);
      setNote(transaction.note);
      setPayee(transaction.payee);
    }
  }, [transaction]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTransaction = {
      ...transaction,
      type,
      category,
      amount: parseFloat(amount),
      date,
      note,
      payee,
    };
    updateTransaction(updatedTransaction);

    setType("expense");
    setCategory("Select category");
    setAmount("");
    setDate("");
    setNote("");
    setPayee("");
  };

  return (
    <div className="edit-transaction">
      <h2>Edit Transaction</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Type</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <div>
          <label>Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="clothing">Clothing</option>
            <option value="food">Food</option>
            <option value="travel">Travel</option>
            <option value="stationary">Stationary</option>
            <option value="electronics">Electronics</option>
          </select>
        </div>
        <div>
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div>
          <label>Date & Time</label>
          <input
            type="datetime-local"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label>Note</label>
          <input
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
        <div>
          <label>Payee</label>
          <input
            type="text"
            value={payee}
            onChange={(e) => setPayee(e.target.value)}
          />
        </div>
        <button type="submit">Update Transaction</button>
      </form>
    </div>
  );
};

export default EditTransaction;
