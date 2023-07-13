import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  AiFillCheckSquare,
  AiFillDollarCircle,
  AiOutlineCheck,
} from "react-icons/ai";

import { ValidTransactionFormValues, ValidTransactionProps } from "types";
import { useLoading, useTransactionContext } from "@hooks/index";
import { getDefaultValues, schema } from "./constants";

import {
  CustomForm,
  DefaultButton,
  DefaultSubmit,
  ErrorMessage,
  InputWithLabel,
  LoadingButton,
  Modal,
} from "@components/index";

import { DialogMessage } from "@styles/GlobalStyles.style";

const ValidTransaction = (props: ValidTransactionProps): JSX.Element => {
  const { isModalVisible, hideModal, dataProm } = props;
  const {
    isLoading,
    loadingMessage,
    activeLoading,
    inactiveLoading,
    setMessage,
  } = useLoading();
  const { validateLoyaltyPlanTransaction, validateTransaction } =
    useTransactionContext();

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

  useEffect(() => {
    setValue("id", dataProm ? dataProm.id : 0);
    setValue("transaction", dataProm ? dataProm.transaction : "");
  }, [dataProm]);

  return (
    <Modal isModalVisible={isModalVisible}>
      <Modal.Head title="Validar transacción" hideModal={hideModal} />
      <Modal.Body>
        {dataProm?.typeTransaction === "UserNetwork" ? (
          <>
            <DialogMessage>
              ¿Esta seguro que desea verificar esta transacción?
            </DialogMessage>
            {isLoading ? (
              <LoadingButton
                message={loadingMessage}
                style={{
                  bg: "var(--black)",
                  fontColor: "var(--white)",
                  width: "20rem",
                }}
              />
            ) : (
              <DefaultButton
                style={{
                  bg: "var(--black)",
                  fontColor: "var(--white)",
                  width: "20rem",
                }}
                title={"Verificar transacción"}
                label="Validar"
                onClick={() =>
                  validateLoyaltyPlanTransaction(dataProm.transaction, {
                    activeLoading,
                    inactiveLoading,
                    setMessage,
                  })
                }
              >
                <AiFillCheckSquare
                  style={{ fill: "var(--white)", fontSize: 20, marginRight: 5 }}
                />
              </DefaultButton>
            )}
          </>
        ) : (
          <CustomForm
            formTitle=""
            formType="TransactionValidation"
            config={{
              activeLoading,
              inactiveLoading,
              setMessage,
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
            {isLoading ? (
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
              >
                <AiOutlineCheck
                  style={{
                    fill: "var(--white)",
                    fontSize: 20,
                    marginRight: 5,
                  }}
                />
              </DefaultSubmit>
            )}
          </CustomForm>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default ValidTransaction;
