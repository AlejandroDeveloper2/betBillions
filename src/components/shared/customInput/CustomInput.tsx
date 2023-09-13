import {
  CustomFileInputProps,
  CustomInputProps,
  NormalInputProps,
  NormalSelectProps,
  SearchInputProps,
  SelectProps,
} from "types";
import { usePasswordInput } from "@hooks/index";

/*Styles */
import {
  InputContainer,
  Input,
  InputContainerLabel,
  Label,
  InputContainerVariant,
  InputUploadFile,
  Select,
  Textarea,
  TextareaContainer,
} from "./CustomInput.style";

const DefaultInput = (props: CustomInputProps) => {
  const { type, placeholder, name, disabled, Icon, register } = props;
  const { getPasswordVisibility, PassIcon } = usePasswordInput(type);
  const inputType = getPasswordVisibility();

  return (
    <InputContainer aria-disabled={disabled}>
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

const SelectWithLabel = (props: SelectProps): JSX.Element => {
  const { defaultValue, label, Icon, name, value, onChange, children } = props;
  return (
    <InputContainerLabel>
      <Label>{label}</Label>
      <InputContainer>
        <Icon color="var(--dark-gray)" style={{ fontSize: "1.3rem" }} />
        <Select name={name} value={value} onChange={onChange}>
          <option value="">{defaultValue}</option>
          {children}
        </Select>
      </InputContainer>
    </InputContainerLabel>
  );
};

const TextareaInput = (props: CustomInputProps): JSX.Element => {
  const { placeholder, name, disabled, Icon, register } = props;
  return (
    <TextareaContainer aria-disabled={disabled}>
      <Icon color="var(--dark-gray)" style={{ fontSize: "1.3rem" }} />
      <Textarea
        placeholder={placeholder}
        disabled={disabled}
        {...register(name)}
      ></Textarea>
    </TextareaContainer>
  );
};

const SearchInput = (props: SearchInputProps): JSX.Element => {
  const { name, value, Icon, placeholder, onChange } = props;
  return (
    <InputContainer>
      <Icon color="var(--dark-gray)" style={{ fontSize: "1.3rem" }} />
      <Input
        type="text"
        value={value}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
      />
    </InputContainer>
  );
};

const NormalInput = (props: NormalInputProps): JSX.Element => {
  return (
    <InputContainerLabel>
      <Label>{props.placeholder}</Label>
      <InputContainer>
        <Input {...props} />
      </InputContainer>
    </InputContainerLabel>
  );
};

const NormalSelect = (props: NormalSelectProps): JSX.Element => {
  const { defaultValue, label, name, value, id, onChange, children } = props;

  return (
    <InputContainerLabel>
      <Label>{label}</Label>
      <InputContainer>
        <Select id={id} name={name} value={value} onChange={onChange}>
          <option value="">{defaultValue}</option>
          {children}
        </Select>
      </InputContainer>
    </InputContainerLabel>
  );
};

export {
  DefaultInput,
  InputWithLabel,
  InputVariant,
  InputFile,
  SelectWithLabel,
  TextareaInput,
  SearchInput,
  NormalInput,
  NormalSelect,
};
