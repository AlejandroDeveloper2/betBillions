interface ButtonStyleProps {
  background: string;
  color: string;
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

export type {
  ButtonStyleProps,
  ToastStyleProps,
  LoadingStyleProps,
  ContainerFormStyleProps,
  MenuItemStyleProps,
};
