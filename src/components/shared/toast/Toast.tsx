import { FaXmark } from "react-icons/fa6";

import { ToastProps } from "../../../types";

/*styles */
import { ToastContainer } from "./Toast.style";

const Toast = (props: ToastProps): JSX.Element => {
  const { message, toastConfig } = props;
  const { isToastVisible, getToastColor, hideToast } = toastConfig;

  const background = getToastColor();

  return (
    <ToastContainer
      color="var(--white)"
      background={background}
      istoastvisible={isToastVisible.toString()}
    >
      <FaXmark
        color="var(--white)"
        style={{
          fontSize: "16px",
          cursor: "pointer",
        }}
        onClick={hideToast}
      />
      <span>{message}</span>
    </ToastContainer>
  );
};

export default Toast;
