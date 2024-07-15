// import React, { useState, useEffect } from "react";
// import "./static/EditTransaction.css";

// const EditTransaction = ({ transaction = {}, editTransaction }) => {
//   const [type, setType] = useState(transaction.type || 'expense');
//   const [category, setCategory] = useState(transaction.category || '');
//   const [amount, setAmount] = useState(transaction.amount || 0);
//   const [date, setDate] = useState(transaction.date || '');
//   const [note, setNote] = useState(transaction.note || '');
//   const [payee, setPayee] = useState(transaction.payee || '');

//   useEffect(() => {
//     setType(transaction.type || 'expense');
//     setCategory(transaction.category || '');
//     setAmount(transaction.amount || 0);
//     setDate(transaction.date || '');
//     setNote(transaction.note || '');
//     setPayee(transaction.payee || '');
//   }, [transaction]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const updatedTransaction = {
//       ...transaction,
//       type,
//       category,
//       amount: parseFloat(amount),
//       date,
//       note,
//       payee,
//     };
//     editTransaction(updatedTransaction);

//     // Clear the input fields
//     setType('expense');
//     setCategory('');
//     setAmount('');
//     setDate('');
//     setNote('');
//     setPayee('');
//   };

//   return (
//     <div className="edit-transaction">
//       <h2>Edit Transaction</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Type</label>
//           <select value={type} onChange={(e) => setType(e.target.value)}>
//             <option value="income">Income</option>
//             <option value="expense">Expense</option>
//           </select>
//         </div>
//         <div>
//           <label>Category</label>
//           <input
//             type="text"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Amount</label>
//           <input
//             type="number"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Date & Time</label>
//           <input
//             type="datetime-local"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Note</label>
//           <input
//             type="text"
//             value={note}
//             onChange={(e) => setNote(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Payee</label>
//           <input
//             type="text"
//             value={payee}
//             onChange={(e) => setPayee(e.target.value)}
//           />
//         </div>
//         <button type="submit">Edit Transaction</button>
//       </form>
//     </div>
//   );
// };

// export default EditTransaction;

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
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
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
