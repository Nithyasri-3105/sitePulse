import { useNavigate } from "react-router-dom";

function BudgetOverview() {
  const navigate = useNavigate();

  const estimatedBudget = 1000000;
  const totalExpenses = 650000;
  const remainingBudget = estimatedBudget - totalExpenses;

  return (
    <div>
      <h2>Budget Overview</h2>
      <p>Estimated Budget: ₹{estimatedBudget}</p>
      <p>Total Expenses: ₹{totalExpenses}</p>
      <p>Remaining Budget: ₹{remainingBudget}</p>

      <button onClick={() => navigate("/client/gallery")}>Previous</button>
      <button onClick={() => navigate("/client/dashboard")}>Dashboard</button>
      <button onClick={() => navigate("/client/complaints")}>Next: Complaints</button>
    </div>
  );
}

export default BudgetOverview;