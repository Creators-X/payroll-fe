import { Outlet } from "react-router-dom";
import auth_size_img from "../assets/images/auth_size_img.svg";

const AuthLayout = () => {
  return (
    <div className="w-full grid  h-screen grid-cols-1 md:grid-cols-[397px,1fr]">
      <div className="w-full h-screen bg-black md:flex hidden">
        <img
          src={auth_size_img}
          className="w-full h-full object-cover"
          style={{ maxHeight: "100%" }}
          alt="auth_size_img"
        />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
