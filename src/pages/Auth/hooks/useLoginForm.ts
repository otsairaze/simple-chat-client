import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginSchema } from "../constants/LoginSchema";
import { postLogin } from "../../../api";
import { useNavigate } from "react-router-dom";

export const useLoginForm = () => {
  const { register, formState, handleSubmit } = useForm({
    mode: "onSubmit",
    resolver: zodResolver(LoginSchema),
  });

  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data: any) => {
    try {
      const response = await postLogin(data);
      console.log(response);
      localStorage.setItem("token", response.data);
      navigate("/");
    } catch (error) {
      console.error("Ошибка регистрации:", error);
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
