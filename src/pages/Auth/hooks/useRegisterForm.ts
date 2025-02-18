import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RegisterSchema } from "../constants";
import { postRegister } from "../../../api";
import { useNavigate } from "react-router-dom";

export const useRegisterForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onSubmit",
    resolver: zodResolver(RegisterSchema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    try {
      const response = await postRegister(data);
      console.log(response);
      localStorage.setItem("token", response.data.accessToken);
      navigate("/");
    } catch (error) {
      console.error("Ошибка регистрации:", error);
    }
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
  };
};
