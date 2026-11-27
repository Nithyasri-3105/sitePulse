
import { useNavigate } from "react-router-dom";
import { useForm, useWatch } from "react-hook-form";
import { purchaseschema } from "../components/FormSchema/purchaseschema";
import { zodResolver } from "@hookform/resolvers/zod";

function ProductPurchase() {
  const navigate = useNavigate();

  const {register, handleSubmit, control,formState: { errors }} = useForm({  resolver: zodResolver(purchaseschema) });

  const quantity = useWatch({ control, name: "quantity" });
  const price = useWatch({ control, name: "price" });

  const totalCost = Number(quantity || 0) * Number(price || 0);

  function onSubmit(data) {
    console.log({ ...data, totalCost });
    alert("Purchase Details Saved");
  }

  return (
     <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl mx-auto">

      <h2 className="text-3xl font-bold text-blue-700 text-center mb-6">
        Product Purchase Tracking
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>

        <label className="text-lg font-semibold">Product Name</label>
        <input type="text" placeholder="Enter product name"
          className="w-full border p-2 rounded mb-2"
          {...register("productName")} />
        <p className="text-red-500 text-sm">{errors.productName?.message}</p>
        <br />

        <label className="text-lg font-semibold">Category</label>
        <input type="text" placeholder="Enter category"
          className="w-full border p-2 rounded mb-2"
          {...register("category")} />
        <p className="text-red-500 text-sm">{errors.category?.message}</p>
        <br />

        <label className="text-lg font-semibold">Quantity</label>
        <input type="number" placeholder="Enter quantity"
          className="w-full border p-2 rounded mb-2"
          {...register("quantity")} />
        <p className="text-red-500 text-sm">{errors.quantity?.message}</p>
        <br />

        <label className="text-lg font-semibold">Unit</label>
        <input type="text" placeholder="Enter unit"
          className="w-full border p-2 rounded mb-2"
          {...register("unit")} />
        <p className="text-red-500 text-sm">{errors.unit?.message}</p>
        <br />

        <label className="text-lg font-semibold">Price Per Unit</label>
        <input type="number" placeholder="Enter price per unit"
          className="w-full border p-2 rounded mb-2"
          {...register("price")} />
        <p className="text-red-500 text-sm">{errors.price?.message}</p>
        <br />

        <label className="text-lg font-semibold">Purchase Date</label>
        <input type="date"
          className="w-full border p-2 rounded mb-2"
          {...register("purchaseDate")} />
        <p className="text-red-500 text-sm">{errors.purchaseDate?.message}</p>
        <br />

        <p className="text-xl font-bold text-blue-700 mb-4">
          Total Cost: ₹{totalCost}
        </p>

        <button type="submit"
          className="w-full bg-blue-500 text-white font-semibold p-3 rounded-lg">
          Save Purchase
        </button>
      </form>

      <div className="flex justify-center gap-4 mt-4">

        <button onClick={() => navigate("/engineer/dashboard/complaints")}
          className="bg-blue-500 text-white font-semibold p-3 rounded-lg">
          Previous
        </button>

        <button onClick={() => navigate("/engineer/dashboard")}
          className="bg-blue-500 text-white font-semibold p-3 rounded-lg">
          Back to Dashboard
        </button>

      </div>
    </div>
  );
}

export default ProductPurchase;
