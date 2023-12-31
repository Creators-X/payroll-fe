import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required("Your Email is Required, ensure it is the Correct Format"),
  password: yup.string().min(8).required("Password Is A Required Field"),
});
