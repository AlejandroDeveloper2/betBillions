import * as yup from "yup";

import { WithdrawFormValues } from "types";

const DEFAULTVALUES: WithdrawFormValues = {
  walletAddress: "",
  value: 0,
};

const schema = yup
  .object()
  .shape({
    walletAddress: yup
      .string()
      .required("La dirección de la wallet es obligatoria!"),

    value: yup
      .number()
      .integer("El valor ingrsado debe ser un numero!")
      .required("El valor en dolares a retirar es obligatiorio!")
      .min(10, "El valor minimo para retirar es 10 USD"),
  })
  .required();

export { DEFAULTVALUES, schema };
