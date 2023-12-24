import Home from "../page/Home";
import ForgetPassword from "../page/ForgetPassword";
import OnBoarding from "./../page/OnBoarding";
import Login from "./../page/Auth";
import EmployeeRecord from "../page/EmployeeRecord";
export const routes = [
  {
    key: "onboarding-process",
    path: "/",
    element: <OnBoarding />,
  },
  {
    key: "login-page",
    path: "/login",
    element: <Login />,
  },
  {
    key: "forget-password-page",
    path: "/forget-password",
    element: <ForgetPassword />,
  },
];

export const privateRoutes = [
  {
    key: "home-page",
    path: "/home",
    element: <Home />,
  },
  {
    key: "employee-record",
    path: "/employee-record",
    element: <EmployeeRecord />,
  },
];
