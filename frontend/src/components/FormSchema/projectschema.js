
import z from "zod";

export const projectschema = z.object({
    projectName: z.string().min(3, "Enter project name"),
    clientEmail: z.string().email("Enter valid client email"),
    location: z.string().min(3, "Enter location"),
    startDate: z.string().min(1, "Select start date"),
    endDate: z.string().min(1, "Select expected completion date"),
    budget: z.coerce.number().min(1, "Enter valid budget"),
    description: z.string().min(1, "Enter project description")
});
