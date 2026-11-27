import { useNavigate } from "react-router-dom";

function ProgressGallery() {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl mx-auto">

      <h2 className="text-3xl font-bold text-blue-700 text-center mb-4">
        Progress Gallery
      </h2>

      <p className="text-lg text-gray-600 text-center mb-6">
        Construction Site Photos
      </p>

      <div className="text-center mb-6">
        <p className="text-xl font-semibold text-blue-700 mb-3">
          Construction Stage 1
        </p>
        <img src="/conimage.jpg" alt="Construction Stage 1"
          className="w-full h-64 object-cover rounded-lg shadow-md mx-auto" />
      </div>

      <div className="text-center mb-6">
        <p className="text-xl font-semibold text-blue-700 mb-3">
          Construction Stage 2
        </p>
        <img src="/Paddy.webp" alt="Construction Stage 2"
          className="w-full h-64 object-cover rounded-lg shadow-md mx-auto" />
      </div>

      <div className="text-center mb-6">
        <p className="text-xl font-semibold text-blue-700 mb-3">
          Construction Stage 3
        </p>
        <img src="/Constru.jpg" alt="Construction Stage 3"
          className="w-full h-64 object-cover rounded-lg shadow-md mx-auto" />
      </div>

      <div className="flex justify-center gap-4 flex-wrap">

        <button onClick={() => navigate("/client/dashboard/progress")}
          className="bg-blue-500 text-white font-semibold p-3 rounded-lg">
          Previous
        </button>

        <button onClick={() => navigate("/client/dashboard")}
          className="bg-blue-500 text-white font-semibold p-3 rounded-lg">
          Dashboard
        </button>

        <button onClick={() => navigate("/client/dashboard/budget")}
          className="bg-blue-500 text-white font-semibold p-3 rounded-lg">
          Next: Budget Overview
        </button>

      </div>
    </div>
  );
}

export default ProgressGallery;