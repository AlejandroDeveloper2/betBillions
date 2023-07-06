import { BsFacebook, BsYoutube, BsInstagram, BsTelegram } from "react-icons/bs";

import { useAuthContext, useUserProfileContext } from "../../../hooks";
import { getSidebarMenuItems } from "./constants";
import { SidebarProps } from "../../../types";

import { Image, Indicator, MenuSidebar } from "../..";

import {
  Gift3dIcon,
  Team3dIcon,
  TrophyIcon,
  Wallet3dIcon,
} from "../../../assets";

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
import {
  IndicatorHead,
  IndicatorList,
  IndicatorTitle,
  IndicatorValue,
  PromIndicator,
} from "../../../styles/GlobalStyles.style";

const Sidebar = (props: SidebarProps): JSX.Element => {
  const { children } = props;
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
      {children}
      <SecondContent>
        <TeamIndicator>
          <h2>
            Total usuarios registrados
            <span>{userPanelData?.reference}</span>
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

const SidebarDefault = (): JSX.Element => {
  return (
    <Sidebar>
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
    </Sidebar>
  );
};

const SidebarBalance = (): JSX.Element => {
  const { userPanelData } = useUserProfileContext();
  return (
    <Sidebar>
      <Indicator width="100%">
        <IndicatorHead>
          <IndicatorTitle>Saldo Total</IndicatorTitle>
          <Image
            source={Wallet3dIcon}
            alt={"Bet billions wallet"}
            size={{ lg: 60, md: 40, sm: 80 }}
          />
        </IndicatorHead>
        <IndicatorValue>
          ${userPanelData?.balance}
          <span>USD</span>
        </IndicatorValue>
      </Indicator>
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
    </Sidebar>
  );
};

const SidebarGifts = (): JSX.Element => {
  const { userPanelData } = useUserProfileContext();
  return (
    <Sidebar>
      <Indicator width="100%">
        <IndicatorHead>
          <IndicatorTitle>Saldo Total</IndicatorTitle>
          <Image
            source={Wallet3dIcon}
            alt={"Bet billions wallet"}
            size={{ lg: 60, md: 40, sm: 80 }}
          />
        </IndicatorHead>
        <IndicatorValue>
          ${userPanelData?.balance}
          <span>USD</span>
        </IndicatorValue>
      </Indicator>
      <Indicator width="100%">
        <IndicatorHead>
          <IndicatorTitle>Premios</IndicatorTitle>
          <Image
            source={TrophyIcon}
            alt={"Bet billions wallet"}
            size={{ lg: 60, md: 40, sm: 80 }}
          />
        </IndicatorHead>
        <IndicatorList>
          <p>1 juego 250 usd</p>
          <p>2 juego 250 usd</p>
          <p>3 juego 250 usd</p>
        </IndicatorList>
        <PromIndicator>
          <h2>
            Si aplica PROMO
            <span>6 500 usd</span>
            <span>7 500 usd</span>
          </h2>
          <Image
            source={Gift3dIcon}
            alt={"Team bet billions"}
            size={{ lg: 80, md: 100, sm: 80 }}
          />
        </PromIndicator>
      </Indicator>
    </Sidebar>
  );
};

export { SidebarBalance, SidebarGifts, SidebarDefault };
