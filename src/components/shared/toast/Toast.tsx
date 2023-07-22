import { FaXmark } from "react-icons/fa6";

import { ToastProps } from "types";
import { useToastContext } from "@hooks/index";

/*styles */
import { ToastContainer } from "./Toast.style";

const Toast = (props: ToastProps): JSX.Element => {
  const { id, message, type, isToastVisible } = props;
  const { closeToast, getToastColor } = useToastContext();

  const background = getToastColor(type);

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
        onClick={() => closeToast(id)}
      />
      <span>{message}</span>
    </ToastContainer>
  );
};

export default Toast;
