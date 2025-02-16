import { useState } from "react";

import { RenderForm } from "./components";
import { FormType } from "./constants";
import { Button } from "../../components/ui";

export const AuthPage = () => {
  const [activeForm, setActiveForm] = useState<FormType>("Login");

  function handleChangeForm() {
    setActiveForm(activeForm === "Login" ? "Register" : "Login");
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white rounded-2xl max-w-[400px] w-full p-[50px]">
        <RenderForm activeForm={activeForm} />
        <Button onClick={handleChangeForm} variant="none" className="mt-5">
          {activeForm === "Login"
            ? "You don't have an account? Sign up"
            : "Already have an account? Sign in"}
        </Button>
      </div>
    </div>
  );
};
