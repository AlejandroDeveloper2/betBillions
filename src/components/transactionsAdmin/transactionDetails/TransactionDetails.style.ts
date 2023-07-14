import styled from "styled-components";

const HashContainer = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  background-color: var(--light-gray);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  gap: 1.5rem;
  overflow-wrap: anywhere;
  p {
    white-space: pre-wrap;
    font-size: 1rem;
    font-weight: 500;
    color: var(--bg-secondary-color);
  }
`;

const TypeTransactionContainer = styled(HashContainer)`
  padding: 1rem;
  gap: 1rem;
  flex-direction: column;
  p {
    vertical-align: middle;
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--dark-gray);
  }
`;

export { HashContainer, TypeTransactionContainer };
