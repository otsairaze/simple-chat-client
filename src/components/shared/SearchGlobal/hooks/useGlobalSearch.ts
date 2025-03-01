import { ChangeEvent, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGlobalSearchValue } from "../../../../store/features";

export const useGlobalSearch = () => {
  const valueInput = useSelector((state: any) => state.search.globalValue);

  const dispatch = useDispatch();

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => dispatch(setGlobalSearchValue(e.target.value)), [dispatch]);

  return { onChangeValue: handleChange, valueInput };
};
