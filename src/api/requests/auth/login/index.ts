import { API_URL } from "../../..";
import { api } from "../../../instance";

interface LoginData {
  email: string;
  password: string;
}

export const postLogin = async (data: LoginData) => {
  return api.post(API_URL.LOGIN, data);
};
