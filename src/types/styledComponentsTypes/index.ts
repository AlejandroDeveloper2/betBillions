interface ButtonStyleProps {
  background: string;
  color: string;
  width?: string;
}

interface ToastStyleProps extends ButtonStyleProps {
  istoastvisible: boolean | string;
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
  columnsNumber: number;
}

interface RoundStyledProps {
  roundKey: number;
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
};
