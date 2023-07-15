/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseFormSetValue } from "react-hook-form";
import { Location } from "react-router-dom";

import {
  AuthStatus,
  BingoBall,
  BingoBoard,
  FormType,
  MenuItemStyleProps,
  ToastConfig,
  ToastTypes,
} from "types";

class ValuesForm {
  public setFormValues(formType: FormType, data: any) {
    const newFormData = { ...data };
    if (formType === "register") {
      delete newFormData?.confirmPassword;
      delete newFormData?.confirmEmail;
      newFormData.username.replace(/ /g, "");
      return newFormData;
    }

    if (formType === "updatePass") {
      delete newFormData?.confirmPassword;
      return newFormData;
    }

    return data;
  }
}

class TokenAuth {
  public getToken(): string | null {
    const token = window.localStorage.getItem("token") ?? null;
    return token;
  }

  public setToken(userToken: string): void {
    window.localStorage.setItem("token", userToken);
  }

  public getUrlToken(location: Location): string {
    const urlToken = location.pathname.split("/")[2];
    return urlToken;
  }

  public removeToken(): void {
    const token = this.getToken();
    if (token) {
      window.localStorage.removeItem("token");
    }
  }
}

class UserAuthState {
  public getUserAuthState(): AuthStatus {
    const userAuthState =
      window.localStorage.getItem("userAuthState") ?? "not-authenticated";

    const parsedAuthState: AuthStatus | null = userAuthState as AuthStatus;
    return parsedAuthState;
  }

  public setUserAuthState(userAuthState: AuthStatus): void {
    window.localStorage.setItem("userAuthState", userAuthState);
  }

  public removeUserAuthState(): void {
    window.localStorage.removeItem("userAuthState");
  }
}

const getInvitationLink = (location: Location): string | undefined => {
  const user = location.pathname.split("/")[1];
  const invitationLink =
    location.pathname.split("/").length === 2
      ? user
        ? `https://betbillions.com.co/${user}`
        : undefined
      : undefined;
  return invitationLink;
};

const getActiveItem = (location: Location, to: string): MenuItemStyleProps => {
  const path = location.pathname;
  if (path === to) {
    return {
      background: "var(--white)",
      color: "var(--bg-secondary-color)",
    };
  }
  return {
    background: "transparent",
    color: "var(--white)",
  };
};

const copyToClipBoard = (textToCopy: string, config: ToastConfig): void => {
  const { showToast, hideToast, configToast } = config;
  navigator.clipboard.writeText(textToCopy);
  configToast(ToastTypes.success, "Texto copiado con exito!");
  showToast();
  hideToast(3000);
};

const formatDate = (
  date: string,
  format: "numeric" | "mixted" = "mixted"
): string => {
  const formattedDate = new Date(date).toLocaleString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const numericDate = new Date(date).toLocaleDateString();

  if (format === "mixted") return formattedDate;
  return numericDate;
};

const setColorBingoBalls = (board: BingoBoard): BingoBall[] => {
  const cardBalls = board.card.map((ball, index) => {
    if (index === 0) {
      return { ...ball, color: "var(--yellow)" };
    }
    if (index % 2 !== 0) {
      return { ...ball, color: "var(--dark-gray)" };
    }
    return { ...ball, color: "var(--orange)" };
  });
  return cardBalls;
};

const setFormValues = <T>(values: T, setValue: UseFormSetValue<any>) => {
  for (const key in values) {
    const element = values[key] as Extract<keyof T, string>;
    if (key === "invitationLink") {
      const sponsorName = (values[key] as string)?.split("/")[1];
      setValue("sponsorName", sponsorName as Extract<keyof T, string>);
    }
    setValue(key, element);
  }
};

const filterDiferenceList = <T>(
  list: T[],
  comparisonKeys: { a: string; b: unknown }
): T[] => {
  const { a, b } = comparisonKeys;
  const formattedList = list as any[];
  const filteredList = formattedList.filter((item) => item[a] !== b);
  return filteredList as T[];
};

const sortListPerDate = <T>(list: T, comparisonKey: string): T => {
  const formattedList = list as any[];
  const filteredList = formattedList.sort(
    (a, b) =>
      new Date(b[comparisonKey]).getTime() -
      new Date(a[comparisonKey]).getTime()
  );
  return filteredList as T;
};

export {
  ValuesForm,
  TokenAuth,
  UserAuthState,
  getInvitationLink,
  getActiveItem,
  copyToClipBoard,
  formatDate,
  setColorBingoBalls,
  setFormValues,
  filterDiferenceList,
  sortListPerDate,
};
