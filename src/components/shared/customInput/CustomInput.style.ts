import styled from "styled-components";

const InputContainer = styled.div`
  width: 100%;
  padding: 1rem 1rem;
  border-radius: 4rem;
  background-color: ${(props) =>
    props["aria-disabled"] ? "var(--gray)" : "var(--light-gray)"};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: none;
  transition: all ease 0.5s;
  &:hover {
    box-shadow: 0 0 0.3rem var(--bg-secondary-color);
  }

  @media (min-width: 768px) {
    padding: 1rem 2rem;
  }
`;

const InputContainerVariant = styled(InputContainer)`
  background-color: transparent;
  &:hover {
    box-shadow: none;
  }
  input {
    color: var(--pink);
    font-size: 1rem;
    font-weight: bold;
    &::placeholder {
      color: var(--pink);
      font-weight: bold;
      font-size: 1rem;
      opacity: 0.5;
    }
  }
  @media (min-width: 768px) {
    input {
      font-size: 1.5rem;
      &::placeholder {
        font-size: 1.5rem;
      }
    }
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
    font-size: 1rem;
    &::placeholder {
      font-size: 1rem;
    }
  }
`;

const Select = styled.select`
  width: 80%;
  height: auto;
  border: none;
  outline: none;
  margin-left: 0.5rem;
  background-color: transparent;
  color: var(--dark-gray);
  font-size: 1rem;
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const InputUploadFile = styled.input`
  outline: none;
  position: absolute;
  top: 0;
  right: 0;
  min-height: 100%;
  min-width: 100%;
  opacity: 0;
  cursor: pointer;
  display: block;
`;

const Label = styled.label`
  color: var(--bg-secondary-color);
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
  gap: 1rem;
`;

const Textarea = styled.textarea`
  width: 80%;
  height: 10rem;
  border: none;
  outline: none;
  margin-left: 0.5rem;
  resize: none;
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
    font-size: 1rem;
    &::placeholder {
      font-size: 1rem;
    }
  }
`;

const TextareaContainer = styled(InputContainer)`
  align-items: flex-start;
  border-radius: 1rem;
`;

export {
  Input,
  InputContainer,
  Label,
  InputContainerLabel,
  InputContainerVariant,
  InputUploadFile,
  Select,
  Textarea,
  TextareaContainer,
};
