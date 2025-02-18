import { api } from "../../instance";
import { API_URL } from "../../constants";

interface RegisterData {
  fullName: string;
  email: string;
  password: string;
}

export const postRegister = async (data: RegisterData) => {
  return await api.post(API_URL.REGISTER, data);
};
