import { Outlet } from "react-router-dom";

/*Functions */
import { useScreenLoader, useUserSession } from "@hooks/index";

/*Components */
import { Image, LoadingScreen } from "@components/index";

/* Styles */
import {
  Container,
  WelcomeText,
  Presentation,
  Animate,
} from "./PublicLayout.style";
import "./animation.css";

/*Assets */
import { Logo } from "@assets/index";

const PublicLayout = (): JSX.Element => {
  const isScreenLoading = useScreenLoader();
  useUserSession(0);

  if (isScreenLoading) return <LoadingScreen />;
  return (
    <Container>
      <Presentation>
        <WelcomeText>Bienvenido</WelcomeText>
        <Animate className="animateLogo">
          <Image
            source={Logo}
            alt="Bet billions logo"
            size={{ lg: 100, md: 80, sm: 80 }}
          />
        </Animate>
      </Presentation>
      <Outlet />
    </Container>
  );
};

export default PublicLayout;
