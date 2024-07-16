// import React, { useState } from "react";
// import "./static/AddTransaction.css";

// const AddTransaction = ({ addTransaction }) => {
//   const [type, setType] = useState("expense");
//   const [category, setCategory] = useState("");
//   const [amount, setAmount] = useState("");
//   const [date, setDate] = useState("");
//   const [note, setNote] = useState("");
//   const [payee, setPayee] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newTransaction = {
//       type,
//       category,
//       amount: parseFloat(amount),
//       date,
//       note,
//       payee,
//     };
//     addTransaction(newTransaction);

//     setType("expense");
//     setCategory("");
//     setAmount("");
//     setDate("");
//     setNote("");
//     setPayee("");
//   };

//   return (
//     <div className="add-transaction">
//       <h2>Add Transaction</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Type</label>
//           <select
//             value={type}
//             onChange={(e) => setType(e.target.value)}
//             required
//           >
//             <option value="income">Income</option>
//             <option value="expense">Expense</option>
//           </select>
//         </div>
//         <div>
//           <label>Category</label>
//           <select
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}

//           >
//             <option value="clothing">Clothing</option>
//             <option value="food">Food</option>
//             <option value="travel">Travel</option>
//             <option value="stationary">Stationary</option>
//             <option value="electronics">Electronics</option>
//           </select>
//         </div>
//         <div>
//           <label>Amount</label>
//           <input
//             type="number"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Date & Time</label>
//           <input
//             type="datetime-local"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Note</label>
//           <input
//             type="text"
//             value={note}
//             onChange={(e) => setNote(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Payee</label>
//           <input
//             type="text"
//             value={payee}
//             onChange={(e) => setPayee(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Add Transaction</button>
//       </form>
//     </div>
//   );
// };

// export default AddTransaction;

import React, { useState } from "react";
import "./static/AddTransaction.css";

const AddTransaction = ({ addTransaction }) => {
  const [type, setType] = useState("expense");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");
  const [payee, setPayee] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      type,
      category,
      amount: parseFloat(amount),
      date,
      note,
      payee,
    };
    addTransaction(newTransaction);

    setType("expense");
    setCategory("Select category");
    setAmount("");
    setDate("");
    setNote("");
    setPayee("");
  };

  return (
    <div className="add-transaction">
      <h2>Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        {type === "expense" && (
          <div>
            <label>Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              // required
            >
              <option value="">Select Category</option>
              <option value="clothing">Clothing</option>
              <option value="food">Food</option>
              <option value="travel">Travel</option>
              <option value="stationary">Stationary</option>
              <option value="electronics">Electronics</option>
            </select>
          </div>
        )}
        <div>
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Date & Time</label>
          <input
            type="datetime-local"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Note</label>
          <input
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Payee</label>
          <input
            type="text"
            value={payee}
            onChange={(e) => setPayee(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
