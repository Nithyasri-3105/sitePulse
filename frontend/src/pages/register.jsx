import { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {e.preventDefault();console.log(name, email, password, role);};

  return (
    <div>
      <h2>Register</h2>
 <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <br /><br />
        <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <br /><br />
        <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <br /><br />
        <input type="text" placeholder="Enter Role" value={role} onChange={(e) => setRole(e.target.value)} required />
        <br /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;