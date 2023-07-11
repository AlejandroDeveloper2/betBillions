import { TransactionDetailsProps } from "types";

import { Modal, Image } from "@components/index";

import { DialogMessage } from "@styles/GlobalStyles.style";

const TransactionDetails = (props: TransactionDetailsProps): JSX.Element => {
  const { isDetailModalVisible, hideDetailModal, details } = props;

  return (
    <Modal isModalVisible={isDetailModalVisible}>
      <Modal.Head title="Detalles de transacción" hideModal={hideDetailModal} />
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
  );
};

export default TransactionDetails;
