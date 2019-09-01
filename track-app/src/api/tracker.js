import { AsyncStorage } from "react-native";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://f44bfe1e.ngrok.io"
});

// intercepter for each request.
// check if it localStorage has token? Then attach the token to the headear.
// otherwise, attach nothing.
axiosInstance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  err => Promise.reject(err)
);

export default axiosInstance;
