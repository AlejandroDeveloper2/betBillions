import styled from "styled-components";

const InputContainer = styled.div`
  width: 100%;
  padding: 1rem 1rem;
  border-radius: 4rem;
  background-color: var(--light-gray);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: none;
  &:hover {
    box-shadow: 0 0 0.3rem var(--bg-secondary-color);
  }

  @media (min-width: 768px) {
    padding: 0.5rem 0.5rem;
  }
`;

const Input = styled.input`
  width: 80%;
  height: auto;
  border: none;
  outline: none;
  margin-left: 0.5rem;
  background-color: transparent;
  color: var(--dark-gray);
  font-size: 1rem;
  &::placeholder {
    color: var(--dark-gray);
    opacity: 0.6;
    text-transform: capitalize;
    font-size: 1rem;
  }
  @media (min-width: 768px) {
    font-size: 0.7rem;
    &::placeholder {
      font-size: 0.7rem;
    }
  }
`;

const Label = styled.label`
  color: var(--white);
  font-weight: medium;
  text-transform: capitalize;
  text-align: left;
  font-size: 1rem;
`;

const InputContainerLabel = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 2rem;
`;

export { Input, InputContainer, Label, InputContainerLabel };
