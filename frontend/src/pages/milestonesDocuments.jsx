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
    <div>
      <h2>Milestones & Documents</h2>
      <h3>Project Milestones</h3>
      <p>Foundation Work - Completed</p>
      <p>Structure Work - In Progress</p>
      <p>Painting Work - Pending</p>
      <h3>Milestone Approval</h3>
      <form onSubmit={handleSubmit}>
        <label>Milestone Decision</label>
        <select value={approval} onChange={(e) => setApproval(e.target.value)} required>
          <option value="">Select Decision</option>
          <option value="Approved">Approve</option>
          <option value="Correction Requested">Request Correction</option>
        </select>
        <br />
        <label>Remarks</label>
        <textarea value={remarks} onChange={(e) => setRemarks(e.target.value)} />
        <br />
        <button type="submit">Submit Response</button>
      </form>
      <h3>Project Documents</h3>
      <p>Project Plan.pdf</p>
      <p>Construction Agreement.pdf</p>
      <button onClick={() => navigate("/client/complaints")}>Previous</button>
      <button onClick={() => navigate("/client/dashboard")}>Back to Dashboard</button>
    </div>
  );
}

export default MilestonesDocuments;