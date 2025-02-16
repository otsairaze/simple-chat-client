import { FormType, FormVariant } from "../constants";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

interface RenderFormProps {
  activeForm: FormType;
}

export const RenderForm = ({ activeForm }: RenderFormProps) => {
  switch (activeForm) {
    case FormVariant.Login:
      return <LoginForm />;
    case FormVariant.Register:
      return <RegisterForm />;
  }
};
