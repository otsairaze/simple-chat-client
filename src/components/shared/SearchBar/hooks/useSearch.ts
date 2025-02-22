import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { getUsers } from "../../../../api/requests/users";

const schema = z.object({
  search: z.string(),
});

export const useSearch = () => {
  const { register, watch, setValue } = useForm({
    resolver: zodResolver(schema),
  });

  const searchValue = watch("search", "");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (searchValue.trim() !== "") {
        try {
          const response = await getUsers(searchValue);
          setResults(response.data);
        } catch (error) {
          console.error("Ошибка запроса:", error);
        }
      } else {
        setResults([]);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchValue]);

  return {
    register,
    searchValue,
    setSearchValue: (value: string) => setValue("search", value),
    results,
  };
};
