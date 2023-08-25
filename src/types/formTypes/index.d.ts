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

interface SupportFormValues {
  category: string;
  question: string;
  urlPhoto?: string;
}

interface SupportAnswerFormValues {
  id: number;
  answer: string;
}

interface WithdrawFormValues {
  walletAddress: string;
  value: number;
}

interface RoundFormValues {
  typeGame: string;
  award: number;
}

interface LotteryFormValues {
  startDate: string;
  numberOfRounds: number;
  rounds: RoundFormValues[];
  state: string;
  price: number;
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
  SupportFormValues,
  SupportAnswerFormValues,
  WithdrawFormValues,
  RoundFormValues,
  LotteryFormValues,
};
