import * as yup from "yup";
import { ValidTransactionFormValues } from "types";

const getDefaultValues = (): ValidTransactionFormValues => ({
  id: 0,
  transaction: "",
  price: 0,
  confirmPrice: 0,
});

const schema = yup
  .object()
  .shape({
    id: yup.number().required("El id de la transacción es obligatorio!"),
    transaction: yup
      .string()
      .required("El hash de la transacción es obligatorio!"),
    price: yup
      .number()
      .min(1, "El precio no puede ser 0!")
      .integer("El precio debe ser un número!")
      .required("El precio a recargar es obligatorio!"),
    confirmPrice: yup
      .number()
      .min(1, "El precio no puede ser 0!")
      .integer("El precio debe ser un número!")
      .oneOf([yup.ref("price")], "Los precios no coinciden!")
      .required("Confirme el precio a recargar!"),
  })
  .required();

export { getDefaultValues, schema };
