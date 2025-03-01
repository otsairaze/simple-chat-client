import axios from "axios";

export type AxiosRequestConfig<Params = undefined> = Params extends undefined
  ? {
      config?: import("axios").AxiosRequestConfig;
    }
  : {
      params: Params;
      config?: import("axios").AxiosRequestConfig;
    };

export const api = axios.create({
  baseURL: "http://localhost:4000",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;

  return config;
});
