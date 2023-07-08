/*Functions */
import { CustomButtonProps, LoadingButtonProps } from "types";

import { Loading } from "@components/index";

/*Styles */
import { Button } from "./CustomButton.style";

const DefaultButton = (props: CustomButtonProps): JSX.Element => {
  const { label, title, onClick, style, disabled, children } = props;
  const { bg, fontColor, width, padding } = style;

  return (
    <Button
      type="button"
      background={bg}
      color={fontColor}
      title={title}
      onClick={onClick}
      width={width}
      padding={padding}
      disabled={disabled !== undefined ? disabled : false}
    >
      {children}
      <span>{label}</span>
    </Button>
  );
};

const DefaultSubmit = (props: CustomButtonProps): JSX.Element => {
  const { label, title, style, disabled, children } = props;
  const { bg, fontColor, width } = style;

  return (
    <Button
      type="submit"
      background={bg}
      color={fontColor}
      title={title}
      width={width}
      disabled={disabled !== undefined ? disabled : false}
    >
      {children}
      <span>{label}</span>
    </Button>
  );
};

const LoadingButton = (props: LoadingButtonProps): JSX.Element => {
  const { message, style } = props;
  const { bg, fontColor, width } = style;

  return (
    <Button
      type="button"
      background={bg}
      color={fontColor}
      width={width}
      disabled
    >
      <Loading message={message} textColor={fontColor} />
    </Button>
  );
};

export { DefaultButton, DefaultSubmit, LoadingButton };
