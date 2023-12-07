import { Navigate } from "react-router-dom/dist";

function RequireAuth({ children }) {
  // this will be the authentication logic
  const isAuthenticated = true;

  return isAuthenticated ? children : <Navigate to={"/login"} />;
}

export default RequireAuth;
