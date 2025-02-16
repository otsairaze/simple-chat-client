import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginSchema } from "../constants/LoginSchema";

export const useLoginForm = () => {
  const { register, formState, handleSubmit } = useForm({
    mode: "onSubmit",
    resolver: zodResolver(LoginSchema),
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
