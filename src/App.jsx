import { Route, Routes } from "react-router-dom";
import OnBoarding from "./page/OnBoarding";
import AuthLayout from "./components/AuthLayout";
import Auth from "./page/Auth";
import ForgetPassword from "./page/ForgetPassword";
import AppLayout from "./components/AppLayout";
import Home from "./page/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<OnBoarding />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
      </Route>
      <Route element={<AppLayout />}>
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
