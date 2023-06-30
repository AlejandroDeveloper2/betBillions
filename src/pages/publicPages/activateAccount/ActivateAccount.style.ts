import styled from "styled-components";

const PageTitle = styled.h1`
  font-size: 1.6rem;
  color: var(--bg-secondary-color);
  font-weight: bold;
  text-align: center;
  text-transform: capitalize;
`;

const FormLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 3rem;
`;

export { PageTitle, FormLayout };
