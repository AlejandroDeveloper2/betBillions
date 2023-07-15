import { useContext } from "react";

import SupportContext from "@context/SupportProvider";

const useSupportContext = () => {
  return useContext(SupportContext);
};

export default useSupportContext;
