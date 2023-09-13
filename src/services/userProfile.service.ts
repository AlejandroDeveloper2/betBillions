import { AxiosError } from "axios";

import getAxiosClient from "@config/axiosClient";
import {
  ServerResponse,
  Team,
  UserPanelData,
  UserProfileData,
  UserProfileFormValues,
} from "types";

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

  public async getUserTeam(token: string): Promise<Team[]> {
    let response: Team[] | null = null;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const axiosClient = getAxiosClient("betBillionsAPI");
      const { data } = await axiosClient.get<Team[]>(
        "/users/referrals/team",
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

  public async getUserProfile(token: string): Promise<UserProfileData> {
    let response: UserProfileData | null = null;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const axiosClient = getAxiosClient("betBillionsAPI");
      const { data } = await axiosClient.get<UserProfileData>(
        "/users/getUser",
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

  public async updateUserProfile(
    userData: UserProfileFormValues,
    token: string
  ): Promise<ServerResponse> {
    const { username, fullName, email, phone, country, city, photo } = userData;
    console.log(userData);
    let response: ServerResponse | null = null;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const axiosClient = getAxiosClient("betBillionsAPI");
      const { data } = await axiosClient.put<ServerResponse>(
        "/users/edit",
        { username, fullName, email, phone, country, city, photo },
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

  public async uploadUserProfilePhoto(formData: FormData): Promise<string> {
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

export { UserProfileService };
