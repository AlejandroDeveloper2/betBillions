/* eslint-disable @typescript-eslint/no-explicit-any */
import { IconType } from "react-icons";
import {
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
} from "react-hook-form";

import {
  AdminTransaction,
  BingoBoard,
  HeaderType,
  LoadingConfig,
  LotteryDetail,
  SupportRequest,
} from "..";
import React, { ReactNode } from "react";

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
  | "walletWithdraw"
  | "TransactionValidation"
  | "ProfileForm"
  | "SupportRequestForm"
  | "LotteryForm";

type CustomFormProps = {
  children: JSX.Element | JSX.Element[] | any[];
  formTitle: string;
  config: LoadingConfig;
  formType: FormType;
  handleSubmit: UseFormHandleSubmit<any, undefined>;
  action: (
    data: any,
    config: LoadingConfig,
    reset?: UseFormReset<any> | any
  ) => Promise<void>;
  reset?: UseFormReset<any> | any;
};

type CustomInputProps = {
  type: "text" | "password" | "number" | "date" | "datetime-local";
  placeholder: string;
  label: string | null;
  Icon: IconType;
  register: UseFormRegister<any>;
  name: string;
  disabled?: boolean;
};

type SelectProps = {
  defaultValue: string;
  label: string | null;
  Icon: IconType;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  children: JSX.Element | JSX.Element[] | any[];
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
    padding?: string;
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
  id: string;
  message: string | null;
  type: ToastTypes;
};

type ToastsConfig = {
  message: string | null;
  type: ToastTypes;
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
  lotteryKey: string;
};

type IndicatorProps = {
  children: JSX.Element | JSX.Element[];
  width: string;
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

type TableOptions = {
  children?: JSX.Element | JSX.Element[] | any;
};

type TableRowProps = {
  children: JSX.Element | JSX.Element[] | any;
  columnsNumber: number;
};

type ModalProps = {
  isModalVisible: boolean;
  children: JSX.Element | JSX.Element[] | any;
};

type ModalHeaderProps = {
  title: string;
  hideModal: () => void;
};

type ModalBodyProps = TableOptions;

type BingoBoardProps = {
  board: BingoBoard;
  index: number;
  children?: JSX.Element | JSX.Element[] | any;
};

type EmptyProps = {
  message: string;
};

type CheckboxProps = {
  isChecked: boolean;
  onChange: () => void;
  label: string;
};

type ExternalLinkProps = {
  url: string;
  title: string;
  label?: string;
  children?: JSX.Element | JSX.Element[];
};

type InvalidTransactionProps = {
  isDialogVisible: boolean;
  hideDialog: (delay?: number) => void;
  dataTransaction: AdminTransaction | undefined;
};

type ValidTransactionProps = {
  isModalVisible: boolean;
  hideModal: (delay?: number) => void;
  dataProm: AdminTransaction | undefined;
};

type TransactionDetailsProps = {
  isDetailModalVisible: boolean;
  hideDetailModal: (delay?: number) => void;
  details: AdminTransaction | undefined;
};

type AvatarProps = {
  photo: string;
  username: string;
};

interface PaginationProps {
  config: {
    next: boolean;
    prev: boolean;
    goBack: () => void;
    goNext: () => void;
    getPaginationIndicators: () => {
      presented: number;
      of: number;
      total: number;
    };
  };
}

type SeeAnswerModalProps = {
  isModalVisible: boolean;
  hideModal: (delay?: number) => void;
  requestAnswer: SupportRequest | undefined;
};

type AnswerRequestModalProps = {
  isModalVisible: boolean;
  hideModal: (delay?: number) => void;
  requestData: SupportRequest | undefined;
};

type GameModeProps = {
  mode: string | null;
};

type DropdownProps = {
  style: {
    direction: "column" | "row";
    wrap: boolean;
  };
  children: JSX.Element | JSX.Element[] | React.ReactNode;
};

type SearchInputProps = {
  name: string;
  value: string;
  Icon: IconType;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type NormalInputProps = {
  name: string;
  value: string | number;
  id: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

type NormalSelectProps = {
  name: string;
  value: string | number;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  label: string;
  defaultValue: string;
  children: ReactNode;
};

interface LotteryDetailsProps {
  lotteryDetails: LotteryDetail | undefined;
}

export type {
  ImageProps,
  CustomFormProps,
  FormType,
  CustomInputProps,
  SelectProps,
  CustomFileInputProps,
  CustomButtonProps,
  ErrorMessageProps,
  ToastProps,
  ToastsConfig,
  LoadingProps,
  LoadingButtonProps,
  MenuProps,
  AdCardProps,
  IndicatorProps,
  SidebarProps,
  TableProps,
  TableItemProps,
  TableRowProps,
  TableOptions,
  ModalProps,
  ModalHeaderProps,
  ModalBodyProps,
  BingoBoardProps,
  EmptyProps,
  CheckboxProps,
  ExternalLinkProps,
  InvalidTransactionProps,
  ValidTransactionProps,
  TransactionDetailsProps,
  AvatarProps,
  PaginationProps,
  SeeAnswerModalProps,
  AnswerRequestModalProps,
  GameModeProps,
  DropdownProps,
  SearchInputProps,
  NormalInputProps,
  NormalSelectProps,
  LotteryDetailsProps,
};

export { ToastTypes };
