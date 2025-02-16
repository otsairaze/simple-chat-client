export const FormVariant = {
  Login: "Login",
  Register: "Register",
} as const;

type FormVariantType = typeof FormVariant;

export type FormType = FormVariantType[keyof FormVariantType];

export * from "./RegisterSchema";
