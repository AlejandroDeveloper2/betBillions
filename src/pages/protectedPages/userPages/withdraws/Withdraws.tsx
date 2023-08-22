import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { BiMoneyWithdraw, BiSolidInfoCircle } from "react-icons/bi";
import { PiWalletFill } from "react-icons/pi";
import { IoSend } from "react-icons/io5";
import { FaMoneyBillWave } from "react-icons/fa6";

import { useLoading, useRealTimeFecher } from "@hooks/index";
import { UserProfileService } from "@services/userProfile.service";
import { UserWalletService } from "@services/userWallet.service";
import { LoadingConfig, WithdrawFormValues } from "types";
import { DEFAULTVALUES, schema } from "./constants";

import {
  Footer,
  Indicator,
  SidebarDefault,
  Image,
  CustomForm,
  ErrorMessage,
  DefaultSubmit,
  LoadingButton,
  InputWithLabel,
} from "@components/index";

import {
  WithdrawsContainer,
  PageTitle,
  IndicatorContainer,
  InterestMessage,
} from "./Withdraws.style";
import {
  Content,
  FormContainer,
  IndicatorHead,
  IndicatorTitle,
  IndicatorValue,
} from "@styles/GlobalStyles.style";

import { Wallet3dIcon } from "@assets/index";

const userProfileService = new UserProfileService();
const userWalletService = new UserWalletService();

const Withdraws = (): JSX.Element => {
  const { data: userPanelData } = useRealTimeFecher(
    "/users/panel",
    userProfileService.getUserPanelData
  );
  const { data: wallet } = useRealTimeFecher(
    "/userWallet/wallet",
    userWalletService.getUserWalletData
  );

  const {
    register,
    reset,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<WithdrawFormValues>({
    defaultValues: DEFAULTVALUES,
    resolver: yupResolver(schema),
  });

  const {
    isLoading,
    activeLoading,
    inactiveLoading,
    setMessage,
    loadingMessage,
  } = useLoading();

  useEffect(() => {
    setValue(
      "walletAddress",
      wallet ? (wallet.wallet ? wallet.wallet : "") : ""
    );
  }, [wallet]);

  return (
    <WithdrawsContainer>
      <SidebarDefault />
      <Content>
        <PageTitle>
          <h1>Retirar fondos</h1>
          <BiMoneyWithdraw
            style={{ color: "var(--bg-secondary-color)", fontSize: 40 }}
          />
        </PageTitle>
        <IndicatorContainer>
          <Indicator width="30rem">
            <IndicatorHead>
              <IndicatorTitle>Balance Total</IndicatorTitle>
              <Image
                source={Wallet3dIcon}
                alt={"Bet billions wallet"}
                size={{ lg: 20, md: 10, sm: 20 }}
              />
            </IndicatorHead>
            <IndicatorValue>
              ${userPanelData ? userPanelData.balance : 0}
              <span>USD</span>
            </IndicatorValue>
          </Indicator>
        </IndicatorContainer>
        <InterestMessage>
          <BiSolidInfoCircle style={{ color: "var(--white)", fontSize: 40 }} />
          <p>Nota: por cada retiro se te cobrara en 3% del monto solicitado</p>
        </InterestMessage>
        <FormContainer width={30} style={{ margin: "0 auto", padding: 0 }}>
          <CustomForm
            formTitle={""}
            config={{
              activeLoading,
              inactiveLoading,
              setMessage,
            }}
            formType="walletDeposit"
            handleSubmit={handleSubmit}
            reset={reset}
            action={function (
              data: any,
              config: LoadingConfig,
              reset?: any
            ): Promise<void> {
              reset();
              console.log(data, config);
              return Promise.resolve();
            }}
          >
            <InputWithLabel
              type="text"
              placeholder="Dirección de la billetera"
              label="Dirección de billetera"
              Icon={PiWalletFill}
              register={register}
              name="walletAddress"
              disabled
            />
            {errors.walletAddress ? (
              <ErrorMessage message={errors.walletAddress.message} />
            ) : null}
            <InputWithLabel
              type="number"
              placeholder="Ingresa el valor a retirar en dolares"
              label="Valor a retirar"
              Icon={FaMoneyBillWave}
              register={register}
              name="value"
            />
            {errors.value ? (
              <ErrorMessage message={errors.value.message} />
            ) : null}
            {isLoading ? (
              <LoadingButton
                message={loadingMessage}
                style={{
                  bg: "var(--bg-secondary-color)",
                  fontColor: "var(--white)",
                }}
              />
            ) : (
              <DefaultSubmit
                style={{
                  bg: "var(--bg-secondary-color)",
                  fontColor: "var(--white)",
                }}
                title={"Enviar solicitud de retiro"}
                label="Solicitar retiro"
              >
                <IoSend
                  style={{
                    color: "var(--white)",
                    fontSize: 20,
                    marginRight: 10,
                  }}
                />
              </DefaultSubmit>
            )}
          </CustomForm>
        </FormContainer>
        <Footer />
      </Content>
    </WithdrawsContainer>
  );
};

export default Withdraws;
