
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

    navigate("/", {
      state: data
    });
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">

      <form onSubmit={handleSubmit(onSubmit)}
        className="p-8 w-96 shadow-lg bg-white rounded-lg">

        <h2 className="text-3xl font-bold text-blue-700 text-center mb-6">
          SitePulse Registration
        </h2>

        <label htmlFor="name" className="text-lg font-semibold">
          Name :
        </label>

        <input type="text" placeholder="Enter your name"
          className="w-full border p-2 rounded mb-2"
          id="name" {...register("name")} />

        <p className="text-red-500 text-sm">{errors.name?.message}</p>
        <br />

        <label htmlFor="email" className="text-lg font-semibold">
          Email :
        </label>

        <input type="email" placeholder="Enter your email"
          className="w-full border p-2 rounded mb-2"
          id="email" {...register("email")} />

        <p className="text-red-500 text-sm">{errors.email?.message}</p>
        <br />

        <label htmlFor="password" className="text-lg font-semibold">
          Password :
        </label>

        <input type="password" placeholder="Enter your password"
          className="w-full border p-2 rounded mb-2"
          id="password" {...register("password")} />

        <p className="text-red-500 text-sm">{errors.password?.message}</p>
        <br />

        <label htmlFor="Password" className="text-lg font-semibold">
          Confirm Password :
        </label>

        <input type="password" placeholder="Confirm your password"
          className="w-full border p-2 rounded mb-2"
          id="Password" {...register("confirmPassword")} />

        <p className="text-red-500 text-sm">{errors.confirmPassword?.message}</p>
        <br />

        <label htmlFor="role" className="text-lg font-semibold">
          Role :
        </label>

        <select className="w-full border p-2 rounded mb-2"
          id="role" {...register("role")}>
          <option value="">Select Role</option>
          <option value="Engineer">Engineer</option>
          <option value="Client">Client</option>
        </select>

        <p className="text-red-500 text-sm">{errors.role?.message}</p>
        <br />

        <button type="submit"
          className="w-full bg-pink-600 text-white text-lg font-semibold p-2 rounded">
          Register
        </button>

        <p className="text-xl font-semibold text-center mt-4 mb-4">
          Already have an account?
        </p>

        <button type="button"
          onClick={() => navigate("/")}
          className="w-full bg-blue-400 text-white text-lg font-semibold p-2 rounded">
          Login
        </button>

      </form>
    </div>
  );
}

export default Register;
