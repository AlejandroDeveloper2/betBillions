import styled from "styled-components";

const CheckboxContainer = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Label = styled.p`
  font-weight: normal;
  font-size: 1rem;
  text-align: center;
  text-transform: uppercase;
  color: var(--bg-secondary-color);
`;

export { CheckboxContainer, Label };
