interface LoginFormValues {
  email: string;
  password: string;
}

interface RegisterFormValues {
  username: string;
  email: string;
  confirmEmail: string;
  fullName: string;
  password: string;
  confirmPassword: string;
  invitationLink: string | undefined;
}

interface RecoverPassFormValues {
  email: string;
}

interface UpdatePassFormValues {
  password: string;
  confirmPassword: string;
}

interface WalletDepositFormValues {
  walletType: string;
  transaction: string;
  urlTransaction: string;
}

interface WalletWithdrawFormValues {
  wallet: string;
}

export type {
  LoginFormValues,
  RegisterFormValues,
  RecoverPassFormValues,
  UpdatePassFormValues,
  WalletDepositFormValues,
  WalletWithdrawFormValues,
};
