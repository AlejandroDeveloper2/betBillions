import { BsFacebook, BsYoutube, BsInstagram, BsTelegram } from "react-icons/bs";

import { useAuthContext, useUserProfileContext } from "../../../hooks";
import { getSidebarMenuItems } from "./constants";

import { Image, MenuSidebar } from "../..";

import { Team3dIcon, TrophyIcon } from "../../../assets";

import {
  Info,
  SecondContent,
  SidebarContainer,
  SocialLinks,
  SocialMedia,
  TeamIndicator,
  UserName,
  WinnerInfo,
  WinnerListHead,
  WinnerListTitle,
  WinnersList,
} from "./Sidebar.style";

const Sidebar = (): JSX.Element => {
  const { logout } = useAuthContext();
  const { userPanelData } = useUserProfileContext();
  const SIDEBARMENUITEMS = getSidebarMenuItems(logout);

  return (
    <SidebarContainer>
      <MenuSidebar>
        {SIDEBARMENUITEMS.map((item, index) => (
          <MenuSidebar.Item key={index} {...item} />
        ))}
      </MenuSidebar>
      <WinnersList>
        <WinnerListHead>
          <WinnerListTitle>Ganadores</WinnerListTitle>
          <Image
            source={TrophyIcon}
            alt={"Winners bet billions"}
            size={{ lg: 80, md: 80, sm: 80 }}
          />
          <WinnerListTitle>...</WinnerListTitle>
        </WinnerListHead>
        <WinnerInfo>
          <Info>
            <UserName>
              shirley figueroa <span>5m ago</span>{" "}
            </UserName>
            <p>Esto es muy real gracias betbillions</p>
          </Info>
        </WinnerInfo>
      </WinnersList>
      <SecondContent>
        <TeamIndicator>
          <h2>
            Total usuarios registrados<span>{userPanelData?.reference}</span>
          </h2>
          <Image
            source={Team3dIcon}
            alt={"Team bet billions"}
            size={{ lg: 80, md: 100, sm: 80 }}
          />
        </TeamIndicator>
        <SocialMedia>
          <h2>Nuestras redes</h2>
          <SocialLinks>
            <BsYoutube color="var(--bg-primary-color)" />
            <BsFacebook color="var(--bg-primary-color)" />
            <BsInstagram color="var(--bg-primary-color)" />
            <BsTelegram color="var(--bg-primary-color)" />
          </SocialLinks>
        </SocialMedia>
      </SecondContent>
    </SidebarContainer>
  );
};

export default Sidebar;
