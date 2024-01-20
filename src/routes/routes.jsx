import Home from "../page/Home/Home";
import ForgetPassword from "../page/ForgotPassword/ForgetPassword";
import OnBoarding from "../page/Onboarding/OnBoarding";
import Login from "../page/Auth/Login/Login";
import Register from "../page/Auth/Register/Register";
import EmployeeRecord from "../page/EmployeeRecord/EmployeeRecord";
import Settings from "../page/Settings/Settings";
import Support from "../page/Support/Support";
export const routes = [
  {
    key: "onboarding-process",
    path: "/",
    element: <OnBoarding />,
  },
  {
    key: "login-page",
    path: "/auth/login",
    element: <Login />,
  },
  {
    key: "register-page",
    path: "/auth/register",
    element: <Register />,
  },
  {
    key: "forget-password-page",
    path: "/auth/forget-password",
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
  {
    key: "suppory-page",
    path: "/support",
    element: <Support />,
  },
];
