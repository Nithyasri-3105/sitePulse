import { useState } from "react";

function ComplaintManagement() {
  const [response, setResponse] = useState("");
  const [status, setStatus] = useState("Pending");
  const [remarks, setRemarks] = useState("");

  const handleSubmit = (e) => {e.preventDefault();console.log(response, status, remarks);};

  return (
    <div>
      <h2>Complaint Management</h2>
      {/*
      <p>Client Complaints will be displayed here.</p>
      <form onSubmit={handleSubmit}>
        <textarea placeholder="Engineer Response"
          value={response} onChange={(e) => setResponse(e.target.value)} />
        <br /><br />

        <select value={status} onChange={(e) => setStatus(e.target.value)}><option>Pending</option>
          <option>In Progress</option>
          <option>Resolved</option>
        </select>

        <br /><br />
        <textarea placeholder="Resolution Remarks"
          value={remarks} onChange={(e) => setRemarks(e.target.value)} />
        <br /><br />
        <button type="submit">Update Complaint</button>
      </form>
      */}
    </div>
  );
}

export default ComplaintManagement;