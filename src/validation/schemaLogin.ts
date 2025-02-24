import { z } from "zod";

export const schemaLogin = z.object({
  email: z.string().trim().email({
    message: "Email tidak valid",
  }),
  password: z
    .string()
    .trim()
    .min(6, {
      message: "Password harus minimal 6 karakter",
    })
    .max(50, {
      message: "Password maksimal 50 karakter",
    })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
      {
        message:
          "Password harus mengandung minimal satu huruf besar, satu huruf kecil, satu angka, dan satu karakter khusus",
      },
    ),
});
