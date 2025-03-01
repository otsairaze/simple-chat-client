import { useEffect, useState } from "react";

import { getUsers } from "../../../../api/requests/users";

import { useGlobalSearch } from "./useGlobalSearch";

export const useFindUsers = () => {
  const { valueInput } = useGlobalSearch();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (valueInput) {
      const fetchUsers = async () => {
        try {
          const res = await getUsers({
            params: {
              query: {
                username: valueInput,
              },
            },
          });
          console.log(valueInput);
          setUsers(res.data);
          console.log("Пользователи загружены:", res.data);
        } catch (error) {
          console.error("Ошибка при загрузке пользователей:", error);
        }
      };

      fetchUsers();
    } else {
      setUsers([]);
    }
  }, [valueInput]);

  return { users, valueInput };
};
