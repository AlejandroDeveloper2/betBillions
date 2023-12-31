import { useAuthContext, useUserSession } from "@hooks/index";

import { Loading, SpinnerScreen, Image } from "@components/index";

import {
  LoadingBox,
  LoadingScreenContainer,
  Layer,
} from "./LoadingScreen.style";
import "./animation.css";

import { LogoTap } from "@assets/index";

const LoadingScreen = (): JSX.Element => {
  useUserSession(0);
  const { authStatus } = useAuthContext();

  return (
    <LoadingScreenContainer>
      <Layer className="fadeAnimation">
        <LoadingBox>
          <figure className="logoAnimation">
            <Image
              source={LogoTap}
              alt="Bet billions logo"
              size={{ lg: 100, md: 100, sm: 100 }}
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
        </LoadingBox>
      </Layer>
    </LoadingScreenContainer>
  );
};

export default LoadingScreen;
