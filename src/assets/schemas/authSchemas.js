import * as yup from "yup";
import isEmailValidator from "validator/lib/isEmail";

const ValidationLogin = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .min(10, "Email must be at least 10 characters")
    .max(63, "Email must not contain more than 63 characters")
    .test(
      "is-valid",
      "Email is invalid",
      (value) =>
        value &&
        isEmailValidator(value, {
          allow_utf8_local_part: false,
        })
    )
    .matches(/(^(?!-)([a-zA-Z0-9_-])(?=[^@]{2,}@)([a-z]))/, "Email is invalid"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(12, "Password must not contain more than 12 characters")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
      "Password must contain six characters, at least one letter and one number"
    )
    .required("Password is required"),
});

const ValidationsReg = yup.object().shape({
  username: yup
    .string()
    .min(1, "Name must be at least 1 characters")
    .max(12, "Name must not contain more than 12 characters")
    .matches(/^([a-zA-ZА-ЯҐЄІЇа-яґєії0-9 ]+)$/, "Name is invalid")
    .required("Name is required"),
  email: yup
    .string()
    .required("Email is required")
    .min(10, "Email must be at least 10 characters")
    .max(63, "Email must not contain more than 63 characters")
    .test(
      "is-valid",
      "Email is invalid",
      (value) =>
        value &&
        isEmailValidator(value, {
          allow_utf8_local_part: false,
        })
    )
    .matches(/(^(?!-)([a-zA-Z0-9_-])(?=[^@]{2,}@)([a-z]))/, "Email is invalid"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(12, "Password must not contain more than 12 characters")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
      "Password must contain six characters, at least one letter and one number"
    )
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password must match")
    .required("Confirm password is required"),
});

export { ValidationLogin, ValidationsReg };
