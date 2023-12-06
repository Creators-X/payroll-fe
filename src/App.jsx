import { Route, Routes } from "react-router-dom";
import Button from "./components/Button";
import OnBoarding from "./page/OnBoarding";
import AuthLayout from "./components/AuthLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<OnBoarding />} />
      </Route>
    </Routes>
  );
}

export default App;
