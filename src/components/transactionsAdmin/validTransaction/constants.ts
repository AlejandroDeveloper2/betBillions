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
    id: yup.number(),
    transaction: yup.string(),
    price: yup
      .number()
      .min(1, "El precio no puede ser 0!")
      .integer("El precio debe ser un número!"),
    confirmPrice: yup
      .number()
      .min(1, "El precio no puede ser 0!")
      .integer("El precio debe ser un número!")
      .oneOf([yup.ref("price")], "Los precios no coinciden!"),
  })
  .required();

export { getDefaultValues, schema };
