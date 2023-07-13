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

interface ValidTransactionFormValues {
  id: number;
  transaction: string;
  price: number;
  confirmPrice: number;
}

interface UserProfileFormValues {
  username: string;
  fullName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  sponsorName?: string;
  photo: string;
}

export type {
  LoginFormValues,
  RegisterFormValues,
  RecoverPassFormValues,
  UpdatePassFormValues,
  WalletDepositFormValues,
  WalletWithdrawFormValues,
  ValidTransactionFormValues,
  UserProfileFormValues,
};
