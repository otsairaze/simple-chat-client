import { useForm } from "react-hook-form";
import { ContactSchema } from "../constants/ContactSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export const useContact = () => {
  const { register, formState, handleSubmit } = useForm({
    mode: "onSubmit",
    resolver: zodResolver(ContactSchema),
  });

  const onSubmit = handleSubmit(async (data: any) => {
    try {
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  });

  return {
    register,
    formState,
    handleSubmit,
    onSubmit,
    errors: formState.errors,
  };
};
