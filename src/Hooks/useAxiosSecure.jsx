import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import { use, useEffect } from "react";
import { useNavigate } from "react-router";

const instance = axios.create({
  baseURL: "https://eco-track-server-10.vercel.app",
});

const useAxiosSecure = () => {
  const { user, signOutUser } = use(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const requestInterceptor = instance.interceptors.request.use((config) => {
      const token = user.accessToken;
      if (token) {
        config.headers.authorization = `Bearer ${token}`;
      }
      return config;
    });

    const responseInterceptor = instance.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        const status = err.response?.status;
        if (status === 401 || status === 403) {
          signOutUser().then(() => {
            navigate("/login");
          });
        }
        return Promise.reject(err);
      }
    );

    return () => {
      instance.interceptors.request.eject(requestInterceptor);
      instance.interceptors.request.eject(responseInterceptor);
    };
  }, [user, signOutUser, navigate]);

  return instance;
};

export default useAxiosSecure;
