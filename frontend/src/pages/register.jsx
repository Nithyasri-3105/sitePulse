
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { registerschema } from "../components/FormSchema/registerschema";
import { zodResolver } from "@hookform/resolvers/zod";

function Register() {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors }} = useForm({
    resolver: zodResolver(registerschema)
  });

  function onSubmit(data) {
    console.log("Register Success", data);
    alert("Registration Successful");
    navigate("/");
  }

  return (
    <>
      <h2>SitePulse Registration</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Enter your name"  {...register("name")} />
        <p>{errors.name?.message}</p>

        <br />

        <input type="email" placeholder="Enter your email" {...register("email")} />
        <p>{errors.email?.message}</p>

        <br />

        <input type="password" placeholder="Enter your password" {...register("password")} />
        <p>{errors.password?.message}</p>

        <br />

        <input type="password" placeholder="Confirm your password" {...register("confirmPassword")} />
        <p>{errors.confirmPassword?.message}</p>

        <br />

        <select {...register("role")}>
          <option value="">Select Role</option>
          <option value="Engineer">Engineer</option>
          <option value="Client">Client</option>
        </select>
        <p>{errors.role?.message}</p>

        <br />

        <button type="submit">Register</button>
      </form>

      <p>Already have an account?</p>
      <button onClick={() => navigate("/")}>Login</button>
    </>
  );
}

export default Register;
