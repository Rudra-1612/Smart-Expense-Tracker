import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

function Summary() {
  const { transactions } = useContext(ExpenseContext);

  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter((t) => t.amount < 0)
    .reduce((acc, t) => acc + t.amount, 0);

  return (
    <div>
      <h3>Income: ₹{income}</h3>
      <h3>Expense: ₹{Math.abs(expense)}</h3>
      <h3>Balance: ₹{income + expense}</h3>
    </div>
  );
}

export default Summary;