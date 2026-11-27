
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { projectschema } from "../components/FormSchema/projectschema";
import { zodResolver } from "@hookform/resolvers/zod";

function CreateProject() {
  const navigate = useNavigate();

  const {register,handleSubmit,formState: { errors } } = useForm({resolver: zodResolver(projectschema) });

  function onSubmit(data) {
    console.log(data);
    alert("Project Created Successfully");
    navigate("/engineer/dashboard/projects");
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl mx-auto">
       <h2 className="text-3xl font-bold text-blue-700 text-center mb-6">
        Create Project
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>

        <label className="text-lg font-semibold">Project Name</label>
        <input type="text" placeholder="Enter project name"
          className="w-full border p-2 rounded mb-2"
          {...register("projectName")} />
        <p className="text-red-500 text-sm">{errors.projectName?.message}</p>
        <br />

        <label className="text-lg font-semibold">Client Email</label>
        <input type="email" placeholder="Enter client email"
          className="w-full border p-2 rounded mb-2"
          {...register("clientEmail")} />
        <p className="text-red-500 text-sm">{errors.clientEmail?.message}</p>
        <br />

        <label className="text-lg font-semibold">Location</label>
        <input type="text" placeholder="Enter location"
          className="w-full border p-2 rounded mb-2"
          {...register("location")} />
        <p className="text-red-500 text-sm">{errors.location?.message}</p>
        <br />

        <label className="text-lg font-semibold">Start Date</label>
        <input type="date"
          className="w-full border p-2 rounded mb-2"
          {...register("startDate")} />
        <p className="text-red-500 text-sm">{errors.startDate?.message}</p>
        <br />

        <label className="text-lg font-semibold">Expected Completion Date</label>
        <input type="date"
          className="w-full border p-2 rounded mb-2"
          {...register("endDate")} />
        <p className="text-red-500 text-sm">{errors.endDate?.message}</p>
        <br />

        <label className="text-lg font-semibold">Estimated Budget</label>
        <input type="number" placeholder="Enter budget"
          className="w-full border p-2 rounded mb-2"
          {...register("budget")} />
        <p className="text-red-500 text-sm">{errors.budget?.message}</p>
        <br />

        <label className="text-lg font-semibold">Description</label>
        <textarea placeholder="Enter project description"
          className="w-full border p-2 rounded mb-2"
          {...register("description")} />
        <p className="text-red-500 text-sm">{errors.description?.message}</p>
        <br />

        <button type="submit"
          className="w-full bg-blue-500 text-white font-semibold p-3 rounded-lg">
          Create Project
        </button>
      </form>

      <button onClick={() => navigate("/engineer/dashboard/projects")}
        className="w-full bg-blue-500 text-white font-semibold p-3 rounded-lg mt-3">
        Back
      </button>
    </div>
  );
}

export default CreateProject;
