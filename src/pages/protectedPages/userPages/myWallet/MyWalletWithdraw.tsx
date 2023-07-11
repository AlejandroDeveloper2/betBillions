import { useEffect } from "react";
import { MdModeEditOutline, MdOutlinePersonOutline } from "react-icons/md";
import { BiMoneyWithdraw } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { WalletWithdrawFormValues } from "types";
import { getWalletInfo, schema2 } from "./constants";
import { useLoading, useRealTimeFecher, useWalletContext } from "@hooks/index";
import { UserProfileService } from "@services/userProfile.service";
import { UserWalletService } from "@services/userWallet.service";

import {
  Indicator,
  CustomForm,
  InputVariant,
  DefaultButton,
  ErrorMessage,
  DefaultSubmit,
  Footer,
  Image,
  Loading,
  LoadingButton,
  SidebarDefault,
} from "@components/index";

import {
  MyWalletContainer,
  PageHeader,
  PageTitle,
  WalletCard,
  WalletInputContainer,
  InputRow,
  WalletAddress,
  WalletBody,
  Text,
  Paragraph,
} from "./MyWallet.style";
import {
  IndicatorHead,
  IndicatorTitle,
  IndicatorValue,
} from "@styles/GlobalStyles.style";

import { Wallet3dIcon, Gift3dIcon } from "@assets/index";

const MyWalletWithdraw = (): JSX.Element => {
  const userProfileService = new UserProfileService();
  const userWalletService = new UserWalletService();
  const { setUserWalletAddress } = useWalletContext();
  const { data: userPanelData, isLoading: isLoadingUserData } =
    useRealTimeFecher("/users/panel", userProfileService.getUserPanelData);
  const { data: wallet, isLoading: isLoadingWallet } = useRealTimeFecher(
    "/userWallet/wallet",
    userWalletService.getUserWalletData
  );

  const {
    register,
    reset,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<WalletWithdrawFormValues>({
    defaultValues: getWalletInfo(),
    resolver: yupResolver(schema2),
  });

  const {
    isLoading,
    loadingMessage,
    activeLoading,
    inactiveLoading,
    setMessage,
  } = useLoading();

  useEffect(() => {
    setValue("wallet", wallet ? (wallet.wallet ? wallet.wallet : "") : "");
  }, [wallet]);

  return (
    <MyWalletContainer>
      <SidebarDefault />
      <PageHeader>
        <PageTitle>Retirar</PageTitle>
        <Image
          source={Wallet3dIcon}
          alt={"My Wallet bet billions"}
          size={{ lg: 30, md: 20, sm: 20 }}
        />
      </PageHeader>
      <Indicator width="100%">
        <Text>
          <span>Felicitaciones</span>, ya falta poco para que recibas tu
          premiacion, ingresa tu wallet y solicita tu retiro.
        </Text>
      </Indicator>

      <CustomForm
        formTitle=""
        formType="walletWithdraw"
        config={{
          activeLoading,
          inactiveLoading,
          setMessage,
        }}
        handleSubmit={handleSubmit}
        action={setUserWalletAddress}
        reset={reset}
      >
        <WalletCard>
          <WalletInputContainer>
            <InputRow>
              {isLoadingWallet ? (
                <Loading
                  message="Cargando tu billetera..."
                  textColor="var(--bg-secondary-color)"
                />
              ) : (
                <InputVariant
                  type="text"
                  placeholder="Dirección de tu billetera aqui"
                  label={null}
                  Icon={MdOutlinePersonOutline}
                  register={register}
                  name="wallet"
                />
              )}
            </InputRow>
            {isLoading ? (
              <LoadingButton
                message={loadingMessage}
                style={{
                  bg: "var(--black)",
                  fontColor: "var(--white)",
                  width: "auto",
                }}
              />
            ) : (
              <DefaultSubmit
                style={{
                  bg: "var(--black)",
                  fontColor: "var(--white)",
                  width: "auto",
                }}
                title={
                  wallet?.wallet
                    ? "Editar direccion de billetera"
                    : "Registrar billetera"
                }
              >
                {wallet?.wallet ? (
                  <MdModeEditOutline
                    style={{ fontSize: "2rem", fill: "var(--white)" }}
                  />
                ) : (
                  <IoMdAdd style={{ fontSize: "2rem", fill: "var(--white)" }} />
                )}
              </DefaultSubmit>
            )}
            <WalletAddress>
              {""} <span>TRC20</span>
            </WalletAddress>
          </WalletInputContainer>
          <WalletBody>
            <Indicator width="30rem">
              <IndicatorHead>
                <IndicatorTitle>Mis Premios</IndicatorTitle>
                <Image
                  source={Gift3dIcon}
                  alt={"Bet billions gifts"}
                  size={{ lg: 20, md: 20, sm: 30 }}
                />
              </IndicatorHead>
              {isLoadingUserData ? (
                <Loading
                  message="Cargando premios disponibles..."
                  textColor="var(--bg-primary-color)"
                />
              ) : (
                <IndicatorValue>
                  ${userPanelData?.awards}
                  <span>USD</span>
                </IndicatorValue>
              )}
            </Indicator>
          </WalletBody>
        </WalletCard>
        {errors.wallet ? (
          <ErrorMessage message={errors.wallet.message} />
        ) : null}
        <DefaultButton
          style={{
            bg: "var(--bg-secondary-color)",
            fontColor: "var(--white)",
            width: "25rem",
          }}
          title={"Retirar fondos"}
          label="Retirar"
          onClick={() => console.log("Retirado")}
          disabled={true}
        >
          <BiMoneyWithdraw
            color="var(--white)"
            style={{ fontSize: "1.6rem", marginRight: "0.5rem" }}
          />
        </DefaultButton>
      </CustomForm>
      <Paragraph>
        ¡Los retiros se efectuaran el dia del sorteo de bingo!
      </Paragraph>
      <Footer />
    </MyWalletContainer>
  );
};

export default MyWalletWithdraw;
