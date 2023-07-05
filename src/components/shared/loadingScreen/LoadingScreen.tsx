import { useAuthContext } from "../../../hooks";

import { Loading, SpinnerScreen, Image } from "../..";

import {
  LoadingBox,
  LoadingScreenContainer,
  Layer,
} from "./LoadingScreen.style";
import "./animation.css";

import { LogoTap } from "../../../assets";

const LoadingScreen = (): JSX.Element => {
  const { authStatus, sessionValidationMessage } = useAuthContext();

  return (
    <LoadingScreenContainer>
      <Layer className="fadeAnimation">
        <LoadingBox>
          <figure className="logoAnimation">
            <Image
              source={LogoTap}
              alt="Bet billions logo"
              size={{ lg: 200, md: 100, sm: 80 }}
            />
          </figure>
          {authStatus === "checking" ? (
            <Loading message={null} textColor="var(--white)" />
          ) : (
            <SpinnerScreen textColor="var(--white)" message={null} />
          )}
          <p>
            {authStatus === "checking" ? "Validando sesión..." : "Cargando..."}
          </p>
          <p>{sessionValidationMessage && sessionValidationMessage}</p>
        </LoadingBox>
      </Layer>
    </LoadingScreenContainer>
  );
};

export default LoadingScreen;
