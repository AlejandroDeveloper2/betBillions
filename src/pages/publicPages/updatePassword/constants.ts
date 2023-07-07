import * as yup from "yup";

import { UpdatePassFormValues } from "types";

const DEFAULTVALUES: UpdatePassFormValues = {
  password: "",
  confirmPassword: "",
};

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

const schema = yup
  .object()
  .shape({
    password: yup
      .string()
      .required("La contraseña es obligatoria!")
      .min(8, "La contraseña debe ser minimo de 8 caracteres!")
      .matches(passwordRules, {
        message:
          "La contraseña debe tener al menos una letra mayuscula, una minuscula y un numero!",
      }),
    confirmPassword: yup
      .string()
      .required("Confirma tu contraseña!")
      .oneOf([yup.ref("password")], "Las contraseñas no coinciden!"),
  })
  .required();

export { DEFAULTVALUES, schema };
