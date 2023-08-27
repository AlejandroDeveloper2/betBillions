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
}

export { WithdrawService };
