import { useState, useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

function AddExpense() {
  const { addTransaction } = useContext(ExpenseContext);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTx = {
      id: Date.now(),
      text,
      amount: +amount,
      category,
    };

    addTransaction(newTx);
    setText("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter description"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select onChange={(e) => setCategory(e.target.value)}>
        <option>Food</option>
        <option>Travel</option>
        <option>Bills</option>
        <option>Shopping</option>
      </select>

      <button>Add</button>
    </form>
  );
}

export default AddExpense;