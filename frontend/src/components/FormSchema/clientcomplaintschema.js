
import z from "zod";

export const clientcomplaintschema = z.object({
    category: z.string().min(1, "Select category"),
    title: z.string().min(3, "Enter complaint title"),
    description: z.string().min(5, "Enter description"),
    rating: z.coerce.number().min(1, "Select rating").max(5, "Maximum rating is 5")
});
