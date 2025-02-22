import { API_URL } from "../../constants";
import { api } from "../../instance";

export const getUsers = async (query: string) => {
  return await api.get(API_URL.ADDCONTACT + `?search=${query}`, { withCredentials: true });
};
