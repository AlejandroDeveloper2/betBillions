import { Loading } from "../..";

import { LoadingBox, LoadingScreenContainer } from "./LoadingScreen.style";

const LoadingScreen = (): JSX.Element => {
  return (
    <LoadingScreenContainer>
      <LoadingBox>
        <Loading message={null} textColor="var(--white)" />
        <p>Cargando...</p>
      </LoadingBox>
    </LoadingScreenContainer>
  );
};

export default LoadingScreen;
