
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
       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl mx-auto">

      <h2 className="text-3xl font-bold text-blue-700 text-center mb-6">
        Complaints & Feedback
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>

        <label className="text-lg font-semibold">Complaint Category</label>
        <select {...register("category")}
          className="w-full border p-2 rounded mb-2">
          <option value="">Select Category</option>
          <option value="Construction Quality">Construction Quality</option>
          <option value="Delay">Delay</option>
          <option value="Material">Material</option>
          <option value="Other">Other</option>
        </select>
        <p className="text-red-500 text-sm">{errors.category?.message}</p>
        <br />

        <label className="text-lg font-semibold">Complaint Title</label>
        <input type="text" placeholder="Enter complaint title"
          className="w-full border p-2 rounded mb-2"
          {...register("title")} />
        <p className="text-red-500 text-sm">{errors.title?.message}</p>
        <br />

        <label className="text-lg font-semibold">Description</label>
        <textarea placeholder="Enter description"
          className="w-full border p-2 rounded mb-2"
          {...register("description")} />
        <p className="text-red-500 text-sm">{errors.description?.message}</p>
        <br />

        <label className="text-lg font-semibold">Supporting Photo</label>
        <input type="file" accept="image/*"
          className="w-full border p-2 rounded mb-4" />
        <br />

        <label className="text-lg font-semibold">Feedback Rating</label>
        <select {...register("rating")}
          className="w-full border p-2 rounded mb-2">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <p className="text-red-500 text-sm">{errors.rating?.message}</p>
        <br />

        <button type="submit"
          className="w-full bg-blue-500 text-white font-semibold p-3 rounded-lg">
          Submit Complaint
        </button>
      </form>

      <h3 className="text-xl font-bold text-blue-700 mt-6 mb-2 text-center">
        Complaint Status
      </h3>

      <p className="text-center text-gray-700 mb-5">Status: Pending</p>

      <div className="flex justify-center gap-3 flex-wrap">

        <button onClick={() => navigate("/client/dashboard/budget")}
          className="bg-blue-500 text-white font-semibold p-3 rounded-lg">
          Previous
        </button>

        <button onClick={() => navigate("/client/dashboard")}
          className="bg-blue-500 text-white font-semibold p-3 rounded-lg">
          Dashboard
        </button>

        <button onClick={() => navigate("/client/dashboard/milestones-documents")}
          className="bg-blue-500 text-white font-semibold p-3 rounded-lg">
          Next: Milestones & Documents
        </button>

      </div>
    </div>
  );
}

export default ClientComplaints;
