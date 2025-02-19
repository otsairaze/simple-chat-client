import { Typography } from "../../../components/shared";
import { Button, InputCompound } from "../../../components/ui";
import { useRegisterForm } from "../hooks/useRegisterForm";

export const RegisterForm = () => {
  const { errors, register, onSubmit } = useRegisterForm();

  return (
    <form className="flex flex-col gap-[35px]" onSubmit={onSubmit}>
      <Typography className="text-center" variant="title28_semibold" tag="h2">
        Registration
      </Typography>
      <InputCompound>
        <InputCompound.Input placeholder="Username" variant="primary" {...register("username")} />
        <InputCompound.Error error={errors.username?.message} />
      </InputCompound>
      <InputCompound>
        <InputCompound.Input placeholder="Email" variant="primary" {...register("email")} />
        <InputCompound.Error error={errors.email?.message} />
      </InputCompound>
      <InputCompound>
        <InputCompound.Input type="password" placeholder="Password" variant="primary" {...register("password")} />
        <InputCompound.Error error={errors.password?.message} />
      </InputCompound>
      <Button variant="outlined" type="submit">
        Register
      </Button>
    </form>
  );
};
