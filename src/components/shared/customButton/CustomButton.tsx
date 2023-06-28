/*Functions */
import {
  CustomButtonProps,
  LoadingButtonProps,
} from "../../../types/componentTypes";

import { Loading } from "../..";

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

const LoadingButton = (props: LoadingButtonProps): JSX.Element => {
  const { message, style } = props;
  const { bg, fontColor } = style;

  return (
    <Button type="button" background={bg} color={fontColor} disabled>
      <Loading message={message} textColor={fontColor} />
    </Button>
  );
};

export { DefaultButton, DefaultSubmit, LoadingButton };
