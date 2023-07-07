import { AxiosError } from "axios";

import getAxiosClient from "@config/axiosClient";
import {
  LoginFormValues,
  LoginServerResponse,
  RecoverPassFormValues,
  RegisterFormValues,
  ServerResponse,
  UpdatePassFormValues,
} from "types";

class UserAuthentication {
  public async authenticateUser(
    userCredentials: LoginFormValues
  ): Promise<LoginServerResponse> {
    let response: LoginServerResponse | null = null;
    try {
      const axiosClient = getAxiosClient("betBillionsAPI");
      const { data } = await axiosClient.post<LoginServerResponse>(
        "/auth/login",
        userCredentials
      );
      response = data;
    } catch (_e: unknown) {
      const errorMessage = (_e as AxiosError<LoginServerResponse>).response
        ?.data.message;
      throw new Error(errorMessage);
    }
    return response;
  }

  public async registerUser(
    userData: RegisterFormValues
  ): Promise<ServerResponse> {
    let response: ServerResponse | null = null;
    try {
      const axiosClient = getAxiosClient("betBillionsAPI");
      const { data } = await axiosClient.post<ServerResponse>(
        "/auth/create",
        userData
      );
      response = data;
    } catch (_e: unknown) {
      const errorMessage = (_e as AxiosError<ServerResponse>).response?.data
        .message;
      throw new Error(errorMessage);
    }
    return response;
  }

  public async sendRecoverPassRequest(
    userRequestData: RecoverPassFormValues
  ): Promise<ServerResponse> {
    let response: ServerResponse | null = null;
    try {
      const axiosClient = getAxiosClient("betBillionsAPI");
      const { data } = await axiosClient.post<ServerResponse>(
        "/auth/recover",
        userRequestData
      );
      response = data;
    } catch (_e: unknown) {
      const errorMessage = (_e as AxiosError<ServerResponse>).response?.data
        .message;
      throw new Error(errorMessage);
    }
    return response;
  }

  public async updatePassword(
    userNewPassword: UpdatePassFormValues,
    token: string
  ): Promise<ServerResponse> {
    let response: ServerResponse | null = null;
    try {
      const axiosClient = getAxiosClient("betBillionsAPI");
      const { data } = await axiosClient.patch<ServerResponse>(
        `/auth/passwordChange/${token}`,
        userNewPassword
      );
      response = data;
    } catch (_e: unknown) {
      const errorMessage = (_e as AxiosError<ServerResponse>).response?.data
        .message;
      throw new Error(errorMessage);
    }
    return response;
  }

  public async activateUserAccount(token: string): Promise<ServerResponse> {
    let response: ServerResponse | null = null;
    try {
      const axiosClient = getAxiosClient("betBillionsAPI");
      const { data } = await axiosClient.get<ServerResponse>(
        `/auth/activateAccount/${token}`
      );
      response = data;
    } catch (_e: unknown) {
      const errorMessage = (_e as AxiosError<ServerResponse>).response?.data
        .message;
      throw new Error(errorMessage);
    }
    return response;
  }

  public async validateUserAuth(token: string): Promise<boolean> {
    let response = false;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const axiosClient = getAxiosClient("betBillionsAPI");
      const { data } = await axiosClient.get<boolean>("/auth/validate", config);
      response = data;
    } catch (_e: unknown) {
      const errorMessage = (_e as AxiosError<ServerResponse>).response?.data
        .message;
      throw new Error(errorMessage);
    }
    return response;
  }
}

export { UserAuthentication };
