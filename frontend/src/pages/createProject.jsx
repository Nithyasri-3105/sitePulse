import { useState } from "react";

function CreateProject() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [budget, setBudget] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {e.preventDefault();console.log({name, email, location,startDate, endDate, budget, description});};

  return (
    <div>
      <h2>Create Project</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Project Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <br /><br />
        <input type="email" placeholder="Client Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <br /><br />
        <input placeholder="Project Location" value={location} onChange={(e) => setLocation(e.target.value)} required />
        <br /><br />
        <label>Start Date</label>
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
        <br /><br />
        <label>Expected Completion Date</label>
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
        <br /><br />
        <input type="number" placeholder="Estimated Budget" value={budget} onChange={(e) => setBudget(e.target.value)} required />
        <br /><br />
        <textarea placeholder="Project Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <br /><br />
        <button type="submit">Create Project</button>
      </form>
    </div>
  );
}

export default CreateProject;