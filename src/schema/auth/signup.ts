import { z } from "zod";

export const signUpSchema = z.object({
  email: z
    .string()
    .email("Email is invalid."),
  username: z
    .string()
    .min(3, "The username must be at least 3 characters.")
    .max(20, "The username must be at most 20 characters.")
    .regex(/^[a-zA-Z0-9_]+$/, "The username can only contain letters, numbers, and underscores."),
  password: z
    .string()
    .min(6, "The password must be at least 6 characters.")
    .max(16, "The password must be at most 16 characters.")
    .regex(/[A-Za-z]/, "The password must contain at least one letter.")
    .regex(/\d/, "The password must contain at least one number.")
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
