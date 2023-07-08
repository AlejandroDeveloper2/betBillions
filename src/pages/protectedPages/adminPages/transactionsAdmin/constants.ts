import * as yup from "yup";

import { BsCurrencyExchange, BsFillCalendarDateFill } from "react-icons/bs";
import { FaBarcode, FaUserAlt } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { GrStatusDisabledSmall } from "react-icons/gr";
import { MdAlternateEmail } from "react-icons/md";
import { RiPriceTag3Fill } from "react-icons/ri";

import { HeaderType, ValidTransactionFormValues } from "types";

const tableHeaders: HeaderType[] = [
  { label: "Billetera", Icon: GiWallet },
  { label: "Hash", Icon: FaBarcode },
  { label: "Precio", Icon: RiPriceTag3Fill },
  { label: "Moneda", Icon: BsCurrencyExchange },
  { label: "Estado", Icon: GrStatusDisabledSmall },
  { label: "Registro", Icon: BsFillCalendarDateFill },
  { label: "Usuario", Icon: FaUserAlt },
  { label: "Correo", Icon: MdAlternateEmail },
];

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
export { tableHeaders };
