import { LoadingProps } from "../../../types";

/*styles */
import { LoadingContainer, Spinner } from "./Loading.style";
import "./animation.css";

const Loading = ({ message, textColor }: LoadingProps): JSX.Element => {
  return (
    <LoadingContainer textcolor={textColor}>
      <Spinner textcolor={textColor}>
        <div className="spinnerAnimation"></div>
        <div className="spinnerAnimation"></div>
        <div className="spinnerAnimation"></div>
        <div className="spinnerAnimation"></div>
        <div className="spinnerAnimation"></div>
        <div className="spinnerAnimation"></div>
        <div className="spinnerAnimation"></div>
        <div className="spinnerAnimation"></div>
      </Spinner>
      <span>{message}</span>
    </LoadingContainer>
  );
};

export default Loading;
