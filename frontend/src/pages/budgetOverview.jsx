import { useNavigate } from "react-router-dom";

function BudgetOverview() {
  const navigate = useNavigate();

  const estimatedBudget = 1000000;
  const totalExpenses = 650000;
  const remainingBudget = estimatedBudget - totalExpenses;

  return (
     <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl mx-auto">

      <h2 className="text-3xl font-bold text-blue-700 text-center mb-8">
        Budget Overview
      </h2>

      <div className="bg-blue-50 p-5 rounded-lg mb-4">
        <p className="text-lg font-semibold text-gray-700">
          Estimated Budget: ₹{estimatedBudget}
        </p>
      </div>

      <div className="bg-blue-50 p-5 rounded-lg mb-4">
        <p className="text-lg font-semibold text-gray-700">
          Total Expenses: ₹{totalExpenses}
        </p>
      </div>

      <div className="bg-blue-50 p-5 rounded-lg mb-6">
        <p className="text-lg font-semibold text-blue-700">
          Remaining Budget: ₹{remainingBudget}
        </p>
      </div>

      <div className="flex justify-center gap-4 flex-wrap">

        <button onClick={() => navigate("/client/dashboard/gallery")}
          className="bg-blue-500 text-white font-semibold p-3 rounded-lg">
          Previous
        </button>

        <button onClick={() => navigate("/client/dashboard")}
          className="bg-blue-500 text-white font-semibold p-3 rounded-lg">
          Dashboard
        </button>

        <button onClick={() => navigate("/client/dashboard/complaints")}
          className="bg-blue-500 text-white font-semibold p-3 rounded-lg">
          Next: Complaints
        </button>

      </div>
    </div>
  );
}

export default BudgetOverview;