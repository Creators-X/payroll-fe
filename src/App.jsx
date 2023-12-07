import { Route, Routes } from "react-router-dom";
import Button from "./components/Button";
import OnBoarding from "./page/OnBoarding";
import AuthLayout from "./components/AuthLayout";
import Auth from "./page/Auth";
import ForgetPassword from "./page/ForgetPassword";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<OnBoarding />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
      </Route>
    </Routes>
  );
}

export default App;
