import { API_URL } from "../../constants";
import { api } from "../../instance";

export const getUsers = async <T extends Record<string, string>>(query: T) => {
  const queryString = new URLSearchParams(query);

  return await api.get(API_URL.USERS + "?" + queryString, { withCredentials: true });
};
