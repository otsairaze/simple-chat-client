import { z } from "zod";

export const RegisterSchema = z.object({
  username: z.string().min(5).max(20),
  email: z.string().email(),
  password: z.string().min(6),
});
