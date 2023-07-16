import { Outlet } from "react-router-dom";

import { useAuthContext, useToastContext, useUserSession } from "@hooks/index";
import { getMenuItems } from "./constants";

import { Menu, Toast } from "@components/index";

import { Container, Panel } from "./ProtectedLayout.style";

const ProtectedLayout = (): JSX.Element => {
  useUserSession(100);
  const { logout, userAuth } = useAuthContext();
  const { toast, isToastVisible, getToastColor, hideToast } = useToastContext();

  const userRole = userAuth ? userAuth.roles[0].authority : "ROLE_USER";
  const MENUITEMS = getMenuItems(logout, userRole);

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

export default ProtectedLayout;
