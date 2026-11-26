
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { complaintschema } from "../components/FormSchema/complaintschema";
import { zodResolver } from "@hookform/resolvers/zod";

function ComplaintManagement() {
  const navigate = useNavigate();

  const {register, handleSubmit, formState: { errors }} = useForm({resolver: zodResolver(complaintschema)});

  function onSubmit(data) {
    console.log(data);
    alert("Complaint Response Submitted");
  }

  return (
    <div>
      <h2>Complaint Management</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Complaint Title</label>
        <input type="text" placeholder="Enter" {...register("complaintTitle")} />
        <p>{errors.complaintTitle?.message}</p>
        <br />

        <label>Engineer Response</label>
        <textarea placeholder="Enter" {...register("response")} />
        <p>{errors.response?.message}</p>
        <br />

        <label>Complaint Status</label>
        <select {...register("status")}>
          <option value="">Select Status</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
        </select>
        <p>{errors.status?.message}</p>
        <br />

        <label>Resolution Remarks</label>
        <textarea placeholder="Enter" {...register("resolution")} />
        <p>{errors.resolution?.message}</p>
        <br />

        <button type="submit">Submit Response</button>
      </form>

      <button onClick={() => navigate("/engineer/dashboard")}>
        Back to Dashboard
      </button>

      <button onClick={() => navigate("/engineer/purchases")}>
        Next: Product Purchase
      </button>
    </div>
  );
}

export default ComplaintManagement;
