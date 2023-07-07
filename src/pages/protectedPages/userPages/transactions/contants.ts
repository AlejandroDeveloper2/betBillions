import { BsFillCalendarDateFill } from "react-icons/bs";
import { FaHashtag } from "react-icons/fa";
import { GrStatusDisabledSmall } from "react-icons/gr";
import { MdAccountBalanceWallet, MdCategory } from "react-icons/md";

import { HeaderType } from "types";

const tableHeaders: HeaderType[] = [
  { label: "Id", Icon: FaHashtag },
  { label: "Balance", Icon: MdAccountBalanceWallet },
  { label: "Tipo", Icon: MdCategory },
  { label: "Estado", Icon: GrStatusDisabledSmall },
  { label: "Fecha", Icon: BsFillCalendarDateFill },
];
export { tableHeaders };
