import { useEffect, useState } from "react";

import { useSearch } from "./useSearch";
import { getContacts } from "../../../../api/requests/contacts/getContacts";

type UserQuery = {
  search: string;
};

export const useFindContacts = () => {
  const { valueInput } = useSearch();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await getContacts<UserQuery>({ search: valueInput });

        setUsers(res.data);
        console.log("Пользователи загружены:", res.data);
      } catch (error) {
        console.error("Ошибка при загрузке пользователей:", error);
      }
    };

    fetchContacts();
  }, [valueInput]);

  return { users, valueInput };
};
