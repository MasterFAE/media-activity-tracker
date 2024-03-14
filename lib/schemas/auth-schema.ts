import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().email(),
  username: z.string().min(3).max(20),
  password: z.string().min(8),
  passwordConfirmation: z.string().min(8),
  acceptTerms: z.boolean(),
  // z.literal(true, {
  //   errorMap: (error) => ({
  //     message: "You must accept the terms",
  //   })
  // }),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
