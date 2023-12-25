import Home from "../page/Home/Home";
import ForgetPassword from "../page/ForgotPassword/ForgetPassword";
import OnBoarding from "../page/Onboarding/OnBoarding";
import Login from "./../page/Auth/Auth";
import EmployeeRecord from "../page/EmployeeRecord/EmployeeRecord";
import Settings from "../page/Settings/Settings";
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
  {
    key: "settings-page",
    path: "/settings",
    element: <Settings />,
  },
];
