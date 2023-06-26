import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  z-index: 0;
`;

const FormTitle = styled.h1`
  color: var(--bg-secondary-color);
  font-weight: bold;
  text-transform: capitalize;
  text-align: center;
  font-size: 1.5rem;
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
`;

export { Form, FormTitle, FormBody };
