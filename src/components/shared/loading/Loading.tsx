import { LoadingProps } from "../../../types";

/*styles */
import { LoadingContainer, Spinner } from "./Loading.style";

const Loading = ({ message, textColor }: LoadingProps): JSX.Element => {
  return (
    <LoadingContainer textcolor={textColor}>
      <Spinner textcolor={textColor}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Spinner>
      <span>{message}</span>
    </LoadingContainer>
  );
};

export default Loading;
