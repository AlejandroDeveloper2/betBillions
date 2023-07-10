import { CheckboxProps } from "types";

import { CheckboxContainer, Label } from "./Checkbox.style";

const Checkbox = (props: CheckboxProps): JSX.Element => {
  const { onChange, isChecked, label } = props;
  return (
    <CheckboxContainer>
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      <Label>{label}</Label>
    </CheckboxContainer>
  );
};

export default Checkbox;
