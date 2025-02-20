import { InputCompound } from "../../ui";

export const SearchBar = () => {
  return (
    <div className="mb-5">
      <InputCompound>
        <InputCompound.Input placeholder="Search" variant="search" />
      </InputCompound>
    </div>
  );
};
