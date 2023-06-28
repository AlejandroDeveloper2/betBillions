import styled from "styled-components";

const ErrorMessageContainer = styled.div`
  width: 100%;
  padding: 0.5rem;
  background-color: var(--error);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  z-index: 2;
  transition: all ease 0.5s;
  span {
    color: var(--white);
    text-align: center;
    font-size: 0.8rem;
    font-weight: medium;
  }
`;

export { ErrorMessageContainer };
