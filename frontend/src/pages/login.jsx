
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
    role: ""
  });

  const navigate = useNavigate();

  function handlechange(e) {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    });
  }

  function print() {
    console.log(formdata);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login Success", formdata);
    alert("Login Successful");

    if (formdata.role === "Engineer") {
      navigate("/engineer/dashboard", { state: formdata });
    }
    else if (formdata.role === "Client") {
      navigate("/client/dashboard", { state: formdata });
    }
  };

  return (
    <>
      <h2>SitePulse Login</h2>

      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Enter your email" value={formdata.email} onChange={handlechange} required />
        <br />

        <input type="password" name="password" placeholder="Enter your password" value={formdata.password} onChange={handlechange} required/>
        <br />

        <select name="role" value={formdata.role} onChange={handlechange} required>
          <option value="">Select Role</option>
          <option value="Engineer">Engineer</option>
          <option value="Client">Client</option>
        </select>

        <br />

        <button type="submit">Login</button>
        <button type="button" onClick={print}>Print</button>
      </form>

      <p>Don't have an account?</p>
      <button onClick={() => navigate("/register")}>Register</button>
    </>
  );
}

export default Login;
