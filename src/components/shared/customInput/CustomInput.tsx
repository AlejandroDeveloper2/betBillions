import { CustomInputProps } from "../../../types";

/*Styles */
import {
  InputContainer,
  Input,
  InputContainerLabel,
  Label,
} from "./CustomInput.style";
import { usePasswordInput } from "../../../hooks";

const DefaultInput = (props: CustomInputProps) => {
  const { type, placeholder, name, Icon, register } = props;
  const { getPasswordVisibility, PassIcon } = usePasswordInput(type);
  const inputType = getPasswordVisibility();

  return (
    <InputContainer>
      <Icon color="var(--dark-gray)" style={{ fontSize: "1.2rem" }} />
      <Input type={inputType} placeholder={placeholder} {...register(name)} />
      <PassIcon />
    </InputContainer>
  );
};

const InputWithLabel = (props: CustomInputProps): JSX.Element => {
  const { label } = props;
  return (
    <InputContainerLabel>
      <Label>{label}</Label>
      <DefaultInput {...props} />
    </InputContainerLabel>
  );
};

export { DefaultInput, InputWithLabel };
