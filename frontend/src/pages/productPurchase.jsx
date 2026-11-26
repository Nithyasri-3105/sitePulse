
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
    <div>
      <h2>Product Purchase Tracking</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Product Name</label>
        <input type="text" placeholder=" Enter" {...register("productName")} />
        <p>{errors.productName?.message}</p>
        <br />

        <label>Category</label>
        <input type="text" placeholder=" Enter" {...register("category")} />
        <p>{errors.category?.message}</p>
        <br />

        <label>Quantity</label>
        <input type="number" placeholder=" Enter" {...register("quantity")} />
        <p>{errors.quantity?.message}</p>
        <br />

        <label>Unit</label>
        <input type="text" placeholder=" Enter"  {...register("unit")} />
        <p>{errors.unit?.message}</p>
        <br />

        <label>Price Per Unit</label>
        <input type="number" placeholder=" Enter" {...register("price")} />
        <p>{errors.price?.message}</p>
        <br />

        <label>Purchase Date</label>
        <input type="date"  {...register("purchaseDate")} />
        <p>{errors.purchaseDate?.message}</p>
        <br />

        <p>Total Cost: ₹{totalCost}</p>

        <button type="submit">Save Purchase</button>
      </form>

      <button onClick={() => navigate("/engineer/complaints")}>Previous</button>

      <button onClick={() => navigate("/engineer/dashboard")}>
        Back to Dashboard
      </button>
    </div>
  );
}

export default ProductPurchase;
