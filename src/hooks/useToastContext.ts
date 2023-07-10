import { useContext } from "react";

import ToastContext from "@context/ToastProvider";

const useToastContext = () => {
  return useContext(ToastContext);
};

export default useToastContext;
