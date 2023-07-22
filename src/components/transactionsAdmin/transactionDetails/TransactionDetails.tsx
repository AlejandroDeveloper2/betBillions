import { FaCopy } from "react-icons/fa";

import { TransactionDetailsProps } from "types";
import { copyToClipBoard } from "@utils/index";
import { useToastContext } from "@hooks/index";

import { Modal, Image, DefaultButton } from "@components/index";

import { DialogMessage } from "@styles/GlobalStyles.style";
import {
  HashContainer,
  TypeTransactionContainer,
} from "./TransactionDetails.style";

const TransactionDetails = (props: TransactionDetailsProps): JSX.Element => {
  const { isDetailModalVisible, hideDetailModal, details } = props;
  const { openToast } = useToastContext();

  const getTransactionType = (): string => {
    const name = details
      ? details.typeTransaction === "Recharge"
        ? "Recarga"
        : "Plan de fidelización"
      : "";
    return name;
  };

  return (
    <Modal isModalVisible={isDetailModalVisible}>
      <Modal.Head title="Detalles de transacción" hideModal={hideDetailModal} />
      <Modal.Body>
        <DialogMessage>Comprobante de pago</DialogMessage>
        <Image
          source={details ? details.urlTransaction : ""}
          alt="Comprobante de pago"
          size={{
            lg: 100,
            md: 100,
            sm: 80,
          }}
        />
        <DialogMessage>Hash de transacción</DialogMessage>
        <HashContainer>
          <p>{details ? details.transaction : ""}</p>
          <DefaultButton
            style={{
              bg: "var(--black)",
              fontColor: "var(--white)",
              width: "4rem",
              padding: "0.7rem 0.7rem",
            }}
            title={"Copiar hash de transacción"}
            onClick={() =>
              copyToClipBoard(details ? details.transaction : "", openToast)
            }
          >
            <FaCopy style={{ color: "var(--white)", fontSize: 25 }} />
          </DefaultButton>
        </HashContainer>
        <DialogMessage>Tipo de transacción</DialogMessage>
        <TypeTransactionContainer>
          <p>{getTransactionType()}</p>
        </TypeTransactionContainer>
      </Modal.Body>
    </Modal>
  );
};

export default TransactionDetails;
