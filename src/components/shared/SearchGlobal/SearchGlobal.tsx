import clsx from "clsx";
import { InputCompound } from "../../ui";
import { SearchSvg } from "../../../assets/svg/SearchSvg";

import { useGlobalSearch } from "./hooks/useGlobalSearch";

interface SearchBarProps {
  className?: string;
}

export const SearchGlobal = ({ className }: SearchBarProps) => {
  const { onChangeValue, valueInput } = useGlobalSearch();

  return (
    <div className={clsx("mb-5", className)}>
      <InputCompound className="flex items-center">
        <SearchSvg className="absolute" />
        <InputCompound.Input placeholder="Search" variant="search" onChange={onChangeValue} value={valueInput} />
      </InputCompound>
    </div>
  );
};
