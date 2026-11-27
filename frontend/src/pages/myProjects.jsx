
import { useNavigate } from "react-router-dom";

function MyProjects() {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">

      <h2 className="text-3xl font-bold text-blue-700 text-center mb-6">
        My Projects
      </h2>

      <p className="text-gray-600 text-center mb-6">
        No projects added yet.
      </p>

      <div className="flex justify-center gap-5">

        <button
          onClick={() => navigate("/engineer/dashboard/create-project")}
          className="bg-blue-500 text-white font-semibold p-3 rounded-lg">
          Create New Project
        </button>

        <button
          onClick={() => navigate("/engineer/dashboard")}
          className="bg-blue-500 text-white font-semibold p-3 rounded-lg">
          Back to Dashboard
        </button>

      </div>
    </div>
  );
}

export default MyProjects;
