import { useState } from "react";
import { loginSchema } from "../../config/schema";
import useSubmit from "../../hook/useSubmit";
import { Link } from "react-router-dom";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const Auth = () => {
  const [loginError, setLoginError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  const { register, handleSubmit: newSubmit, errors } = useSubmit(loginSchema);
  const onLogin = (data) => {
    console.log(data);
  };
  return (
    <div className="w-full max-w-[676px] mx-auto p-[20] h-screen flex flex-col gap-5 items-center justify-center ">
      <div className="flex flex-col gap-3 text-center">
        <h1 className="text-foundation-blue-b-300 font-medium text-3xl">
          Log In
        </h1>
        <p className="text-grey text-lg">
          Fill in the following to access the admin dashboard
        </p>
      </div>
      <form
        className="w-full grid gap-[15px] p-4 "
        onSubmit={newSubmit(onLogin)}
      >
        <div className="w-full grid gap-[10px]">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            placeholder="e.g user@gmail.com"
            className=" p-[10px] border-[#E8E8E8] border "
            {...register("email")}
          />
          {errors.email && (
            <p style={{ textTransform: "capitalize" }} className="text-red-600">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="w-full grid gap-[10px]">
          <label htmlFor="password">Password</label>
          <div className="w-full flex gap-2">
            <input
              id="password"
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              className=" w-full p-[10px] border-[#E8E8E8] border "
              {...register("password")}
            />
            <button type="button" onClick={togglePasswordVisibility}>
              {passwordVisible ? (
                <IoEyeOutline size={30} />
              ) : (
                <IoEyeOffOutline size={30} />
              )}
            </button>
          </div>
          {errors.password && (
            <p style={{ textTransform: "capitalize" }} className="text-red-600">
              {errors.password.message}
            </p>
          )}
        </div>
        {loginError && (
          <p style={{ textTransform: "capitalize" }} className="text-red-600">
            {loginError}
          </p>
        )}
        <Link
          className="text-foundation-blue-b-300 text-lg font-semibold"
          to="/forget-password"
        >
          Forget Password?
        </Link>
        <button
          //   disabled={loading}
          type="submit"
          className="px-[30px] py-[10px] rounded-md border w-full font-bold bg-foundation-blue-b-300 max-w-[260px] mx-auto  text-white"
        >
          {"Sign in"}
        </button>
      </form>
    </div>
  );
};

export default Auth;
