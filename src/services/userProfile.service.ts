import { AxiosError } from "axios";

import getAxiosClient from "../config/axiosClient";
import { ServerResponse, UserPanelData } from "../types";

class UserProfileService {
  public async getUserPanelData(token: string): Promise<UserPanelData> {
    let response: UserPanelData | null = null;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const axiosClient = getAxiosClient("betBillionsAPI");
      const { data } = await axiosClient.get<UserPanelData>(
        "/users/panel",
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

export { UserProfileService };
