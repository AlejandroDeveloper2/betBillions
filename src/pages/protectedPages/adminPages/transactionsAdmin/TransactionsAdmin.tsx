import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { GrTransaction } from "react-icons/gr";
import { BsCurrencyExchange, BsFillCalendarDateFill } from "react-icons/bs";
import { FaBarcode, FaUserAlt } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { GrStatusDisabledSmall } from "react-icons/gr";
import { MdAlternateEmail } from "react-icons/md";
import { RiPriceTag3Fill } from "react-icons/ri";
import { AiFillDollarCircle, AiFillEye, AiOutlineCheck } from "react-icons/ai";
import { HiXMark } from "react-icons/hi2";
import { FaXmark } from "react-icons/fa6";

import {
  useLoading,
  useModal,
  useRealTimeFecher,
  useToast,
  useTransactionContext,
} from "@hooks/index";
import { TransactionsService } from "@services/transactions.service";
import { getDefaultValues, schema, tableHeaders } from "./constants";
import { formatDate } from "@utils/index";
import { AdminTransaction, ValidTransactionFormValues } from "types";

import {
  CustomForm,
  DefaultButton,
  DefaultSubmit,
  ErrorMessage,
  Footer,
  Image,
  InputWithLabel,
  Loading,
  LoadingButton,
  Modal,
  Table,
  Toast,
} from "@components/index";

import {
  DialogMessage,
  PageTitle,
  TransactionsContainer,
} from "./TransactionsAdmin.style";

