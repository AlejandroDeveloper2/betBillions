/* eslint-disable @typescript-eslint/no-explicit-any */
import { IconType } from "react-icons";
import { UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

import {
  LoginFormValues,
  MessageConfig,
  RecoverPassFormValues,
  RegisterFormValues,
  UpdatePassFormValues,
} from "..";

type ImageProps = {
  source: string;
  alt: string;
  dimensions: {
    width: number;
    height: number;
  };
};

type FormType = "login" | "register" | "recoverPass" | "updatePass";

type CustomFormProps = {
  children: JSX.Element | JSX.Element[] | any[];
  formTitle: string;
  config: MessageConfig;
  formType: FormType;
  handleSubmit: UseFormHandleSubmit<
    | RegisterFormValues
    | LoginFormValues
    | RecoverPassFormValues
    | UpdatePassFormValues,
    undefined
  >;
  action: (data: any, config: MessageConfig) => Promise<void>;
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
    | any
  >;
  name:
    | "password"
    | "username"
    | "fullName"
    | "invitationLink"
    | "email"
    | "confirmPassword"
    | "confirmEmail";
  disabled?: boolean;
};

type CustomButtonProps = {
  label?: string;
  style: {
    bg: string;
    fontColor: string;
  };
  title: string;
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
  };
};

type MenuProps = {
  children: JSX.Element | JSX.Element[];
};

interface LayoutProps {
  toastSettings: {
    isToastVisible: boolean;
    toast: {
      toastMessage: string | null;
      toastType: ToastTypes | null;
    };
    getToastColor: () => string;
    showToast: () => void;
    hideToast: (delay?: number) => void;
    configToast: (type: ToastTypes, message: string) => void;
  };
}

export type {
  ImageProps,
  CustomFormProps,
  FormType,
  CustomInputProps,
  CustomButtonProps,
  ErrorMessageProps,
  ToastProps,
  LoadingProps,
  LoadingButtonProps,
  MenuProps,
  LayoutProps,
};

export { ToastTypes };
