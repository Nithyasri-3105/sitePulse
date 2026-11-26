import { useNavigate } from "react-router-dom";

function MyProjects() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>My Projects</h2>
      <p>No projects added yet.</p>
      <button onClick={() => navigate("/engineer/create-project")}>Create New Project</button>
      <button onClick={() => navigate("/engineer/dashboard")}>Back to Dashboard</button>
    </div>
  );
}

export default MyProjects;