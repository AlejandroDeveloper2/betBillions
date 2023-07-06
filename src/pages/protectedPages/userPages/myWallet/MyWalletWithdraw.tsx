/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { MdModeEditOutline, MdOutlinePersonOutline } from "react-icons/md";
import { BiMoneyWithdraw } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { MessageConfig, WalletWithdrawFormValues } from "../../../../types";
import { getWalletInfo, schema2 } from "./constants";
import {
  useLoading,
  useToast,
  useUserProfileContext,
  useWalletContext,
} from "../../../../hooks";

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
  Toast,
  LoadingButton,
  SidebarDefault,
} from "../../../../components";

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
} from "./MyWallet.style";
import {
  IndicatorHead,
  IndicatorTitle,
  IndicatorValue,
} from "../../../../styles/GlobalStyles.style";

import { Wallet3dIcon, Gift3dIcon } from "../../../../assets";

const MyWalletWithdraw = (): JSX.Element => {
  const { setUserWalletAddress, wallet, getUserWalletData } =
    useWalletContext();
  const { userPanelData, getUserPanelData } = useUserProfileContext();

  const {
    register,
    reset,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<WalletWithdrawFormValues>({
    defaultValues: getWalletInfo(),
    resolver: yupResolver(schema2),
  });

  const {
    isToastVisible,
    toast,
    showToast,
    hideToast,
    getToastColor,
    configToast,
  } = useToast();
  const toastconfig = useToast();

  const {
    isLoading,
    loadingMessage,
    activeLoading,
    inactiveLoading,
    setMessage,
  } = useLoading();
  const loadingConfig = useLoading();

  const config: MessageConfig = {
    toastConfig: {
      showToast,
      hideToast,
      configToast,
    },
    loadingConfig: {
      activeLoading,
      inactiveLoading,
      setMessage,
    },
  };

  const config2: MessageConfig = {
    toastConfig: {
      showToast: toastconfig.showToast,
      hideToast: toastconfig.hideToast,
      configToast: toastconfig.configToast,
    },
    loadingConfig: {
      activeLoading: loadingConfig.activeLoading,
      inactiveLoading: loadingConfig.inactiveLoading,
      setMessage: loadingConfig.setMessage,
    },
  };

  useEffect(() => {
    getUserPanelData(config);
  }, []);

  useEffect(() => {
    getUserWalletData(config2).then(() => {
      setValue("wallet", wallet.wallet ? wallet.wallet : "");
    });
  }, [wallet.wallet]);

  return (
    <>
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
          config={config2}
          handleSubmit={handleSubmit}
          action={setUserWalletAddress}
          reset={reset}
        >
          <WalletCard>
            <WalletInputContainer>
              <InputRow>
                {isLoading ? (
                  <Loading
                    message={loadingMessage}
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
              {loadingConfig.isLoading ? (
                <LoadingButton
                  message={loadingConfig.loadingMessage}
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
                    wallet.wallet
                      ? "Editar direccion de billetera"
                      : "Registrar billetera"
                  }
                >
                  {wallet.wallet ? (
                    <MdModeEditOutline
                      style={{ fontSize: "2rem", fill: "var(--white)" }}
                    />
                  ) : (
                    <IoMdAdd
                      style={{ fontSize: "2rem", fill: "var(--white)" }}
                    />
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
                {isLoading ? (
                  <Loading
                    message={loadingMessage}
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
            disabled={wallet?.wallet ? false : true}
          >
            <BiMoneyWithdraw
              color="var(--white)"
              style={{ fontSize: "1.6rem", marginRight: "0.5rem" }}
            />
          </DefaultButton>
        </CustomForm>
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
      <Toast
        message={toastconfig.toast.toastMessage}
        type={toastconfig.toast.toastType}
        toastConfig={{
          isToastVisible: toastconfig.isToastVisible,
          getToastColor: toastconfig.getToastColor,
          hideToast: toastconfig.hideToast,
        }}
      />
    </>
  );
};

export default MyWalletWithdraw;
