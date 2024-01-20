import { useState } from "react";
import { registerSchema } from "../../../config/schema";
import useSubmit from "../../../hook/useSubmit";
import { Link, useNavigate } from "react-router-dom";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import api from "../../../utils/api";
import Spinner from "../../../components/Spinner/Spinner";
import { storeAdmin, storeAuthToken } from "../../../utils/authToken";
import { useDispatch } from "react-redux";
import { STORE_ADMIN } from "../../../store/actions";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isConfirmPassVisible, setIsConfirmPassVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };
  const toggleConfirmPassVisibility = () => {
    setIsConfirmPassVisible((prev) => !prev);
  };

  const {
    register,
    handleSubmit: newSubmit,
    errors,
  } = useSubmit(registerSchema);
  const onRegister = async (data) => {
    setLoading(true);
    setRegisterError("");
    const payload = {
      ...data,
    };
    delete payload.confirmPassword;
    try {
      const response = await api.post("/admin/register", payload);
      if (response.status === 200) {
        storeAuthToken(response.data.token);
        const admin = {
          username: response.data.username,
          email: response.data.email,
        };

        storeAdmin(admin);
        dispatch({ type: STORE_ADMIN, payload: admin });

        navigate("/home");
      }
    } catch (error) {
      setRegisterError(
        error.response?.data?.message || error.response?.data || error.message
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full max-w-[676px] mx-auto p-[20] h-screen flex flex-col gap-5 items-center justify-center ">
      <div className="flex flex-col gap-3 text-center">
        <h1 className="text-foundation-blue-b-300 font-medium text-3xl">
          Sign Up
        </h1>
        <p className="text-grey text-lg">
          Fill in the following to onboard for debbix
        </p>
      </div>
      <form
        className="w-full grid gap-[15px] p-4 "
        onSubmit={newSubmit(onRegister)}
      >
        <div className="w-full grid gap-[10px]">
          <label htmlFor="text">Fullname</label>
          <input
            id="username"
            type="text"
            placeholder="John Doe"
            className=" p-[10px] border-[#E8E8E8] border "
            {...register("username")}
          />
          {errors.username && (
            <p style={{ textTransform: "capitalize" }} className="text-red-600">
              {errors.username.message}
            </p>
          )}
        </div>
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
        <div className="w-full grid gap-[10px]">
          <label htmlFor="password">Confirm Pasword</label>
          <div className="w-full flex gap-2">
            <input
              id="confirmPassword"
              type={isConfirmPassVisible ? "text" : "password"}
              placeholder="Confirm Password"
              className=" w-full p-[10px] border-[#E8E8E8] border "
              {...register("confirmPassword")}
            />
            <button type="button" onClick={toggleConfirmPassVisibility}>
              {isConfirmPassVisible ? (
                <IoEyeOutline size={30} />
              ) : (
                <IoEyeOffOutline size={30} />
              )}
            </button>
          </div>
          {errors.confirmPassword && (
            <p style={{ textTransform: "capitalize" }} className="text-red-600">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
        {registerError && (
          <p style={{ textTransform: "capitalize" }} className="text-red-600">
            {registerError}
          </p>
        )}
        <div className="mt-[10px]">
          <span className="mx-[10px] ">Already have an account?</span>

          <Link
            className="text-foundation-blue-b-300 text-lg font-semibold"
            to="/auth/login"
          >
            Login
          </Link>
        </div>

        <button
          disabled={loading}
          type="submit"
          className={`px-[30px] py-[10px] rounded-md border w-full font-bold min-h-[52px] bg-${
            loading ? "foundation-grey-g-400" : "foundation-blue-b-300"
          }  max-w-[260px] mx-auto  text-white grid place-items-center`}
        >
          {loading ? <Spinner /> : <span>Sign Up</span>}
        </button>
      </form>
    </div>
  );
};

export default Register;
