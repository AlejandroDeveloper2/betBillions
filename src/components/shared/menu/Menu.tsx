import { useLocation } from "react-router-dom";

import {
  MenuProps,
  MenuItem as MenuItemType,
  MenuItemStyleProps,
} from "../../../types";

import { Image } from "../..";

import { LI, LinkItem, UL } from "./Menu.style";

import { Logo } from "../../../assets";

const Menu = ({ children }: MenuProps): JSX.Element => {
  return <MenuContainer>{children}</MenuContainer>;
};

const MenuContainer = ({ children }: MenuProps): JSX.Element => {
  return (
    <UL>
      <Image
        source={Logo}
        alt={"Logo"}
        dimensions={{
          width: 250,
          height: 80,
        }}
      />

      {children}
    </UL>
  );
};

const MenuItem = (props: MenuItemType): JSX.Element => {
  const { label, icon: Icon, title, to, onClick } = props;
  const location = useLocation();

  const getActiveItem = (): MenuItemStyleProps => {
    const path = location.pathname;
    if (path === to) {
      return {
        background: "var(--white)",
        color: "var(--bg-secondary-color)",
      };
    }
    return {
      background: "transparent",
      color: "var(--white)",
    };
  };

  return (
    <LI>
      <LinkItem
        to={to}
        title={title}
        background={getActiveItem().background}
        color={getActiveItem().color}
        onClick={onClick}
      >
        {typeof Icon === "function" ? (
          <Icon style={{ fontSize: 30, color: getActiveItem().color }} />
        ) : (
          <Image
            source={Icon}
            alt={label}
            dimensions={{
              width: 25,
              height: 25,
            }}
          />
        )}
        <span>{label}</span>
      </LinkItem>
    </LI>
  );
};

Menu.Item = MenuItem;

export default Menu;
