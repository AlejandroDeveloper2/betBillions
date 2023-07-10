import { CheckboxProps } from "types";

import { CheckboxContainer, Label } from "./Checkbox.style";

const Checkbox = (props: CheckboxProps): JSX.Element => {
  const { onChange, isChecked } = props;
  return (
    <CheckboxContainer>
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      <Label>Acepto todos los terminos y condiciones</Label>
    </CheckboxContainer>
  );
};

export default Checkbox;
