import * as yup from "yup";

import { LoginFormValues } from "../../types";

const DEFAULTVALUES: LoginFormValues = {
  username: "",
  password: "",
};

const schema = yup
  .object()
  .shape({
    username: yup.string().required("el nombre de usuario es obligatorio!"),
    password: yup.string().required("la contraseña es obligatoria!"),
  })
  .required();

export { DEFAULTVALUES, schema };
