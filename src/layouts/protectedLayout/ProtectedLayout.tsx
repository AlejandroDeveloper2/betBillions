import { Outlet } from "react-router-dom";

import { useAuthContext, useToast, useUserSession } from "../../hooks";
import { getMenuItems } from "./constants";

import { Menu, Toast } from "../../components";

import { Container, Panel } from "./ProtectedLayout.style";

const ProtectedLayout = (): JSX.Element => {
  const {
    isToastVisible,
    toast,
    getToastColor,
    showToast,
    hideToast,
    configToast,
  } = useToast();
  useUserSession({ showToast, hideToast, configToast }, 1000);
  const { logout } = useAuthContext();
  const MENUITEMS = getMenuItems(logout);

  return (
    <Container>
      <Menu>
        {MENUITEMS.map((item, index) => (
          <Menu.Item key={index} {...item} />
        ))}
      </Menu>
      <Panel>
        <Outlet />
      </Panel>
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

export default ProtectedLayout;
