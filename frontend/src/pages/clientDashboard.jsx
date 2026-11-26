import { useNavigate } from "react-router-dom";

function ClientDashboard() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Client Dashboard</h2>
      <p>Welcome to SitePulse</p>
      <button onClick={() => navigate("/client/progress")}>Progress Monitoring</button>
      <br/>
      <button onClick={() => navigate("/client/gallery")}>Progress Gallery</button>
      <br/>
      <button onClick={() => navigate("/client/budget")}>Budget Overview</button>
      <br/>
      <button onClick={() => navigate("/client/complaints")}>Complaints & Feedback</button><br/>
      <button onClick={() => navigate("/client/milestones-documents")}>Milestones & Documents</button><br/>
      <button onClick={() => navigate("/")}>Logout</button>
    </div>
  );
}

export default ClientDashboard;