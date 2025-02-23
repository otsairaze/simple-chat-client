import { useEffect, useState } from "react";
import { getUsers } from "../../../../api";
import { useSearch } from "./useSearch";

type UserQuery = {
  search: string;
};

export const useFindContacts = () => {
  const { valueInput } = useSearch();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await getUsers<UserQuery>({ search: valueInput });
        setUsers(res.data);
      } catch (error) {
        console.error("Ошибка при загрузке пользователей:", error);
      }
    };

    fetchUsers();
  }, [valueInput]);

  return { users, valueInput };
};
