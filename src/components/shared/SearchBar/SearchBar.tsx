import clsx from "clsx";
import { InputCompound } from "../../ui";
import { SearchSvg } from "../../../assets/svg/SearchSvg";

interface SearchBarProps {
  className?: string;
}

export const SearchBar = ({ className }: SearchBarProps) => {
  return (
    <div className={clsx("mb-5", className)}>
      <InputCompound className="flex items-center">
        <SearchSvg className="absolute" />
        <InputCompound.Input placeholder="Search" variant="search" />
      </InputCompound>
    </div>
  );
};
