import { useForm } from "react-hook-form";
import { ContactSchema } from "../constants/ContactSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { postCreateContact } from "../../../../api/requests/contacts/createContact";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../../../store/features/auth/authSlice";

export const useContact = () => {
  const user = useSelector((state: any) => state.auth.user);

  const dispatch = useDispatch();

  const { register, formState, handleSubmit } = useForm({
    mode: "onSubmit",
    resolver: zodResolver(ContactSchema),
  });

  const onSubmit = handleSubmit(async (data: any) => {
    try {
      console.log("User Data from Redux:", user);
      if (!user?.id) {
        throw new Error("Ошибка: userId не найден");
      }

      const response = await postCreateContact({ ...data, userId: user.id });

      dispatch(addContact(response.data));

      console.log("Contact Created:", response);
    } catch (e) {
      console.error("Error Creating Contact:", e);
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
