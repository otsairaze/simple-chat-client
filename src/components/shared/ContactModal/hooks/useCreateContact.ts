import { useForm } from "react-hook-form";
import { contactSchema, ContactSchema } from "../constants/ContactSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { postCreateContact } from "../../../../api/requests/contacts/createContact";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../../../store/features/auth/authSlice";

export const useCreateContact = () => {
  const user = useSelector((state: any) => state.auth.user);

  const dispatch = useDispatch();

  const { register, formState, handleSubmit } = useForm<ContactSchema>({
    mode: "onSubmit",
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = handleSubmit(async (data: ContactSchema) => {
    try {
      console.log("User Data from Redux:", user);
      if (!user?.id) {
        throw new Error("Ошибка: userId не найден");
      }

      const response = await postCreateContact({ ...data, userId: user.id });

      console.log(response);

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
