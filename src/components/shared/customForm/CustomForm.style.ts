import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

const FormTitle = styled.h1`
  color: var(--bg-secondary-color);
  font-weight: bold;
  text-transform: capitalize;
  text-align: center;
  font-size: 1.5rem;
  z-index: 2;
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const FormBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  z-index: 2;
`;

export { Form, FormTitle, FormBody };
