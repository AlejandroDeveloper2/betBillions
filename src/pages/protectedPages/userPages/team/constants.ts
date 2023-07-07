import { BiSolidUser } from "react-icons/bi";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { FaHashtag, FaLevelUpAlt } from "react-icons/fa";
import { PiIdentificationBadgeFill } from "react-icons/pi";

import { HeaderType } from "types";

const tableHeaders: HeaderType[] = [
  { label: "Id", Icon: FaHashtag },
  { label: "Usuario", Icon: BiSolidUser },
  { label: "Nombre", Icon: PiIdentificationBadgeFill },
  { label: "Registro", Icon: BsFillCalendarDateFill },
  { label: "Nivel", Icon: FaLevelUpAlt },
];
export { tableHeaders };