const TransactionsAdmin = (): JSX.Element => {
  const transactionsService = new TransactionsService();
  const { data: transactions, isLoading } = useRealTimeFecher(
    "/transaction/list",
    transactionsService.getAdminTransactions
  );
  const { isModalVisible, hideModal, showModal } = useModal();
  const {
    isModalVisible: isDialogVisible,
    data,
    hideModal: hideDialog,
    showModal: showDialog,
  } = useModal<AdminTransaction>();
  const {
    isModalVisible: isDetailModalVisible,
    data: details,
    hideModal: hideDetailModal,
    showModal: showDetailModal,
  } = useModal<AdminTransaction>();

  const {
    register,
    reset,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidTransactionFormValues>({
    defaultValues: getDefaultValues(),
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
    isLoading: isLoadingForm,
    loadingMessage,
    activeLoading,
    inactiveLoading,
    setMessage,
  } = useLoading();

  const { validateTransaction, invalidateTransaction } =
    useTransactionContext();

  return (
    <>
      <Modal isModalVisible={isDialogVisible}>
        <Modal.Head title="Advertencia" hideModal={hideDialog} />
        <Modal.Body>
          <DialogMessage>
            ¿Esta seguro que desea invalidar la transacción?
          </DialogMessage>
          {isLoadingForm ? (
            <LoadingButton
              message={loadingMessage}
              style={{
                bg: "var(--black)",
                fontColor: "var(--white)",
              }}
            />
          ) : (
            <DefaultButton
              style={{
                bg: "var(--black)",
                fontColor: "var(--white)",
              }}
              title={"Invalidar transacción"}
              label="Invalidar"
              onClick={() => {
                invalidateTransaction(data ? data?.transaction : "", {
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
                }).then(() => {
                  hideDialog();
                });
              }}
            >
              <FaXmark
                style={{ fill: "var(--white)", fontSize: 20, marginRight: 5 }}
              />
            </DefaultButton>
          )}
        </Modal.Body>
      </Modal>

      <Modal isModalVisible={isModalVisible}>
        <Modal.Head title="Validar transacción" hideModal={hideModal} />
        <Modal.Body>
          <CustomForm
            formTitle=""
            formType="TransactionValidation"
            config={{
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
            }}
            handleSubmit={handleSubmit}
            action={validateTransaction}
            reset={reset}
          >
            <InputWithLabel
              type="number"
              placeholder="Ingrese el valor en USD de la transacción"
              label={"Precio"}
              Icon={AiFillDollarCircle}
              register={register}
              name="price"
            />
            {errors.price ? (
              <ErrorMessage message={errors.price.message} />
            ) : null}
            <InputWithLabel
              type="number"
              placeholder="Confirme el valor en USD de la transacción"
              label={"Confirmar precio"}
              Icon={AiFillDollarCircle}
              register={register}
              name="confirmPrice"
            />
            {errors.confirmPrice ? (
              <ErrorMessage message={errors.confirmPrice.message} />
            ) : null}
            {isLoadingForm ? (
              <LoadingButton
                message={loadingMessage}
                style={{
                  bg: "var(--black)",
                  fontColor: "var(--white)",
                }}
              />
            ) : (
              <DefaultSubmit
                style={{
                  bg: "var(--black)",
                  fontColor: "var(--white)",
                }}
                title={"Validar transacción"}
                label="Validar"
                // onClick={() => hideModal(1000)}
              >
                <AiOutlineCheck
                  style={{ fill: "var(--white)", fontSize: 20, marginRight: 5 }}
                />
              </DefaultSubmit>
            )}
          </CustomForm>
        </Modal.Body>
      </Modal>

      <Modal isModalVisible={isDetailModalVisible}>
        <Modal.Head
          title="Detalles de transacción"
          hideModal={hideDetailModal}
        />
        <Modal.Body>
          <DialogMessage>Comprobante de pago</DialogMessage>
          <Image
            source={details ? details.urlTransaction : ""}
            alt="Comprobante de pago"
            size={{
              lg: 60,
              md: 60,
              sm: 80,
            }}
          />
        </Modal.Body>
      </Modal>

      <TransactionsContainer>
        <PageTitle>
          <h1>Transaciones de usuario</h1>
          <GrTransaction
            style={{ fontSize: 50, color: "var(--bg-secondary-color)" }}
          />
        </PageTitle>
        {isLoading ? (
          <Loading
            message="Cargando transaciones de usuario..."
            textColor="var(--bg-secondary-color)"
          />
        ) : (
          <Table
            headers={tableHeaders}
            columnsNumber={9}
            title="Listado de transacciones"
          >
            {transactions?.map((transaction) => (
              <Table.Row key={transaction.id} columnsNumber={9}>
                <Table.Item
                  value={transaction.walletType}
                  Icon={GiWallet}
                  label="Billetera"
                />
                <Table.Item
                  value={transaction.transaction}
                  Icon={FaBarcode}
                  label="Hash"
                />
                <Table.Item
                  value={transaction.price ? transaction.price : 0}
                  Icon={RiPriceTag3Fill}
                  label="Precio"
                />
                <Table.Item
                  value={transaction.currency}
                  Icon={BsCurrencyExchange}
                  label="Moneda"
                />
                <Table.Item
                  value={
                    transaction.stateTransaction === "Completed"
                      ? "Completada"
                      : transaction.stateTransaction === "Pending"
                      ? "Pendiente"
                      : "Invalidada"
                  }
                  Icon={GrStatusDisabledSmall}
                  label="Estado"
                />
                <Table.Item
                  value={formatDate(transaction.createdAt, "numeric")}
                  Icon={BsFillCalendarDateFill}
                  label="Registro"
                />
                <Table.Item
                  value={transaction.username}
                  Icon={FaUserAlt}
                  label="Usuario"
                />
                <Table.Item
                  value={transaction.email}
                  Icon={MdAlternateEmail}
                  label="Correo"
                />
                <Table.Options>
                  <DefaultButton
                    style={{
                      bg: "var(--blue)",
                      fontColor: "var(--white)",
                      width: "auto",
                      padding: "0.3rem 0.2rem",
                    }}
                    title={"Ver mas detalles"}
                    onClick={() => showDetailModal(transaction)}
                  >
                    <AiFillEye
                      style={{ color: "var(--white)", fontSize: 20 }}
                    />
                  </DefaultButton>
                  <DefaultButton
                    style={{
                      bg: "var(--success)",
                      fontColor: "var(--white)",
                      width: "auto",
                      padding: "0.3rem 0.2rem",
                    }}
                    title={"Validar transacción"}
                    onClick={() => {
                      showModal();
                      setValue("id", transaction.id);
                      setValue("transaction", transaction.transaction);
                    }}
                  >
                    <AiOutlineCheck
                      style={{ color: "var(--white)", fontSize: 20 }}
                    />
                  </DefaultButton>
                  <DefaultButton
                    style={{
                      bg: "var(--error)",
                      fontColor: "var(--white)",
                      width: "auto",
                      padding: "0.3rem 0.2rem",
                    }}
                    title={"Invalidar transacción"}
                    onClick={() => showDialog(transaction)}
                  >
                    <HiXMark style={{ color: "var(--white)", fontSize: 20 }} />
                  </DefaultButton>
                </Table.Options>
              </Table.Row>
            ))}
          </Table>
        )}
        <Footer />
      </TransactionsContainer>
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

export default TransactionsAdmin;
