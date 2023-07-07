import { AxiosError } from "axios";

import getAxiosClient from "@config/axiosClient";
import { ServerResponse, UserTransaction } from "types";

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
        "/transaction/list",
        config
      );
      response = data;
      console.log(response);
    } catch (_e: unknown) {
      const errorMessage = (_e as AxiosError<ServerResponse>).response?.data
        .message;
      throw new Error(errorMessage);
    }
    return response;
  }
}

export { TransactionsService };
