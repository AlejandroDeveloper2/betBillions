import { Outlet } from "react-router-dom";

/*Functions */
import { useScreenLoader, useToastContext, useUserSession } from "@hooks/index";

/*Components */
import { Image, LoadingScreen, Toast } from "@components/index";

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
  const { toast, isToastVisible, getToastColor, hideToast } = useToastContext();

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
      <Toast
        message={toast.toastMessage}
        type={toast.toastType}
        toastConfig={{
          isToastVisible,
          getToastColor,
          hideToast,
        }}
      />
    </Container>
  );
};

export default PublicLayout;
