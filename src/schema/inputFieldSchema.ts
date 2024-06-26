import { z } from "zod";
export const fullNameSchema = z
  .string()
  .min(3, "Password must be at least 3 characters long")
  .regex(
    /^[a-zA-Z]+(?:[ '-][a-zA-Z]+)*$/,
    "FUll name error"
  );
export const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters long")
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/,
    "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
  );
export const emailSchema = z.string().email("Invalid email address");
export const loginSchema = z.object({
  loginEmail: emailSchema,
  loginPassword: passwordSchema,
  remember_me: z.boolean(),
});
export const registerSchema = z.object({
  registerName: fullNameSchema,
  registerEmail: emailSchema,
  registerPassword: passwordSchema,
  terms: z.boolean(),
});
export const forgotPasswordSchema = z.object({
  forgotPasswordEmail: emailSchema,
});
export const resetPasswordSchema = z.object({
  resetPasswordPassword: passwordSchema,
  resetPasswordConfirmPassword: passwordSchema,
});
export const changePasswordSchema = z.object({
  changePasswordCurrentPassword: passwordSchema,
  changePasswordNewPassword: passwordSchema,
  changePasswordConfirmPassword: passwordSchema,
});
