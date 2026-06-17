import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

function ExpenseList() {
  const { transactions, deleteTransaction } = useContext(ExpenseContext);

  return (
    <div>
      <h3>Transactions</h3>
      {transactions.map((t) => (
        <div key={t.id}>
          {t.text} - ₹{t.amount} ({t.category})
          <button onClick={() => deleteTransaction(t.id)}>X</button>
        </div>
      ))}
    </div>
  );
}

export default ExpenseList;