
import { Outlet, useNavigate } from "react-router-dom";

function EngineerDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-6 flex flex-col items-center">

      <h2 className="text-3xl font-bold text-blue-700 text-center mb-8">
        Engineer Dashboard
      </h2>

      <div className="flex justify-center items-center  gap-4  mb-8">

        <button onClick={() => navigate("/engineer/dashboard/projects")}
          className="bg-blue-500 text-white font-semibold p-3 rounded-lg">
          My Projects
        </button>

        <button onClick={() => navigate("/engineer/dashboard/create-project")}
          className="bg-blue-500 text-white font-semibold p-3 rounded-lg">
          Create Project
        </button>

        <button onClick={() => navigate("/engineer/dashboard/complaints")}
          className="bg-blue-500 text-white font-semibold p-3 rounded-lg">
          Complaint Management
        </button>

        <button onClick={() => navigate("/engineer/dashboard/purchases")}
          className="bg-blue-500 text-white font-semibold p-3 rounded-lg">
          Product Purchase
        </button>

        <button onClick={() => navigate("/")}
          className="bg-red-500 text-white font-semibold p-3 rounded-lg">
          Logout
        </button>

      </div>

      <div className="bg-white p-6 rounded-lg  w-full max-w-5xl">
        <Outlet />
      </div>

    </div>
  );
}

export default EngineerDashboard;
