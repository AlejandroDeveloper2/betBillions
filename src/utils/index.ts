/* eslint-disable @typescript-eslint/no-explicit-any */
import { Location } from "react-router-dom";

import { AuthStatus, FormType, MenuItemStyleProps } from "../types";

class ValuesForm {
  public setFormValues(formType: FormType, data: any) {
    const newFormData = { ...data };
    if (formType === "register") {
      delete newFormData?.confirmPassword;
      delete newFormData?.confirmEmail;
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

class UserSession {
  public getSessionTime(): number {
    const seesionTime = window.parseInt(
      window.localStorage.getItem("sessionTime") ?? "0"
    );
    return seesionTime;
  }

  public setSessionTime(minutes: number): void {
    window.localStorage.setItem("sessionTime", JSON.stringify(minutes));
  }

  public removeSessionTime(): void {
    const sessionTime = this.getSessionTime();
    if (sessionTime) {
      window.localStorage.removeItem("sessionTime");
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
  const user = location.pathname.split("/")[2];
  const invitationLink = user
    ? `https://betbillions.com.co/${user}`
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

export {
  ValuesForm,
  TokenAuth,
  UserSession,
  UserAuthState,
  getInvitationLink,
  getActiveItem,
};
