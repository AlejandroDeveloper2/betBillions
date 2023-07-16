import * as yup from "yup";

import { SupportAnswerFormValues } from "types";

const DEFAULTVALUES: SupportAnswerFormValues = {
  id: 0,
  answer: "",
};

const schema = yup
  .object()
  .shape({
    id: yup.number().required(),
    answer: yup
      .string()
      .required("El mensaje de respuesta es obligatorio!")
      .max(500, "El mensaje debe contener maximo 500 caracteres!"),
  })
  .required();

export { DEFAULTVALUES, schema };
