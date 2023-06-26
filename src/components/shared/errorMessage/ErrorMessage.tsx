import { ErrorMessageProps } from "../../../types";

/*styles */
import { ErrorMessageContainer } from "./ErrorMessage.style";

const ErrorMessage = (props: ErrorMessageProps): JSX.Element => {
  const { message } = props;
  return (
    <ErrorMessageContainer>
      <span>{message}</span>
    </ErrorMessageContainer>
  );
};

export default ErrorMessage;
