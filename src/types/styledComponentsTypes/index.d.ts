interface ButtonStyleProps {
  background: string;
  color: string;
  width?: string;
  padding?: string;
}

interface ToastStyleProps {
  background: string;
  color: string;
}

interface LoadingStyleProps {
  textcolor: string;
}

interface ContainerFormStyleProps {
  width: number;
}

interface MenuItemStyleProps {
  background: string;
  color: string;
}

interface ImageStyledProps {
  lg: {
    width: number;
    height: number;
  };
  md: {
    width: number;
    height: number;
  };
  sm: {
    width: number;
    height: number;
  };
}

interface TableStyledProps {
  columnsnumber: number;
}

interface RoundStyledProps {
  roundkey: number;
}

interface ModalStyledProps {
  ismodalvisible: string;
}

interface BallStyledProps {
  color: string;
}

interface DynamicBallStyleProps extends BallStyledProps {
  background: string;
}

interface DropdownStyledProps {
  direction: "row" | "column";
  visible: string;
  wrap: string;
}

export type {
  ButtonStyleProps,
  ToastStyleProps,
  LoadingStyleProps,
  ContainerFormStyleProps,
  MenuItemStyleProps,
  ImageStyledProps,
  TableStyledProps,
  RoundStyledProps,
  ModalStyledProps,
  BallStyledProps,
  DropdownStyledProps,
  DynamicBallStyleProps,
};
