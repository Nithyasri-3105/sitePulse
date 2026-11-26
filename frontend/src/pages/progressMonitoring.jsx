import { useNavigate } from "react-router-dom";

function ProgressMonitoring() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Progress Monitoring</h2>
      <p>Project Name: Apartment Construction</p>
      <p>Location: Coimbatore</p>
      <p>Overall Completion: 65%</p>
      <p>Work Status: In Progress</p>
      <p>Expected Completion: 30-06-2027</p>

      <button onClick={() => navigate("/client/dashboard")}>Back to Dashboard</button>
      <button onClick={() => navigate("/client/gallery")}>Next: Progress Gallery</button>
    </div>
  );
}

export default ProgressMonitoring;