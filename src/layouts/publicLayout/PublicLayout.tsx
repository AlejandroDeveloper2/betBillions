import { Outlet } from "react-router-dom";

/*Functions */
import { useScreenLoader, useToast, useUserSession } from "../../hooks";

/*Components */
import { Image, LoadingScreen, Toast } from "../../components";

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
  const {
    isToastVisible,
    toast,
    getToastColor,
    showToast,
    hideToast,
    configToast,
  } = useToast();
  useUserSession({ showToast, hideToast, configToast }, 0);
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
      <Toast
        type={toast.toastType}
        message={toast.toastMessage}
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
