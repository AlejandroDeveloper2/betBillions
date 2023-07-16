import { SeeAnswerModalProps } from "types";

import { Modal } from "@components/index";

import { DialogMessage } from "@styles/GlobalStyles.style";
import { ResponseParagrahp } from "./SeeAnswerModal.style";

const SeeAnswerModal = (props: SeeAnswerModalProps): JSX.Element => {
  const { isModalVisible, hideModal, requestAnswer } = props;

  return (
    <Modal isModalVisible={isModalVisible}>
      <Modal.Head title="Respuesta de la solicitud" hideModal={hideModal} />
      <Modal.Body>
        <DialogMessage>Respuesta</DialogMessage>
        <ResponseParagrahp>{requestAnswer?.answer}</ResponseParagrahp>
      </Modal.Body>
    </Modal>
  );
};

export default SeeAnswerModal;
