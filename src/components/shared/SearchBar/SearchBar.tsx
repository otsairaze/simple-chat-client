import clsx from "clsx";
import { InputCompound } from "../../ui";
import { SearchSvg } from "../../../assets/svg/SearchSvg";
import { useSearch } from "./hooks/useSearch";

interface SearchBarProps {
  className?: string;
  onSearch: (value: string) => void;
}

export const SearchBar = ({ className, onSearch }: SearchBarProps) => {
  const { register } = useSearch();

  return (
    <div className={clsx("mb-5", className)}>
      <InputCompound className="flex items-center">
        <SearchSvg className="absolute" />
        <InputCompound.Input
          placeholder="Search"
          variant="search"
          {...register("search", {
            onChange: (e) => onSearch(e.target.value),
          })}
        />
      </InputCompound>
    </div>
  );
};
