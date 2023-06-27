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
        <WelcomeText>welcome</WelcomeText>
        <Animate>
          <Image
            source={Logo}
            alt="Bet billions logo"
            dimensions={{ width: 300, height: 150 }}
          />
        </Animate>
      </Presentation>
      <Outlet />
    </Container>
  );
};

export default PublicLayout;
