import { Outlet } from "react-router-dom";

/*Components */
import { Image } from "../../components";

/* Styles */
import {
  Container,
  WelcomeText,
  Presentation,
  Animate,
} from "./PublicLayout.style";

/*Assets */
import { Logo } from "../../assets";

const PublicLayout = (): JSX.Element => {
  return (
    <Container>
      <Presentation>
        <WelcomeText>Bienvenido</WelcomeText>
        <Animate className="animate_bounce">
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
