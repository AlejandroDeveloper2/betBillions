import * as yup from "yup";

import { RecoverPassFormValues } from "types";

const DEFAULTVALUES: RecoverPassFormValues = {
  email: "",
};

const schema = yup
  .object()
  .shape({
    email: yup
      .string()
      .required("El correo es obligatorio!")
      .email("Correo invalido!"),
  })
  .required();

export { DEFAULTVALUES, schema };
