import * as Yup from "yup";

export const fromValidation = Yup.object({
  name: Yup.string().min(3).required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(4).required("Required"),
  confirmPassword: Yup.string().oneOf([Yup.ref("password")], "password not matched").required("Required")
});
