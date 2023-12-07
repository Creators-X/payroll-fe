import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/AuthLayout";
import AppLayout from "./components/AppLayout";
import { privateRoutes, routes } from "./routes/routes";
import RequireAuth from "./components/Auth/Auth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        {routes.map((routeEl, index) => {
          console.log(<Route {...routeEl} />);
          return <Route {...routeEl} />;
        })}
      </Route>
      <Route element={<AppLayout />}>
        {privateRoutes.map(({ element, ...otherProps }) => (
          <Route
            element={<RequireAuth>{element}</RequireAuth>}
            {...otherProps}
          />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
