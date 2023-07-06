import { useNavigate } from "react-router-dom";
import { AiOutlinePaperClip } from "react-icons/ai";
import { MdLocalAtm } from "react-icons/md";

import { copyToClipBoard } from "../../../../utils";
import { useToast } from "../../../../hooks";

import {
  DefaultButton,
  Footer,
  Image,
  Indicator,
  SidebarDefault,
  Toast,
} from "../../../../components";

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

import {
  CopyLinkIcon,
  Logo2,
  Wallet3dIcon,
  WalletQr,
} from "../../../../assets";

const MyWallet = (): JSX.Element => {
  const paymentWalletAddress = "TBpHGP33y66r74FqKypYY33nTqaxePEGRn";

  const {
    isToastVisible,
    toast,
    getToastColor,
    showToast,
    hideToast,
    configToast,
  } = useToast();
  const navigate = useNavigate();

  return (
    <>
      <MyWalletContainer>
        {<SidebarDefault />}
        <PageHeader>
          <PageTitle>Mi Billetera</PageTitle>
          <Image
            source={Wallet3dIcon}
            alt={"My Wallet bet billions"}
            size={{ lg: 80, md: 80, sm: 80 }}
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
              onClick={() =>
                copyToClipBoard(paymentWalletAddress, {
                  showToast,
                  hideToast,
                  configToast,
                })
              }
            >
              <Image
                source={CopyLinkIcon}
                alt={"Copy wallet address button"}
                size={{ lg: 30, md: 30, sm: 30 }}
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
              size={{ lg: 200, md: 200, sm: 150 }}
            />
            <Image
              source={Logo2}
              alt={"Bet billions logo"}
              size={{ lg: 200, md: 100, sm: 80 }}
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
          onClick={() => navigate("/userPanel/myWallet/deposit")}
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
      </MyWalletContainer>
      <Toast
        message={toast.toastMessage}
        type={toast.toastType}
        toastConfig={{
          isToastVisible,
          getToastColor,
          hideToast,
        }}
      />
    </>
  );
};

export default MyWallet;
