import { useEffect } from "react";

import { AiOutlinePaperClip } from "react-icons/ai";
import { MdOutlinePersonOutline } from "react-icons/md";
import { BsSendFill } from "react-icons/bs";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { WalletDepositFormValues } from "types";
import { getTransactionWalletValues, schema } from "./constants";
import { useLoading, useWalletContext } from "@hooks/index";

import {
  Indicator,
  DefaultButton,
  Footer,
  Image,
  CustomForm,
  DefaultSubmit,
  ErrorMessage,
  InputVariant,
  InputFile,
  LoadingButton,
  SidebarDefault,
} from "@components/index";

import { Wallet3dIcon, Logo2 } from "@assets/index";

import {
  MyWalletContainer,
  PageHeader,
  PageTitle,
  WalletCard,
  WalletAddress,
  WalletBody,
  Text,
  WalletInputContainer,
  InputRow,
} from "./MyWallet.style";
import { Content } from "@styles/GlobalStyles.style";

const MyWalletDeposit = (): JSX.Element => {
  const isLoyaltyPlan = window.location.pathname.split("/")[4];
  const {
    transactionVoucher,
    sendWalletDepositTransaction,
    uploadTransactionVoucher,
    sendCommissionTransaction,
  } = useWalletContext();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<WalletDepositFormValues>({
    defaultValues: getTransactionWalletValues(),
    resolver: yupResolver(schema),
  });

  const {
    isLoading,
    loadingMessage,
    activeLoading,
    inactiveLoading,
    setMessage,
  } = useLoading();

  const {
    isLoading: isLoadingUrlTransition,
    loadingMessage: loadingMessageUrlTransition,
    activeLoading: activeLoadingUrlTransition,
    inactiveLoading: inactiveLoadingUrlTransition,
    setMessage: setMessageUrlTransition,
  } = useLoading();

  const config = {
    activeLoading: activeLoadingUrlTransition,
    inactiveLoading: inactiveLoadingUrlTransition,
    setMessage: setMessageUrlTransition,
  };

  useEffect(() => {
    setValue("urlTransaction", transactionVoucher);
  }, [transactionVoucher]);

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
            Adjunta HASH de transacion y recibo.{" "}
            <span>¡Ya casi terminamos!</span>
          </Text>
        </Indicator>

        <CustomForm
          formTitle=""
          formType="walletDeposit"
          config={{
            activeLoading,
            inactiveLoading,
            setMessage,
          }}
          handleSubmit={handleSubmit}
          action={
            isLoyaltyPlan
              ? sendCommissionTransaction
              : sendWalletDepositTransaction
          }
          reset={reset}
        >
          <WalletCard>
            <WalletInputContainer>
              <InputRow>
                <InputVariant
                  type="text"
                  placeholder="Hash de transacción aqui"
                  label={null}
                  Icon={MdOutlinePersonOutline}
                  register={register}
                  name="transaction"
                />
              </InputRow>
              {isLoadingUrlTransition ? (
                <LoadingButton
                  message={loadingMessageUrlTransition}
                  style={{
                    bg: "var(--black)",
                    fontColor: "var(--white)",
                    width: "auto",
                  }}
                />
              ) : (
                <DefaultButton
                  style={{
                    bg: "var(--black)",
                    fontColor: "var(--white)",
                    width: "auto",
                  }}
                  title={"Adjuntar comprobante de pago"}
                >
                  <AiOutlinePaperClip
                    color="var(--white)"
                    style={{ fontSize: "2rem" }}
                  />
                  <InputFile
                    name="urlTransaction"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      uploadTransactionVoucher(e, config);
                    }}
                  />
                </DefaultButton>
              )}
              <WalletAddress>
                {""} <span>TRC20</span>
              </WalletAddress>
            </WalletInputContainer>
            <WalletBody>
              <Image
                source={Logo2}
                alt={"Wallet qr betbillions"}
                size={{ lg: 20, md: 30, sm: 50 }}
              />
            </WalletBody>
          </WalletCard>
          {errors.transaction ? (
            <ErrorMessage message={errors.transaction.message} />
          ) : null}
          {errors.urlTransaction ? (
            <ErrorMessage message={errors.urlTransaction.message} />
          ) : null}
          {isLoading ? (
            <LoadingButton
              message={loadingMessage}
              style={{
                bg: "var(--bg-secondary-color)",
                fontColor: "var(--white)",
                width: "25rem",
              }}
            />
          ) : (
            <DefaultSubmit
              style={{
                bg: "var(--bg-secondary-color)",
                fontColor: "var(--white)",
                width: "25rem",
              }}
              title={"Enviar datos de transacción"}
              label="Enviar"
            >
              <BsSendFill
                color="var(--white)"
                style={{ fontSize: "1.6rem", marginRight: "0.5rem" }}
              />
            </DefaultSubmit>
          )}
        </CustomForm>
        <Footer />
      </Content>
    </MyWalletContainer>
  );
};

export default MyWalletDeposit;
