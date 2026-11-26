
import z from "zod";

export const purchaseschema = z.object({
    productName: z.string().min(1, "Enter product name"),
    category: z.string().min(1, "Select category"),
    quantity: z.coerce.number().min(1, "Enter quantity"),
    unit: z.string().min(1, "Select unit"),
    price: z.coerce.number().min(1, "Enter price"),
    purchaseDate: z.string().min(1, "Select purchase date")
});
