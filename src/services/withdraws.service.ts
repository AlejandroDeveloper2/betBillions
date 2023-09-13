import { AxiosError } from "axios";

import getAxiosClient from "@config/axiosClient";

import { ServerResponse, Retreat, WithdrawFormValues } from "types";

class WithdrawService {
  public async getAllRetreats(token: string): Promise<Retreat[]> {
    let response: Retreat[] | null = null;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const axiosClient = getAxiosClient("betBillionsAPI");
      const { data } = await axiosClient.get<Retreat[]>(
        "/retreats/list",
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

  public async sendWithdrawRequest(
    withdrawData: WithdrawFormValues,
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
        "/retreats/request/money",
        withdrawData,
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
    retreatData: Retreat,
    token: string
  ): Promise<ServerResponse> {
    let response: ServerResponse | null = null;
    const { wallet, id, price } = retreatData;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const axiosClient = getAxiosClient("betBillionsAPI");
      const { data } = await axiosClient.patch<ServerResponse>(
        `/retreats/validate/${wallet}`,
        { id, price },
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
    retreatData: Retreat,
    token: string
  ): Promise<ServerResponse> {
    let response: ServerResponse | null = null;
    const { id } = retreatData;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const axiosClient = getAxiosClient("betBillionsAPI");
      const { data } = await axiosClient.patch<ServerResponse>(
        `/retreats/invalid/${id}`,
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

export { WithdrawService };
