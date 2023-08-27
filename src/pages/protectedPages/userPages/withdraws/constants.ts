import * as yup from "yup";

import { WithdrawFormValues } from "types";

const DEFAULTVALUES: WithdrawFormValues = {
  wallet: "",
  price: 0,
};

const schema = yup
  .object()
  .shape({
    wallet: yup.string().required("La dirección de la wallet es obligatoria!"),
    price: yup
      .number()
      .integer("El valor ingresado debe ser un numero!")
      .required("El valor en dolares a retirar es obligatiorio!")
      .min(10, "El valor minimo para retirar es 10 USD"),
  })
  .required();

export { DEFAULTVALUES, schema };
