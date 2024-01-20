import { Navigate } from "react-router-dom/dist";
import { getAuthToken } from "../../utils/authToken";

function RequireAuth({ children }) {
  // this will be the authentication logic
  const isAuthenticated = getAuthToken();

  return isAuthenticated ? children : <Navigate to={"/auth/login"} />;
}

export default RequireAuth;
