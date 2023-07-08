import { Outlet } from "react-router-dom";

import { useAuthContext, useUserSession } from "@hooks/index";
import { getMenuItems } from "./constants";

import { Menu } from "@components/index";

import { Container, Panel } from "./ProtectedLayout.style";

const ProtectedLayout = (): JSX.Element => {
  useUserSession(1000);
  const { userAuth, logout } = useAuthContext();
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
    </Container>
  );
};

export default ProtectedLayout;
