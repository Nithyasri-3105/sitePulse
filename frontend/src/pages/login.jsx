
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Login() {

  const [logindata, setLogindata] = useState({
    email: "",
    password: "",
    role: ""
  });

  const navigate = useNavigate();
  const location = useLocation();

  function handlechange(e) {
    setLogindata({
      ...logindata,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const registerdata = location.state;

    console.log("Register data:", registerdata);
    console.log("Login data:", logindata);

    if (!registerdata) {
      alert("Please register first");
      return;
    }

    if (
      logindata.email === registerdata.email &&
      logindata.password === registerdata.password &&
      logindata.role === registerdata.role
    ) {
      console.log("Login success");
      alert("Login Successful");

      if (logindata.role === "Engineer") {
        navigate("/engineer/dashboard");
      } else if (logindata.role === "Client") {
        navigate("/client/dashboard");
      }

    } else {
      console.log("Login failed");
      alert("Invalid Email, Password or Role");
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">

      <form onSubmit={handleSubmit}
        className="p-8 w-96 shadow-lg bg-white rounded-lg">

        <h2 className="text-3xl font-bold text-blue-700 text-center mb-6">
          SitePulse Login
        </h2>

        <label htmlFor="email" className="text-lg font-semibold">
          Email :
        </label>

        <input type="email" name="email"
          placeholder="Enter your email"
          id="email"
          className="w-full border p-2 rounded mb-2"
          onChange={handlechange}
          required
        />

        <br />

        <label htmlFor="password" className="text-lg font-semibold">
          Password :
        </label>

        <input type="password" name="password"
          placeholder="Enter your password"
          id="password"
          className="w-full border p-2 rounded mb-2"
          onChange={handlechange}
          required
        />

        <br />

        <label htmlFor="role" className="text-lg font-semibold">
          Role :
        </label>

        <select name="role"
          id="role"
          className="w-full border p-2 rounded mb-4"
          onChange={handlechange}
          required
        >
          <option value="">Select Role</option>
          <option value="Engineer">Engineer</option>
          <option value="Client">Client</option>
        </select>

        <button type="submit"
          className="w-full bg-pink-600 text-white text-lg font-semibold p-2 rounded">
          Login
        </button>

        <p className="text-lg font-semibold text-center mt-4 mb-4">
          Don't have an account?
        </p>

        <button type="button"
          onClick={() => navigate("/register")}
          className="w-full bg-blue-400 text-white text-lg font-semibold p-2 rounded">
          Register
        </button>

      </form>
    </div>
  );
}

export default Login;
