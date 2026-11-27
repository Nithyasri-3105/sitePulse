
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
     <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl mx-auto">

      <h2 className="text-3xl font-bold text-blue-700 text-center mb-6">
        Complaint Management
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>

        <label className="text-lg font-semibold">Complaint Title</label>
        <input type="text" placeholder="Enter complaint title"
          className="w-full border p-2 rounded mb-2"
          {...register("complaintTitle")} />
        <p className="text-red-500 text-sm">{errors.complaintTitle?.message}</p>
        <br />

        <label className="text-lg font-semibold">Engineer Response</label>
        <textarea placeholder="Enter response"
          className="w-full border p-2 rounded mb-2"
          {...register("response")} />
        <p className="text-red-500 text-sm">{errors.response?.message}</p>
        <br />

        <label className="text-lg font-semibold">Complaint Status</label>
        <select className="w-full border p-2 rounded mb-2"
          {...register("status")}>
          <option value="">Select Status</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
        </select>
        <p className="text-red-500 text-sm">{errors.status?.message}</p>
        <br />

        <label className="text-lg font-semibold">Resolution Remarks</label>
        <textarea placeholder="Enter resolution remarks"
          className="w-full border p-2 rounded mb-2"
          {...register("resolution")} />
        <p className="text-red-500 text-sm">{errors.resolution?.message}</p>
        <br />

        <button type="submit"
          className="w-full bg-blue-500 text-white font-semibold p-3 rounded-lg">
          Submit Response
        </button>
      </form>

      <div className="flex justify-center gap-4 mt-4">

        <button onClick={() => navigate("/engineer/dashboard")}
          className="bg-blue-500 text-white font-semibold p-3 rounded-lg">
          Back to Dashboard
        </button>

        <button onClick={() => navigate("/engineer/dashboard/purchases")}
          className="bg-blue-500 text-white font-semibold p-3 rounded-lg">
          Next: Product Purchase
        </button>

      </div>
    </div>
  );
}

export default ComplaintManagement;
