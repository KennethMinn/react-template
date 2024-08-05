import { AxiosError, InternalAxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

export const onRequestFulfilled = (
  request: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  const token = Cookies.get("accessToken");
  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
};

export const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  console.error(`[request error] : [${JSON.stringify(error)}]`);
  console.log(error.request);
  return Promise.reject(error);
};
