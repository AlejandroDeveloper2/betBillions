import styled from "styled-components";

import { ModalStyledProps } from "types";

const ModalContainer = styled.div<ModalStyledProps>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: ${(props: ModalStyledProps) =>
    props.ismodalvisible === "false" ? "-50" : "50"};
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props: ModalStyledProps) =>
    props.ismodalvisible === "false" ? "0" : "1"};
  transition: all 0.5s ease;
`;

const ModalContainerVariant = styled(ModalContainer)`
  background-color: rgba(0, 0, 0, 0.8);
`;

const ModalWindow = styled.div`
  width: 100%;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1.5rem;
  overflow: hidden;
  transform: scale(0.8);
  @media (min-width: 768px) {
    width: 30rem;
    transform: scale(1);
  }
`;

const ModalHeader = styled.div`
  width: 100%;
  height: 4rem;
  padding: 0 1rem;
  background-color: var(--black);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  h1 {
    font-size: 1.2rem;
    color: var(--white);
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;
  }
  svg {
    fill: var(--white);
    font-size: 1.4rem;
    cursor: pointer;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    right: 1rem;
  }
`;

const ModalBodyContainer = styled.div`
  width: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
`;

export {
  ModalContainer,
  ModalWindow,
  ModalHeader,
  ModalBodyContainer,
  ModalContainerVariant,
};
