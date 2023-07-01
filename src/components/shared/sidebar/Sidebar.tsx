import { MenuSidebar } from "../..";

import { useAuthContext } from "../../../hooks";
import { getSidebarMenuItems } from "./constants";

import { SidebarContainer } from "./Sidebar.style";

const Sidebar = (): JSX.Element => {
  const { logout } = useAuthContext();
  const SIDEBARMENUITEMS = getSidebarMenuItems(logout);

  return (
    <SidebarContainer>
      <MenuSidebar>
        {SIDEBARMENUITEMS.map((item, index) => (
          <MenuSidebar.Item key={index} {...item} />
        ))}
      </MenuSidebar>
    </SidebarContainer>
  );
};

export default Sidebar;
