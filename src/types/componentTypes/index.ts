/* eslint-disable @typescript-eslint/no-explicit-any */
import { IconType } from "react-icons";
import { UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

import { LoginFormValues } from "..";

type ImageProps = {
  source: string;
  alt: string;
  dimensions: {
    width: number;
    height: number;
  };
};

type CustomFormProps = {
  children: JSX.Element | JSX.Element[] | any[];
  formTitle: string;
  handleSubmit: UseFormHandleSubmit<LoginFormValues, undefined>;
  action: (data: LoginFormValues) => void;
};

type CustomInputProps = {
  type: "text" | "password" | "number";
  placeholder: string;
  label: string | null;
  Icon: IconType;
  register: UseFormRegister<LoginFormValues>;
  name: "password" | "username";
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

export type {
  ImageProps,
  CustomFormProps,
  CustomInputProps,
  CustomButtonProps,
  ErrorMessageProps,
};
