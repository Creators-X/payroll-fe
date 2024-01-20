import Cookies from "js-cookie";

const storeAuthToken = (token) =>
  Cookies.set("authToken", token, {
    expires: 7,
    secure: true,
    sameSite: "Strict",
  });

const getAuthToken = () => Cookies.get("authToken");

const deleteAuthToken = () => Cookies.remove("authToken");

const storeAdmin = (data) =>
  localStorage.setItem("admin", JSON.stringify(data));

const getAdmin = () => JSON.parse(localStorage.getItem("admin"));

const removeAdmin = () => localStorage.removeItem("admin");
export {
  storeAuthToken,
  getAuthToken,
  deleteAuthToken,
  storeAdmin,
  getAdmin,
  removeAdmin,
};
