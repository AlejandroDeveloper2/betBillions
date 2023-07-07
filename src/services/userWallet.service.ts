import { AxiosError } from "axios";

import getAxiosClient from "@config/axiosClient";
import {
  ServerResponse,
  WalletData,
  WalletDepositFormValues,
  WalletWithdrawFormValues,
} from "types";

class UserWalletService {
  public async getUserWalletData(token: string): Promise<WalletData> {
    let response: WalletData | null = null;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const axiosClient = getAxiosClient("betBillionsAPI");
      const { data } = await axiosClient.get<WalletData>(
        "/userWallet/wallet",
        config
      );
      response = data;
    } catch (_e: unknown) {
      const errorMessage = (_e as AxiosError<ServerResponse>).response?.data
        .message;
      throw new Error(errorMessage);
    }
    return response;
  }

  public async setUserWalletAddress(
    walletData: WalletWithdrawFormValues,
    token: string
  ): Promise<ServerResponse> {
    let response: ServerResponse | null = null;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const axiosClient = getAxiosClient("betBillionsAPI");
      const { data } = await axiosClient.patch<ServerResponse>(
        "/userWallet/registerWallet",
        walletData,
        config
      );
      response = data;
    } catch (_e: unknown) {
      const errorMessage = (_e as AxiosError<ServerResponse>).response?.data
        .message;
      throw new Error(errorMessage);
    }
    return response;
  }

  public async sendWalletDepositTransaction(
    walletDepositData: WalletDepositFormValues,
    token: string
  ): Promise<ServerResponse> {
    let response: ServerResponse | null = null;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const axiosClient = getAxiosClient("betBillionsAPI");
      const { data } = await axiosClient.post<ServerResponse>(
        "/transaction/save",
        walletDepositData,
        config
      );
      response = data;
    } catch (_e: unknown) {
      const errorMessage = (_e as AxiosError<ServerResponse>).response?.data
        .message;
      throw new Error(errorMessage);
    }
    return response;
  }

  public async uploadTransactionVoucher(formData: FormData): Promise<string> {
    const axiosClient = getAxiosClient("cloudinaryAPI");
    let response = "";
    try {
      const { data } = await axiosClient.post("/image/upload", formData);
      response = data.secure_url;
    } catch (_e: unknown) {
      const errorMessage = (_e as AxiosError<ServerResponse>).response?.data
        .message;
      throw new Error(errorMessage);
    }
    return response;
  }
}

export { UserWalletService };
