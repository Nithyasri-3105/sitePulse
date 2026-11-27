import { useNavigate } from "react-router-dom";

function ProgressMonitoring() {
  const navigate = useNavigate();

  return (
   <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl mx-auto">

      <h2 className="text-3xl font-bold text-blue-700 text-center mb-6">
        Progress Monitoring
      </h2>

      <div className="bg-blue-50 p-4 rounded-lg mb-3">
        <p className="text-lg font-semibold text-gray-700">
          Project Name: Apartment Construction
        </p>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg mb-3">
        <p className="text-lg font-semibold text-gray-700">
          Location: Coimbatore
        </p>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg mb-3">
        <p className="text-lg font-semibold text-gray-700">
          Overall Completion: 65%
        </p>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg mb-3">
        <p className="text-lg font-semibold text-gray-700">
          Work Status: In Progress
        </p>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <p className="text-lg font-semibold text-gray-700">
          Expected Completion: 30-06-2027
        </p>
      </div>

      <div className="flex justify-center gap-4 flex-wrap">

        <button onClick={() => navigate("/client/dashboard")}
          className="bg-blue-500 text-white font-semibold p-3 rounded-lg">
          Back to Dashboard
        </button>

        <button onClick={() => navigate("/client/dashboard/gallery")}
          className="bg-blue-500 text-white font-semibold p-3 rounded-lg">
          Next: Progress Gallery
        </button>

      </div>
    </div>
  );
}

export default ProgressMonitoring;