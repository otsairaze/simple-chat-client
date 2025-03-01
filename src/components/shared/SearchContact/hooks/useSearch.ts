import { ChangeEvent, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../../../../store/features/search/searchSlice";

export const useSearch = () => {
  const valueInput = useSelector((state: any) => state.search.value);
  const dispatch = useDispatch();

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => dispatch(setSearchValue(e.target.value)), [dispatch]);

  return { onChangeValue: handleChange, valueInput };
};
