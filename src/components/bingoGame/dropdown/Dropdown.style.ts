import styled from "styled-components";

import { DropdownStyledProps } from "types";

const DropdownContainer = styled.div`
  width: 5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
  @media (min-width: 768px) {
    width: 15rem;
  }
`;

const DropdownItemsContainer = styled.div<DropdownStyledProps>`
  width: 100%;
  height: 40rem;
  overflow-y: scroll;
  padding: 0.5rem 1rem;
  position: absolute;
  top: 3rem;
  left: 0;
  background-color: var(--white);
  transition: all 0.5s ease-in;
  opacity: ${(props: DropdownStyledProps) =>
    props.visible === "true" ? "1" : "0"};
  display: flex;
  flex-direction: ${(props: DropdownStyledProps) => props.direction};
  flex-wrap: ${(props: DropdownStyledProps) =>
    props.wrap === "true" ? "wrap" : "nowrap"};
  justify-content: center;
  align-items: center;
  gap: 1rem;
  z-index: ${(props: DropdownStyledProps) =>
    props.visible === "true" ? "20" : "-20"};
`;

export { DropdownItemsContainer, DropdownContainer };
