import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required("Your Email is Required, ensure it is the Correct Format"),
  password: yup.string().min(8).required("Password Is A Required Field"),
});

export const registerSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required("Your Email is Required, ensure it's in the correct format"),
  username: yup.string().required("Your name is required"),
  password: yup.string().min(8).required("Password Is A Required Field"),
  confirmPassword: yup
    .string()

    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});
