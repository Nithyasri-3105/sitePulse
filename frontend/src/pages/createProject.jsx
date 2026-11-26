
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
    navigate("/engineer/projects");
  }

  return (
    <div>
      <h2>Create Project</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Project Name</label>
        <input type="text" placeholder="Enter" {...register("projectName")} />
        <p>{errors.projectName?.message}</p>
        <br />

        <label>Client Email</label>
        <input type="email" placeholder=" Enter" {...register("clientEmail")} />
        <p>{errors.clientEmail?.message}</p>
        <br />

        <label>Location</label>
        <input type="text" placeholder=" Enter" {...register("location")} />
        <p>{errors.location?.message}</p>
        <br />

        <label>Start Date</label>
        <input type="date" {...register("startDate")} />
        <p>{errors.startDate?.message}</p>
        <br />

        <label>Expected Completion Date</label>
        <input type="date" {...register("endDate")} />
        <p>{errors.endDate?.message}</p>
        <br />

        <label>Estimated Budget</label>
        <input type="number" placeholder=" Enter" {...register("budget")} />
        <p>{errors.budget?.message}</p>
        <br />

        <label>Description</label>
        <textarea placeholder=" Enter"  {...register("description")} />
        <p>{errors.description?.message}</p>
        <br />

        <button type="submit">Create Project</button>
      </form>

      <button onClick={() => navigate("/engineer/projects")}>Back</button>
    </div>
  );
}

export default CreateProject;
