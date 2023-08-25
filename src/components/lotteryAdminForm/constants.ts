import * as yup from "yup";

import { LotteryFormValues } from "types";

const DEFAULTVALUES: LotteryFormValues = {
  startDate: "",
  numberOfRounds: 0,
  rounds: [],
  state: "",
  boardPrice: 0,
};

const schema = yup
  .object()
  .shape({
    startDate: yup
      .string()
      .required("La fecha de inicio del sorteo es obligatoria"),
    numberOfRounds: yup
      .number()
      .min(1, "El minimo de rondas debe ser 1")
      .max(7, "El maximo de rondas debe ser 7")
      .required("El número de rondas es obligatorio"),
    rounds: yup
      .array(
        yup.object().shape({
          typeGame: yup.string().required("Selecciona un tipo de juego"),
          award: yup
            .number()
            .required()
            .min(1, "El valor del premio es obligatorio"),
        })
      )
      .required("Llene la información de todas las rondas"),
    state: yup.string().required("Seleccione un estado para el sorteo"),
    boardPrice: yup
      .number()
      .required("Ingrese el precio del cartón de bingo")
      .min(5, "El valor debe ser de minimo 5 dolares"),
  })
  .required("Todos los campos son obligatorios!");

const lotteryStates = [
  { value: "true", label: "Activo" },
  { value: "false", label: "Inactivo" },
];

export { DEFAULTVALUES, schema, lotteryStates };
