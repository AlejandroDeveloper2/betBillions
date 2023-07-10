import styled from "styled-components";

const EmptyContainer = styled.div`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

const EmptyMessage = styled.p`
  font-size: 1.2rem;
  color: var(--dark-gray);
  font-weight: 500;
  text-align: center;
`;

export { EmptyContainer, EmptyMessage };
