import { useMutation } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import Cookies from "js-cookie";
import { axiosInstance } from "../../lib/axios/axiosInstance";

export const useLogOut = () => {
  const { setAuth } = useAuth();

  return useMutation({
    mutationFn: async () => {
      Cookies.remove("accessToken");
      localStorage.removeItem("user");
      setAuth(null);
      await axiosInstance.post("/auth/logout");
    },
  });
};
