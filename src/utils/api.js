import axios from "axios";
import { deleteAuthToken, getAuthToken } from "./authToken";
import history from "./history";

const defaults = {
  baseURL: "https://sore-teal-python-tux.cyclic.app",
  headers: () => ({
    "Content-Type": "application/json",
    Authorization: getAuthToken() ? `Bearer ${getAuthToken()}` : undefined,
  }),
  error: {
    code: "INTERNAL_ERROR",
    message: "Something went wrong. Please check your internet connection",
    status: 503,
    data: {},
  },
};

const api = (method, url, variables) =>
  new Promise((resolve, reject) => {
    axios({
      url: `${defaults.baseURL}${url}`,
      method,
      headers: defaults.headers(),
      params: method === "get" ? variables : undefined,
      data: method !== "get" ? variables : undefined,
    }).then(
      (response) => {
        resolve(response.data);
      },
      (error) => {
        console.log(error);
        if (error.response) {
          if (error.response.data.error.code === "INVALID_TOKEN") {
            deleteAuthToken();
            history.push("/auth/login");
          } else {
            reject(error.response.data.error);
          }
        } else {
          reject(defaults.error);
        }
      }
    );
  });

export default {
  get: (...args) => api("get", ...args),
  post: (...args) => api("post", ...args),
  put: (...args) => api("put", ...args),
  patch: (...args) => api("patch", ...args),
  delete: (...args) => api("delete", ...args),
};
