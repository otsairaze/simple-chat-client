import { API_URL } from "../../constants";
import { api, AxiosRequestConfig } from "../../instance";

type UserQuery = {
  query: {
    username: string;
  };
};

type GetUsersConfg = AxiosRequestConfig<UserQuery>;

export const getUsers = async ({ params, config }: GetUsersConfg) => {
  const queryString = params.query && new URLSearchParams(params.query);

  return await api.get(`${API_URL.USERS}?${queryString}`, config);
};
