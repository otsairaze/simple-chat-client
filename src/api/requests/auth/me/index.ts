import { API_URL } from "../../..";
import { api } from "../../../instance";

export const getMe = async () => {
  return await api.get(API_URL.AUTHME);
};
