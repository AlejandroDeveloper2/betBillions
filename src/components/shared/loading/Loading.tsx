import { LoadingProps } from "types";

/*styles */
import { LoadingContainer, Spinner, SpinnerVariant } from "./Loading.style";
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

const SpinnerScreen = ({ textColor }: LoadingProps): JSX.Element => {
  return (
    <LoadingContainer textcolor={textColor}>
      <SpinnerVariant textcolor={textColor}>
        <div className="spinnerVariantAnimation1"></div>
        <div className="spinnerVariantAnimation2"></div>
        <div className="spinnerVariantAnimation2"></div>
        <div className="spinnerVariantAnimation3"></div>
      </SpinnerVariant>
    </LoadingContainer>
  );
};

export { Loading, SpinnerScreen };
