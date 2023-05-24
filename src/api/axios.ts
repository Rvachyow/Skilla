import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.skilla.ru/mango/",
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = "Bearer testtoken";
  return config;
});

export default instance;
