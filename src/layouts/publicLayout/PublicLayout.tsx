import { Outlet } from "react-router-dom";

/*Functions */
import { useScreenLoader, useUserSession } from "../../hooks";

/*Components */
import { Image, LoadingScreen } from "../../components";

/* Styles */
import {
  Container,
  WelcomeText,
  Presentation,
  Animate,
} from "./PublicLayout.style";
import "./animation.css";

/*Assets */
import { Logo } from "../../assets";

const PublicLayout = (): JSX.Element => {
  useUserSession(0);
  const isScreenLoading = useScreenLoader();

  if (isScreenLoading) return <LoadingScreen />;
  return (
    <Container>
      <Presentation>
        <WelcomeText>Bienvenido</WelcomeText>
        <Animate className="animateLogo">
          <Image
            source={Logo}
            alt="Bet billions logo"
            dimensions={{ width: 600, height: 200 }}
          />
        </Animate>
      </Presentation>
      <Outlet />
    </Container>
  );
};

export default PublicLayout;
