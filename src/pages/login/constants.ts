import * as yup from "yup";

import { LoginFormValues } from "../../types";

const DEFAULTVALUES: LoginFormValues = {
  username: "",
  password: "",
};

const schema = yup
  .object()
  .shape({
    username: yup.string().required("Username field is required!"),
    password: yup.string().required("Password field is required!"),
  })
  .required();

export { DEFAULTVALUES, schema };
