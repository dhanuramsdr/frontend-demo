import { z } from "zod";
export const registerSchema = z.object({
  name: z.string().min(1, "name is required"),
  email: z.string().email("Invalied email"),
  password: z.string().min(6, "password is need minimum 6 char"),
  roles: z.string(),
});

export type registerData = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  email: z.string().email("Invalied email"),
  password: z.string().min(6, "Invalied Password"),
});

export type loginData = z.infer<typeof loginSchema>;
