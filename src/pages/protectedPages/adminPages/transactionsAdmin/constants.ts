import { BsCurrencyExchange, BsFillCalendarDateFill } from "react-icons/bs";
import { FaBarcode, FaUserAlt } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { GrStatusDisabledSmall } from "react-icons/gr";
import { MdAlternateEmail } from "react-icons/md";
import { RiPriceTag3Fill } from "react-icons/ri";

import { HeaderType } from "types";

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

export { tableHeaders };
