import { BsFillCalendarDateFill, BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationArrow, FaUserAlt, FaUserTie } from "react-icons/fa";
import { GrStatusDisabledSmall } from "react-icons/gr";
import { IoLocationSharp } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";

import { HeaderType } from "types";

const tableHeaders: HeaderType[] = [
  { label: "Usuario", Icon: FaUserAlt },
  { label: "Correo", Icon: MdAlternateEmail },
  { label: "Nombre", Icon: FaUserAlt },
  { label: "Telefono", Icon: BsFillTelephoneFill },
  { label: "País", Icon: FaLocationArrow },
  { label: "Ciudad", Icon: IoLocationSharp },
  { label: "Estado", Icon: GrStatusDisabledSmall },
  { label: "Rol", Icon: FaUserTie },
  { label: "Registro", Icon: BsFillCalendarDateFill },
];

export { tableHeaders };
