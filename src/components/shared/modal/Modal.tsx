import { FaXmark } from "react-icons/fa6";

import { ModalBodyProps, ModalHeaderProps, ModalProps } from "types";

import {
  ModalBodyContainer,
  ModalContainer,
  ModalHeader,
  ModalWindow,
} from "./Modal.style";

const Modal = (props: ModalProps) => {
  const { isModalVisible, children } = props;

  return (
    <ModalContainer ismodalvisible={isModalVisible.toString()}>
      <ModalWindow>{children}</ModalWindow>
    </ModalContainer>
  );
};

const ModalHead = (props: ModalHeaderProps) => {
  const { title, hideModal } = props;
  return (
    <ModalHeader>
      <h1>{title}</h1>
      <FaXmark onClick={hideModal} />
    </ModalHeader>
  );
};

const ModalBody = (props: ModalBodyProps) => {
  const { children } = props;
  return <ModalBodyContainer>{children}</ModalBodyContainer>;
};

Modal.Head = ModalHead;
Modal.Body = ModalBody;

export default Modal;
