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
  const { authStatus } = useAuthContext();
  return (
    <LoadingScreenContainer>
      <Layer className="fadeAnimation">
        <LoadingBox>
          <figure className="logoAnimation">
            <Image
              source={LogoTap}
              alt="Bet billions logo"
              dimensions={{ width: 200, height: 200 }}
            />
          </figure>
          {authStatus === "checking" ? (
            <Loading message={null} textColor="var(--white)" />
          ) : (
            <SpinnerScreen textColor="var(--white)" message={null} />
          )}
          <p>Cargando...</p>
        </LoadingBox>
      </Layer>
    </LoadingScreenContainer>
  );
};

export default LoadingScreen;
