import { FaXmark } from "react-icons/fa6";

import { InvalidTransactionProps } from "types";
import { useLoading, useTransactionContext } from "@hooks/index";

import { Modal, LoadingButton, DefaultButton } from "@components/index";

import { DialogMessage } from "@styles/GlobalStyles.style";

const InvalidTransaction = (props: InvalidTransactionProps): JSX.Element => {
  const { isDialogVisible, hideDialog, dataTransaction } = props;
  const {
    isLoading,
    loadingMessage,
    activeLoading,
    inactiveLoading,
    setMessage,
  } = useLoading();
  const { invalidateTransaction } = useTransactionContext();

  return (
    <Modal isModalVisible={isDialogVisible}>
      <Modal.Head title="Advertencia" hideModal={hideDialog} />
      <Modal.Body>
        <DialogMessage>
          ¿Esta seguro que desea invalidar la transacción?
        </DialogMessage>
        {isLoading ? (
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
              invalidateTransaction(
                dataTransaction ? dataTransaction?.transaction : "",
                {
                  activeLoading,
                  inactiveLoading,
                  setMessage,
                }
              ).then(() => {
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
  );
};

export default InvalidTransaction;
