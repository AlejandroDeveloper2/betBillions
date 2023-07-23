import { FaXmark } from "react-icons/fa6";

import { ToastProps } from "types";
import { useToastContext } from "@hooks/index";

/*styles */
import { ToastBody, ToastContainer } from "./Toast.style";

const Toast = (props: ToastProps): JSX.Element => {
  const { id, message, type } = props;
  const { closeToast, getToastColor, getToastIcon } = useToastContext();

  const background = getToastColor(type);
  const Icon = getToastIcon(type);

  return (
    <ToastContainer color="var(--white)" background={background}>
      <ToastBody color="var(--white)">
        <Icon
          color="var(--white)"
          style={{
            fontSize: "25px",
          }}
        />
        <span>{message}</span>
      </ToastBody>
      <FaXmark
        color="var(--gray)"
        style={{
          fontSize: "18px",
          cursor: "pointer",
        }}
        onClick={() => closeToast(id)}
      />
    </ToastContainer>
  );
};

export default Toast;
