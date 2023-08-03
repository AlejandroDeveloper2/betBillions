import { BsFillCalendarDateFill, BsFillTelephoneFill } from "react-icons/bs";
import { FaHashtag } from "react-icons/fa";
import { GrStatusDisabledSmall } from "react-icons/gr";
import { HiCurrencyDollar } from "react-icons/hi";
import { HiWallet } from "react-icons/hi2";
import { IoMdPricetag } from "react-icons/io";

import { HeaderType } from "types";

const tableHeaders: HeaderType[] = [
  { label: "Billetera", Icon: HiWallet },
  { label: "Id Billetera", Icon: FaHashtag },
  { label: "Valor retiro", Icon: IoMdPricetag },
  { label: "Comisión", Icon: BsFillTelephoneFill },
  { label: "Moneda", Icon: HiCurrencyDollar },
  { label: "Estado", Icon: GrStatusDisabledSmall },
  { label: "Fecha retiro", Icon: BsFillCalendarDateFill },
];

export { tableHeaders };
