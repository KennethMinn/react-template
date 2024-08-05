import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { axiosInstance } from "./axiosInstance";
import Cookies from "js-cookie";
import { refresh } from "../../utils";

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  _retry?: boolean;
}

export const OnResponseFulfilled = (response: AxiosResponse) => {
  return response;
};

export const onResponseError = async (
  error: AxiosError
): Promise<AxiosError> => {
  const prevRequest = error?.config as CustomAxiosRequestConfig;
  if (error?.response?.status === 401 && !prevRequest?._retry) {
    prevRequest._retry = true;
    try {
      const newAccessToken = await refresh();
      Cookies.set("accessToken", newAccessToken); //set new access token
      if (prevRequest.headers) {
        prevRequest.headers.Authorization = `Bearer ${newAccessToken}`;
      }
      return axiosInstance(prevRequest); //recall Api with new token
    } catch (error) {
      Cookies.remove("accessToken");
      localStorage.removeItem("user");
      alert("log out");
      // Handle token refresh failure
      // mostly logout the user and re-authenticate by login again
    }
  }
  return Promise.reject(error);
};
