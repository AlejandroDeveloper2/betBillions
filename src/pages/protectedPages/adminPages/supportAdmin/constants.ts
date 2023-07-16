import { BiSolidCategory } from "react-icons/bi";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { FaTicketAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { GrStatusDisabledSmall } from "react-icons/gr";
import { MdAlternateEmail } from "react-icons/md";

import { HeaderType } from "types";

const tableHeaders: HeaderType[] = [
  { label: "Ticket", Icon: FaTicketAlt },
  { label: "Registro", Icon: BsFillCalendarDateFill },
  { label: "Categoria", Icon: BiSolidCategory },
  { label: "Usuario", Icon: FaUser },
  { label: "Correo", Icon: MdAlternateEmail },
  { label: "Estado", Icon: GrStatusDisabledSmall },
];

export { tableHeaders };
