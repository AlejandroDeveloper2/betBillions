import { AiOutlinePaperClip } from "react-icons/ai";
import { MdOutlinePersonOutline } from "react-icons/md";
import { BsSendFill } from "react-icons/bs";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { MessageConfig, WalletDepositFormValues } from "../../../../types";
import { getTransactionWalletValues, schema } from "./constants";
import { useLoading, useToast, useWalletContext } from "../../../../hooks";

import {
  Indicator,
  DefaultButton,
  Footer,
  Image,
  CustomForm,
  DefaultSubmit,
  ErrorMessage,
  InputVariant,
  Toast,
  InputFile,
  LoadingButton,
  SidebarDefault,
} from "../../../../components";

import { Wallet3dIcon, Logo2 } from "../../../../assets";

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

const MyWalletDeposit = (): JSX.Element => {
  const {
    transactionVoucher,
    sendWalletDepositTransaction,
    uploadTransactionVoucher,
  } = useWalletContext();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<WalletDepositFormValues>({
    defaultValues: getTransactionWalletValues(
      transactionVoucher !== "" ? transactionVoucher : ""
    ),
    resolver: yupResolver(schema),
  });

  const {
    isToastVisible,
    toast,
    showToast,
    hideToast,
    getToastColor,
    configToast,
  } = useToast();

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
      showToast,
      hideToast,
      configToast,
    },
    loadingConfig: {
      activeLoading: activeLoadingUrlTransition,
      inactiveLoading: inactiveLoadingUrlTransition,
      setMessage: setMessageUrlTransition,
    },
  };

  return (
    <>
      <MyWalletContainer>
        <SidebarDefault />
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
            Adjunta HASH de transacion y recibo.{" "}
            <span>¡Ya casi terminamos!</span>
          </Text>
        </Indicator>

        <CustomForm
          formTitle=""
          formType="walletDeposit"
          config={config}
          handleSubmit={handleSubmit}
          action={sendWalletDepositTransaction}
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
                      uploadTransactionVoucher(e, config2);
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
                size={{ lg: 100, md: 80, sm: 80 }}
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
      </MyWalletContainer>
      <Toast
        type={toast.toastType}
        message={toast.toastMessage}
        toastConfig={{
          hideToast,
          getToastColor,
          isToastVisible,
        }}
      />
    </>
  );
};

export default MyWalletDeposit;
