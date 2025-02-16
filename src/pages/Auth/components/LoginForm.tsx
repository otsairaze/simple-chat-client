import { Typography } from "../../../components/shared";
import { Button, InputCompound } from "../../../components/ui";
import { useLoginForm } from "../hooks/useLoginForm";

export const LoginForm = () => {
  const { errors, register, onSubmit } = useLoginForm();
  return (
    <form className="flex flex-col gap-[35px]" onSubmit={onSubmit}>
      <Typography className="text-center" variant="title28_semibold" tag="h2">
        Authorization
      </Typography>
      <InputCompound>
        <InputCompound.Input
          placeholder="Email"
          variant="primary"
          {...register("email")}
        />
        <InputCompound.Error error={errors.email?.message} />
      </InputCompound>
      <InputCompound>
        <InputCompound.Input
          placeholder="Password"
          variant="primary"
          {...register("password")}
        />
        <InputCompound.Error error={errors.password?.message} />
      </InputCompound>
      <Button variant="outlined" type="submit">
        Login
      </Button>
    </form>
  );
};
