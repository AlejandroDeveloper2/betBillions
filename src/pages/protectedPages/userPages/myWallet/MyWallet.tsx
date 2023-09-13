import { useNavigate } from "react-router-dom";
import { AiOutlinePaperClip } from "react-icons/ai";
import { MdLocalAtm } from "react-icons/md";

import { copyToClipBoard } from "@utils/index";
import { useToastContext } from "@hooks/index";

import {
  DefaultButton,
  Footer,
  Image,
  Indicator,
  SidebarDefault,
} from "@components/index";

import {
  MyWalletContainer,
  PageHeader,
  PageTitle,
  Text,
  WalletAddress,
  WalletAddressContainer,
  WalletBody,
  WalletCard,
} from "./MyWallet.style";

import { CopyLinkIcon, Logo2, Wallet3dIcon, WalletQr } from "@assets/index";
import { Content } from "@styles/GlobalStyles.style";

const MyWallet = (): JSX.Element => {
  const isLoyaltyPlan = window.location.pathname.split("/")[3];
  const paymentWalletAddress = "TBpHGP33y66r74FqKypYY33nTqaxePEGRn";
  const navigate = useNavigate();
  const { openToast } = useToastContext();

  return (
    <MyWalletContainer>
      <SidebarDefault />
      <Content>
        <PageHeader>
          <PageTitle>Mi Billetera</PageTitle>
          <Image
            source={Wallet3dIcon}
            alt={"My Wallet bet billions"}
            size={{ lg: 30, md: 20, sm: 20 }}
          />
        </PageHeader>
        <Indicator width="100%">
          <Text>
            Para empezar con la diversion y <span>GANAR</span> jugando, recarga
            tu cuenta aqui:
          </Text>
        </Indicator>
        <WalletCard>
          <WalletAddressContainer>
            <DefaultButton
              style={{
                bg: "transparent",
                fontColor: "var(--white)",
                width: "auto",
              }}
              title={"Copiar direccion de billetera"}
              onClick={() => copyToClipBoard(paymentWalletAddress, openToast)}
            >
              <Image
                source={CopyLinkIcon}
                alt={"Copy wallet address button"}
                size={{ lg: 100, md: 100, sm: 40 }}
              />
            </DefaultButton>
            <WalletAddress>
              {paymentWalletAddress} <span>TRC20</span>
            </WalletAddress>
          </WalletAddressContainer>
          <WalletBody>
            <Image
              source={WalletQr}
              alt={"Wallet qr betbillions"}
              size={{ lg: 20, md: 30, sm: 50 }}
            />
            <Image
              source={Logo2}
              alt={"Bet billions logo"}
              size={{ lg: 40, md: 50, sm: 60 }}
            />
          </WalletBody>
        </WalletCard>
        <DefaultButton
          style={{
            bg: "var(--bg-secondary-color)",
            fontColor: "var(--white)",
            width: "25rem",
          }}
          title={"Realizar recarga a mi billetera"}
          label="¡Ya Realice mi recarga!"
          onClick={() =>
            navigate(
              isLoyaltyPlan
                ? "/userPanel/myWallet/deposit/loyaltyPlan"
                : "/userPanel/myWallet/deposit"
            )
          }
        >
          <AiOutlinePaperClip
            color="var(--white)"
            style={{ fontSize: "1.6rem", marginRight: "0.5rem" }}
          />
        </DefaultButton>

        <DefaultButton
          style={{
            bg: "var(--bg-secondary-color)",
            fontColor: "var(--white)",
            width: "25rem",
          }}
          title={"Realizar retiro de mi billetera"}
          label="Retirar"
          onClick={() => navigate("/userPanel/myWallet/withdraw")}
        >
          <MdLocalAtm
            style={{
              fontSize: "1.6rem",
              color: "var(--white)",
              marginRight: "0.5rem",
            }}
          />
        </DefaultButton>
        <Footer />
      </Content>
    </MyWalletContainer>
  );
};

export default MyWallet;
