/* eslint-disable @typescript-eslint/no-explicit-any */
import { IconType } from "react-icons";
import {
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
} from "react-hook-form";

import {
  HeaderType,
  LoginFormValues,
  MessageConfig,
  RecoverPassFormValues,
  RegisterFormValues,
  ToastConfig,
  UpdatePassFormValues,
  WalletDepositFormValues,
  WalletWithdrawFormValues,
} from "..";

type InputName =
  | "password"
  | "username"
  | "fullName"
  | "invitationLink"
  | "email"
  | "confirmPassword"
  | "confirmEmail"
  | "transaction"
  | "wallet";

type ImageProps = {
  source: string;
  alt: string;
  size: {
    lg: number;
    md: number;
    sm: number;
  };
};

type FormType =
  | "login"
  | "register"
  | "recoverPass"
  | "updatePass"
  | "walletDeposit"
  | "walletWithdraw";

type CustomFormProps = {
  children: JSX.Element | JSX.Element[] | any[];
  formTitle: string;
  config: MessageConfig;
  formType: FormType;
  handleSubmit: UseFormHandleSubmit<
    | RegisterFormValues
    | LoginFormValues
    | RecoverPassFormValues
    | UpdatePassFormValues
    | WalletDepositFormValues
    | WalletWithdrawFormValues,
    undefined
  >;
  reset: UseFormReset<
    | RegisterFormValues
    | LoginFormValues
    | RecoverPassFormValues
    | UpdatePassFormValues
    | WalletDepositFormValues
    | WalletWithdrawFormValues
    | any
  >;
  action: (
    data: any,
    config: MessageConfig,
    reset: UseFormReset<
      | RegisterFormValues
      | LoginFormValues
      | RecoverPassFormValues
      | UpdatePassFormValues
      | WalletDepositFormValues
      | WalletWithdrawFormValues
      | any
    >
  ) => Promise<void>;
};

type CustomInputProps = {
  type: "text" | "password" | "number";
  placeholder: string;
  label: string | null;
  Icon: IconType;
  register: UseFormRegister<
    | RegisterFormValues
    | LoginFormValues
    | RecoverPassFormValues
    | UpdatePassFormValues
    | WalletDepositFormValues
    | WalletWithdrawFormValues
    | any
  >;
  name: InputName;
  disabled?: boolean;
};

type CustomFileInputProps = {
  name: string;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type CustomButtonProps = {
  label?: string;
  style: {
    bg: string;
    fontColor: string;
    width?: string;
  };
  title: string;
  disabled?: boolean;
  children?: JSX.Element | JSX.Element[];
  onClick?: () => void;
};

type ErrorMessageProps = {
  message: string | undefined;
};

enum ToastTypes {
  error = "Error",
  success = "Success",
  warning = "Warning",
}

type ToastProps = {
  message: string | null;
  type: ToastTypes | null;
  toastConfig: {
    isToastVisible: boolean | string;
    getToastColor: () => string;
    hideToast: () => void;
  };
};

type LoadingProps = {
  message: string | null;
  textColor: string;
};

type LoadingButtonProps = {
  message: string | null;
  style: {
    bg: string;
    fontColor: string;
    width?: string;
  };
};

type MenuProps = {
  children: JSX.Element | JSX.Element[];
};

type AdCardProps = {
  children: JSX.Element | JSX.Element[];
  play?: boolean;
  lotteryId: number;
};

type IndicatorProps = {
  children: JSX.Element | JSX.Element[];
  width: string;
};

type InvitationLinkProps = {
  toastConfig: ToastConfig;
};

type SidebarProps = {
  children?: JSX.Element | JSX.Element[] | any;
};

type TableProps = {
  children: JSX.Element | JSX.Element[] | any;
  headers: HeaderType[];
  columnsNumber: number;
  title: string;
};

type TableItemProps = {
  value: string | number;
  Icon: IconType;
  label: string;
};

type TableRowProps = {
  children: JSX.Element | JSX.Element[] | any;
  columnsNumber: number;
};

export type {
  ImageProps,
  CustomFormProps,
  FormType,
  CustomInputProps,
  CustomFileInputProps,
  CustomButtonProps,
  ErrorMessageProps,
  ToastProps,
  LoadingProps,
  LoadingButtonProps,
  MenuProps,
  AdCardProps,
  IndicatorProps,
  InvitationLinkProps,
  SidebarProps,
  TableProps,
  TableItemProps,
  TableRowProps,
};

export { ToastTypes };
