import z from "zod";

export const registerschema = z.object({
    name: z.string().min(3, "Name must be 3 letter"),
    email: z.string().email("enter a valid email"),
    password: z.string().min(8, "password must be 8 char"),
    confirmPassword: z.string(),
    role: z.string().min(1, "select your role")
});