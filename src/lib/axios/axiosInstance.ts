import axios from "axios";
import { onRequestError, onRequestFulfilled } from "./requestHandler";
import { onResponseError, OnResponseFulfilled } from "./responseHandler";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  //withCredentials: true, //this ensures cookies are included in requests
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(onRequestFulfilled, onRequestError);
axiosInstance.interceptors.response.use(OnResponseFulfilled, onResponseError);
