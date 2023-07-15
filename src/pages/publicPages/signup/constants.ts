import * as yup from "yup";
import { Location } from "react-router-dom";

import { RegisterFormValues } from "types";
import { getInvitationLink } from "@utils/index";

const getDefaultValues = (location: Location): RegisterFormValues => {
  const invitationLink = getInvitationLink(location);
  return {
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    confirmEmail: "",
    invitationLink,
    fullName: "",
  };
};

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const userNameRules = /^(?=.*\d)(?=.*[A-z]).{5,}$/;
const userNameRule2 = /^[a-zA-Z0-9]+$/;
const userNameRules3 = /^(?!\s)/;

const schema = yup
  .object()
  .shape({
    username: yup
      .string()
      .required("El nombre de usuario es obligatorio!")
      .min(3, "El nombre de usuario debe tener al menos 3 caracteres!")
      .matches(userNameRules, {
        message: "El nombre de usuario debe contener al menos un número!",
      })
      .matches(userNameRule2, {
        message: "El nombre de usuario solo puede contener letras y números!",
      })
      .matches(userNameRules3, {
        message: "El nombre de usuario no puede contener espacios en blanco!",
      }),
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
    email: yup
      .string()
      .required("El correo es obligatorio!")
      .email("Correo invalido!"),
    confirmEmail: yup
      .string()
      .required("Confirma tu correo!")
      .email("Correo invalido!")
      .oneOf([yup.ref("email")], "Los correos no coinciden!"),
    invitationLink: yup.string(),
    fullName: yup.string().required("El nombre completo es obligatorio!"),
  })
  .required();

export { getDefaultValues, schema };
