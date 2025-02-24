import { Button, InputCompound } from "../../../ui";
import { useCreateContact } from "../hooks";

export const AddContactForm = () => {
  const { errors, register, onSubmit } = useCreateContact();

  return (
    <form className="flex flex-col gap-[35px] " onSubmit={onSubmit}>
      <div className="flex flex-col gap-5">
        <InputCompound className="flex flex-col">
          <InputCompound.Title id="name" title="Name">
            Name
          </InputCompound.Title>
          <InputCompound.Input placeholder="Name" variant="secondary" {...register("name")} />
          <InputCompound.Error error={errors.name?.message} />
        </InputCompound>
        <InputCompound className="flex flex-col">
          <InputCompound.Title id="Email" title="Email">
            Email
          </InputCompound.Title>
          <InputCompound.Input placeholder="E-mail" variant="secondary" {...register("email")} />
          <InputCompound.Error error={errors.email?.message} />
        </InputCompound>
      </div>

      <Button variant="primary" type="submit">
        Create
      </Button>
    </form>
  );
};
