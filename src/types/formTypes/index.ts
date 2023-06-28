interface LoginFormValues {
  username: string;
  password: string;
}

interface RegisterFormValues {
  username: string;
  email: string;
  fullName: string;
  password: string;
  confirmPassword: string;
  invitationLink: string | undefined;
}

interface RecoverPassFormValues {
  email: string;
}

export type { LoginFormValues, RegisterFormValues, RecoverPassFormValues };
