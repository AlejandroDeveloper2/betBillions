import { CustomFileInputProps, CustomInputProps } from "../../../types";

/*Styles */
import {
  InputContainer,
  Input,
  InputContainerLabel,
  Label,
  InputContainerVariant,
  InputUploadFile,
} from "./CustomInput.style";
import { usePasswordInput } from "../../../hooks";

const DefaultInput = (props: CustomInputProps) => {
  const { type, placeholder, name, disabled, Icon, register } = props;
  const { getPasswordVisibility, PassIcon } = usePasswordInput(type);
  const inputType = getPasswordVisibility();

  return (
    <InputContainer>
      <Icon color="var(--dark-gray)" style={{ fontSize: "1.3rem" }} />
      <Input
        type={inputType}
        placeholder={placeholder}
        {...register(name)}
        disabled={disabled}
      />
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

const InputVariant = (props: CustomInputProps): JSX.Element => {
  const { type, placeholder, name, disabled, register } = props;
  return (
    <InputContainerVariant>
      <Input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        disabled={disabled}
      />
    </InputContainerVariant>
  );
};

const InputFile = (props: CustomFileInputProps): JSX.Element => {
  const { name, disabled, onChange } = props;
  return (
    <InputUploadFile
      type="file"
      name={name}
      disabled={disabled}
      onChange={onChange}
    />
  );
};

export { DefaultInput, InputWithLabel, InputVariant, InputFile };
