import * as yup from "yup";

import { UserProfileFormValues } from "types";

const userNameRules = /^(?=.*\d)(?=.*[a-z]).{5,}$/;
const userNameRule2 = /^[a-zA-Z0-9 ]+$/;

const DEFAULTVALUES: UserProfileFormValues = {
  username: "",
  fullName: "",
  email: "",
  phone: "",
  country: "",
  city: "",
  sponsorName: "",
};

const schema = yup
  .object()
  .shape({
    username: yup
      .string()
      .required("El nombre de usuario es obligatorio!")
      .matches(userNameRules, {
        message: "El nombre de usuario debe contener al menos un número!",
      })
      .matches(userNameRule2, {
        message: "El nombre de usuario solo puede contener letras y números!",
      }),
    fullName: yup.string().required("El nombre completo es obligatorio!"),
    email: yup
      .string()
      .required("El correo es obligatorio!")
      .email("El correo ingresado es invalido!"),
    phone: yup.string().required("El telefono es obligatorio!"),
    country: yup.string().required("Selecciona tu país de residencia!"),
    city: yup
      .string()
      .required("Selecciona tu ciudad | provincia | municipio!"),
  })
  .required();

export { DEFAULTVALUES, schema };
