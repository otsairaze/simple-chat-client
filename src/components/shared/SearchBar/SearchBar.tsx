import clsx from "clsx";
import { InputCompound } from "../../ui";
import { SearchSvg } from "../../../assets/svg/SearchSvg";
import { useSearch } from "./hooks/useSearch";

interface SearchBarProps {
  className?: string;
}

export const SearchBar = ({ className }: SearchBarProps) => {
  const { onChangeValue, valueInput } = useSearch();

  return (
    <div className={clsx("mb-5", className)}>
      <InputCompound className="flex items-center">
        <SearchSvg className="absolute" />
        <InputCompound.Input placeholder="Search" variant="search" onChange={onChangeValue} value={valueInput} />
      </InputCompound>
    </div>
  );
};
