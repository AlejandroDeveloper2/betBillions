import { Outlet } from "react-router-dom";

import { useAuthContext, useUserSession } from "../../hooks";
import { getMenuItems } from "./constants";

import { Menu } from "../../components";

import { Container, Panel } from "./ProtectedLayout.style";

const ProtectedLayout = (): JSX.Element => {
  useUserSession(1000);
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
    </Container>
  );
};

export default ProtectedLayout;
