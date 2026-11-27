import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MilestonesDocuments() {
  const navigate = useNavigate();
  const [approval, setApproval] = useState("");
  const [remarks, setRemarks] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ approval, remarks });
    alert("Milestone response submitted");
  }

  return (
     <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl mx-auto">

      <h2 className="text-3xl font-bold text-blue-700 text-center mb-6">
        Milestones & Documents
      </h2>

      <h3 className="text-xl font-bold text-blue-700 mb-3">
        Project Milestones
      </h3>

      <div className="bg-blue-50 p-4 rounded-lg mb-3">
        <p className="text-gray-700 font-semibold">Foundation Work - Completed</p>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg mb-3">
        <p className="text-gray-700 font-semibold">Structure Work - In Progress</p>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <p className="text-gray-700 font-semibold">Painting Work - Pending</p>
      </div>

      <h3 className="text-xl font-bold text-blue-700 mb-3">
        Milestone Approval
      </h3>

      <form onSubmit={handleSubmit}>

        <label className="text-lg font-semibold">Milestone Decision</label>

        <select value={approval}
          onChange={(e) => setApproval(e.target.value)}
          required
          className="w-full border p-2 rounded mb-4">
          <option value="">Select Decision</option>
          <option value="Approved">Approve</option>
          <option value="Correction Requested">Request Correction</option>
        </select>

        <br />

        <label className="text-lg font-semibold">Remarks</label>

        <textarea value={remarks}
          onChange={(e) => setRemarks(e.target.value)}
          placeholder="Enter remarks"
          className="w-full border p-2 rounded mb-4" />

        <br />

        <button type="submit"
          className="w-full bg-blue-500 text-white font-semibold p-3 rounded-lg">
          Submit Response
        </button>
      </form>

      <h3 className="text-xl font-bold text-blue-700 mt-6 mb-3">
        Project Documents
      </h3>

      <div className="bg-blue-50 p-4 rounded-lg mb-3">
        <p className="text-gray-700 font-semibold">Project Plan.pdf</p>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <p className="text-gray-700 font-semibold">Construction Agreement.pdf</p>
      </div>

      <div className="flex justify-center gap-4 flex-wrap">

        <button onClick={() => navigate("/client/dashboard/complaints")}
          className="bg-blue-500 text-white font-semibold p-3 rounded-lg">
          Previous
        </button>

        <button onClick={() => navigate("/client/dashboard")}
          className="bg-blue-500 text-white font-semibold p-3 rounded-lg">
          Back to Dashboard
        </button>

      </div>
    </div>
  );
}

export default MilestonesDocuments;