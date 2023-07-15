import * as yup from "yup";
import { BiSolidCategory } from "react-icons/bi";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { IoTicketSharp } from "react-icons/io5";
import { GrStatusInfoSmall } from "react-icons/gr";

import { SupportFormValues, HeaderType } from "types";

const DEFAULTVALUES: SupportFormValues = {
  category: "",
  question: "",
  urlPhoto: "",
};

const categories: string[] = ["Recargas", "Plan de fidelización", "Premios"];

const schema = yup
  .object()
  .shape({
    category: yup.string().required("Seleccione una categoria!"),
    question: yup
      .string()
      .required("El mensaje es obligatorio!")
      .max(500, "El mensaje debe contener maximo 500 caracteres!"),
  })
  .required();

const tableHeaders: HeaderType[] = [
  { label: "Ticket", Icon: IoTicketSharp },
  { label: "Registro", Icon: BsFillCalendarDateFill },
  { label: "Categoria", Icon: BiSolidCategory },
  { label: "Estado", Icon: GrStatusInfoSmall },
];

export { tableHeaders };
export { DEFAULTVALUES, schema, categories };
