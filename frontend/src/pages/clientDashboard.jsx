import {useNavigate, Outlet } from "react-router-dom";

function ClientDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-800 p-6 flex flex-col items-center">

      <h2 className="text-3xl font-bold text- text-center mb-4">
        Client Dashboard
      </h2>

      <p className="text-white text-lg mb-8">
        Welcome to SitePulse
      </p>

      <div className="flex justify-center items-center flex-wrap gap-4 w-full mb-8">

        <button onClick={() => navigate("/client/dashboard/progress")}
          className="bg-blue-500 text-white font-semibold p-3 rounded-lg">
          Progress Monitoring
        </button>

        <button onClick={() => navigate("/client/dashboard/gallery")}
          className="bg-blue-500 text-white font-semibold p-3 rounded-lg">
          Progress Gallery
        </button>

        <button onClick={() => navigate("/client/dashboard/budget")}
          className="bg-blue-500 text-white font-semibold p-3 rounded-lg">
          Budget Overview
        </button>

        <button onClick={() => navigate("/client/dashboard/complaints")}
          className="bg-blue-500 text-white font-semibold p-3 rounded-lg">
          Complaints & Feedback
        </button>

        <button onClick={() => navigate("/client/dashboard/milestones-documents")}
          className="bg-blue-500 text-white font-semibold p-3 rounded-lg">
          Milestones & Documents
        </button>

        <button onClick={() => navigate("/")}
          className="bg-red-500 text-white font-semibold p-3 rounded-lg">
          Logout
        </button>

      </div>

      <div className="bg-white p-6 rounded-lg w-full max-w-5xl">
        <Outlet/>
      </div>

    </div>
  );
}

export default ClientDashboard;