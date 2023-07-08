import { AxiosError } from "axios";

import getAxiosClient from "@config/axiosClient";
import {
  AdminTransaction,
  ServerResponse,
  UserTransaction,
  ValidTransactionFormValues,
} from "types";

class TransactionsService {
  public async getUserTransactions(token: string): Promise<UserTransaction[]> {
    let response: UserTransaction[] | null = null;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const axiosClient = getAxiosClient("betBillionsAPI");
      const { data } = await axiosClient.get<UserTransaction[]>(
        "/paymentHistory/list",
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

  public async getAdminTransactions(
    token: string
  ): Promise<AdminTransaction[]> {
    let response: AdminTransaction[] | null = null;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const axiosClient = getAxiosClient("betBillionsAPI");
      const { data } = await axiosClient.get<AdminTransaction[]>(
        "/transaction/list",
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

  public async validateTransaction(
    transactionData: ValidTransactionFormValues,
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
        `/transaction/validate/${transactionData.transaction}`,
        { id: transactionData.id, price: transactionData.price },
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

  public async invalidateTransaction(
    transactionHash: string,
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
        `/transaction/invalid/${transactionHash}`,
        {},
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
}

export { TransactionsService };
