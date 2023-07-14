import { AxiosError } from "axios";

import getAxiosClient from "@config/axiosClient";

import { ServerResponse, UserAdminData } from "types";

class UsersService {
  public async getAllUsers(token: string): Promise<UserAdminData[]> {
    let response: UserAdminData[] | null = null;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const axiosClient = getAxiosClient("betBillionsAPI");
      const { data } = await axiosClient.get<UserAdminData[]>(
        "/users/list",
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
export { UsersService };
