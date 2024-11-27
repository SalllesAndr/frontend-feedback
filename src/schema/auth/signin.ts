import { z } from "zod";

export const signInSchema = z.object({
  email: z
    .string()
    .email("Email is invalid."),
  password: z
    .string()
});

export type SignInSchema = z.infer<typeof signInSchema>;
