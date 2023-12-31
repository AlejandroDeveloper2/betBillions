import { useLocation } from "react-router-dom";

import { MenuProps, MenuItem as MenuItemType } from "types";
import { getActiveItem } from "@utils/index";

import { Image } from "@components/index";

import { LI, LinkItem, LinkItemVariant, UL, ULVariant } from "./Menu.style";

import { Logo } from "@assets/index";

const Menu = ({ children }: MenuProps): JSX.Element => {
  return <MenuContainer>{children}</MenuContainer>;
};

const MenuSidebar = ({ children }: MenuProps): JSX.Element => {
  return <MenuContainerSidebar>{children}</MenuContainerSidebar>;
};

const MenuContainer = ({ children }: MenuProps): JSX.Element => {
  return (
    <UL>
      <div>
        <Image source={Logo} alt={"Logo"} size={{ lg: 100, md: 100, sm: 80 }} />
      </div>
      {children}
    </UL>
  );
};

const MenuContainerSidebar = ({ children }: MenuProps): JSX.Element => {
  return <ULVariant>{children}</ULVariant>;
};

const MenuSidebarItem = (props: MenuItemType): JSX.Element => {
  const { icon: Icon, title, to, onClick } = props;
  return (
    <LI>
      <LinkItemVariant
        to={to}
        title={title}
        background="transparent"
        color={"var(--white)"}
        onClick={onClick}
      >
        {typeof Icon === "function" ? (
          <Icon style={{ fontSize: 25, color: "var(--dark-gray)" }} />
        ) : (
          <Image
            source={Icon}
            alt={"Notification"}
            size={{ lg: 30, md: 80, sm: 150 }}
          />
        )}
      </LinkItemVariant>
    </LI>
  );
};

const MenuItem = (props: MenuItemType): JSX.Element => {
  const { label, icon: Icon, title, to, onClick } = props;
  const location = useLocation();

  return (
    <LI>
      <LinkItem
        to={to}
        title={title}
        background={getActiveItem(location, to).background}
        color={getActiveItem(location, to).color}
        onClick={onClick}
      >
        {typeof Icon === "function" ? (
          <Icon
            style={{ fontSize: 30, color: getActiveItem(location, to).color }}
          />
        ) : (
          <Image
            source={Icon}
            alt={"Notification"}
            size={{ lg: 30, md: 80, sm: 150 }}
          />
        )}
        <span>{label}</span>
      </LinkItem>
    </LI>
  );
};

Menu.Item = MenuItem;
MenuSidebar.Item = MenuSidebarItem;

export { Menu, MenuSidebar };
