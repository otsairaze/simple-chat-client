import { API_URL } from "../../..";
import { api } from "../../../instance";

export const getContacts = async <T extends Record<string, string>>(query: T) => {
  const queryString = new URLSearchParams(query);

  return await api.get(API_URL.GETCONTACTS + "?" + queryString, { withCredentials: true });
};
