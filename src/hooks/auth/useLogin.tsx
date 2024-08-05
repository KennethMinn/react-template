import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../lib/axios/axiosInstance";
import Cookies from "js-cookie";
import { useAuth, User } from "./useAuth";

interface Payload {
  email: string;
  password: string;
}

export const useLogin = () => {
  const { setAuth } = useAuth();
  return useMutation({
    mutationFn: async (data: Payload) => {
      const res = await axiosInstance.post("/auth/login", data);
      const { user, token } = await res.data;
      Cookies.set("accessToken", token);
      setAuth({ ...user });
      return user as User;
    },
  });
};
