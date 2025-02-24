import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(5).max(20),
  email: z.string().email().min(5).max(20),
});

export type ContactSchema = z.infer<typeof contactSchema>;

export type ContactSchemaKeys = keyof ContactSchema;
