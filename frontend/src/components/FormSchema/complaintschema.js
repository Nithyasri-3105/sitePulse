
import z from "zod";

export const complaintschema = z.object({
    complaintTitle: z.string().min(1, "Enter complaint title"),
    response: z.string().min(1, "Enter response"),
    status: z.string().min(1, "Select status"),
    resolution: z.string().min(1, "Enter resolution")
});
