import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RegisterSchema } from "../constants";

export const useRegisterForm = () => {
  const { register, formState, handleSubmit } = useForm({
    mode: "onSubmit",
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  return {
    register,
    formState,
    handleSubmit,
    onSubmit,
    errors: formState.errors,
  };
};
