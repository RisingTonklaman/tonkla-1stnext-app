import { z } from "zod";

export const loginSchema = z.object({
  phone: z
    .string()
    .regex(/^0[0-9]{9}$/, "Phone number must be 10 digits and start with 0"),

  password: z.string().regex(/^[0-9]{4}$/, "Password must be exactly 4 digits"),
});
