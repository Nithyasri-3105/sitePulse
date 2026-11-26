
import { useNavigate } from "react-router-dom";

function EngineerDashboard() {
  const navigate = useNavigate();

  return (
    <>
      <h2>Engineer Dashboard</h2>

      <button onClick={() => navigate("/engineer/projects")}>
        My Projects
      </button>
<br/>
      <button onClick={() => navigate("/engineer/create-project")}>
        Create Project
      </button>
<br/>
      <button onClick={() => navigate("/engineer/complaints")}>
        Complaint Management
      </button>
<br/>
      <button onClick={() => navigate("/engineer/purchases")}>
        Product Purchase
      </button>
<br/>
      <button onClick={() => navigate("/")}>
        Logout
      </button>
    </>
  );
}

export default EngineerDashboard;
