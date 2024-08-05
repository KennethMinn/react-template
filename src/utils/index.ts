import axios from "axios";

export const refresh = async () => {
  const res = await axios.get("/auth/refresh", {
    withCredentials: true, //this ensures cookies are included in requests
  });
  const token = res.data.accessToken;
  return token;
};
