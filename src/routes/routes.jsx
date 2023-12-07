import React from "react";
import Home from "../page/Home";
import ForgetPassword from "../page/ForgetPassword";
import OnBoarding from "./../page/OnBoarding";
import Login from "./../page/Auth";
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
];
