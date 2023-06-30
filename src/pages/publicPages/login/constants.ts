import * as yup from "yup";

import { LoginFormValues } from "../../../types";

const DEFAULTVALUES: LoginFormValues = {
  email: "",
  password: "",
};

const schema = yup
  .object()
  .shape({
    email: yup.string().required("el correo es obligatorio!"),
    password: yup.string().required("la contraseña es obligatoria!"),
  })
  .required();

export { DEFAULTVALUES, schema };
