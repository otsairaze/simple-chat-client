import { Button, InputCompound } from "../../../../ui";
import { useContact } from "../../hooks";

export const AddContactForm = () => {
  const { errors, register, onSubmit } = useContact();

  return (
    <form className="flex flex-col gap-[35px]" onSubmit={onSubmit}>
      <InputCompound className="flex flex-col">
        <InputCompound.Title id="name" title="Name">
          Name
        </InputCompound.Title>
        <InputCompound.Input placeholder="Name" variant="secondary" {...register("name")} />
        <InputCompound.Error error={errors.name?.message} />
      </InputCompound>
      <InputCompound className="flex flex-col">
        <InputCompound.Title id="Phone" title="Phone">
          Phone
        </InputCompound.Title>
        <InputCompound.Input placeholder="E-mail" variant="secondary" {...register("email")} />
        <InputCompound.Error error={errors.email?.message} />
      </InputCompound>
      <Button variant="outlined" type="submit">
        Create
      </Button>
    </form>
  );
};
