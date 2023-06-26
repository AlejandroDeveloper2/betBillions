/*Functions */
import { CustomButtonProps } from "../../../types/componentTypes";

/*Styles */
import { Button } from "./CustomButton.style";

const DefaultButton = (props: CustomButtonProps): JSX.Element => {
  const { label, title, onClick, style, children } = props;
  const { bg, fontColor } = style;

  return (
    <Button
      type="button"
      background={bg}
      color={fontColor}
      title={title}
      onClick={onClick}
    >
      {children}
      <span>{label}</span>
    </Button>
  );
};

const DefaultSubmit = (props: CustomButtonProps): JSX.Element => {
  const { label, title, style, children } = props;
  const { bg, fontColor } = style;

  return (
    <Button type="submit" background={bg} color={fontColor} title={title}>
      {children}
      <span>{label}</span>
    </Button>
  );
};

export { DefaultButton, DefaultSubmit };
