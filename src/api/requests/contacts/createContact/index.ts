import { API_URL } from "../../..";
import { api } from "../../../instance";

interface ContactProps {
  name: string;
  email: string;
}

export const postCreateContact = async (data: ContactProps) => {
  return await api.post(API_URL.ADDCONTACT, data);
};
