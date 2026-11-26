
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { clientcomplaintschema } from "../components/FormSchema/clientcomplaintschema";
import { zodResolver } from "@hookform/resolvers/zod";

function ClientComplaints() {
  const navigate = useNavigate();

  const { register,handleSubmit,formState: { errors }} = useForm({
    resolver: zodResolver(clientcomplaintschema),defaultValues: {rating: "5" }
  });

  function onSubmit(data) {
    console.log(data);
    alert("Complaint submitted successfully");
  }

  return (
    <div>
      <h2>Complaints & Feedback</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Complaint Category</label>
        <select {...register("category")}>
          <option value="">Select Category</option>
          <option value="Construction Quality">Construction Quality</option>
          <option value="Delay">Delay</option>
          <option value="Material">Material</option>
          <option value="Other">Other</option>
        </select>
        <p>{errors.category?.message}</p>
        <br />

        <label>Complaint Title</label>
        <input type="text" placeholder=" Enter" {...register("title")} />
        <p>{errors.title?.message}</p>
        <br />

        <label>Description</label>
        <textarea placeholder=" Enter" {...register("description")} />
        <p>{errors.description?.message}</p>
        <br />

        <label>Supporting Photo</label>
        <input type="file" accept="image/*" />
        <br />

        <label>Feedback Rating</label>
        <select {...register("rating")}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <p>{errors.rating?.message}</p>
        <br />

        <button type="submit">Submit Complaint</button>
      </form>

      <h3>Complaint Status</h3>
      <p>Status: Pending</p>

      <button onClick={() => navigate("/client/budget")}>Previous</button>

      <button onClick={() => navigate("/client/dashboard")}>Dashboard</button>

      <button onClick={() => navigate("/client/milestones-documents")}>
        Next: Milestones & Documents
      </button>
    </div>
  );
}

export default ClientComplaints;
