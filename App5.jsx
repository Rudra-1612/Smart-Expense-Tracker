import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";
import Summary from "./components/Summary";
import ChartComponent from "./components/ChartComponent";

function App() {
  return (
    <div className="container">
      <h1>💰 Expense Tracker</h1>
      <Summary />
      <AddExpense />
      <ChartComponent />
      <ExpenseList />
    </div>
  );
}

export default App;