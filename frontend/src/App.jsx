import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/login";
import Register from "./pages/register";

import EngineerDashboard from "./pages/engineerDashboard";
import MyProjects from "./pages/myProjects";
import CreateProject from "./pages/createProject";
import ProjectWorkspace from "./pages/projectWorkspace";
import ComplaintManagement from "./pages/complaintManagement";
import ProductPurchase from "./pages/productPurchase";

import ClientDashboard from "./pages/clientDashboard";
import ProgressMonitoring from "./pages/progressMonitoring";
import ProgressGallery from "./pages/progressGallery";
import BudgetOverview from "./pages/budgetOverview";
import ClientComplaints from "./pages/clientComplaints";
import MilestonesDocuments from "./pages/milestonesDocuments";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

       
        <Route path="/engineer/dashboard" element={<EngineerDashboard />} />
        <Route path="/engineer/projects" element={<MyProjects />} />
        <Route path="/engineer/create-project" element={<CreateProject />} />
        <Route path="/engineer/project/:id" element={<ProjectWorkspace />} />
        <Route path="/engineer/complaints" element={<ComplaintManagement />} />
        <Route path="/engineer/purchases" element={<ProductPurchase />} />

       
        <Route path="/client/dashboard" element={<ClientDashboard />} />
        <Route path="/client/progress" element={<ProgressMonitoring />} />
        <Route path="/client/gallery" element={<ProgressGallery />} />
        <Route path="/client/budget" element={<BudgetOverview />} />
        <Route path="/client/complaints" element={<ClientComplaints />} />
        <Route path="/client/milestones-documents" element={<MilestonesDocuments />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;