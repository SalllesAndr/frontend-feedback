import { z } from "zod";

export const feedbackSchema = z.object({
  target_id: z
    .string().min(1),
  given_by: z
    .string().min(1),
  feedback: z
    .string()
    .min(1)
    .max(255),
});

export type FeedbackSchema = z.infer<typeof feedbackSchema>;
