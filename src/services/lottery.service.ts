import { AxiosError } from "axios";

import getAxiosClient from "@config/axiosClient";
import {
  BingoBoard,
  LotteryDetail,
  LotteryListItem,
  ServerResponse,
} from "types";

class LotteryService {
  public async getAllBingoReffels(token: string): Promise<LotteryListItem[]> {
    let response: LotteryListItem[] | null = null;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const axiosClient = getAxiosClient("betBillionsAPI");
      const { data } = await axiosClient.get<LotteryListItem[]>(
        "/lottery/list",
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

  public async getBingoReffel(
    lotteryId: number,
    token: string
  ): Promise<LotteryDetail> {
    let response: LotteryDetail | null = null;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const axiosClient = getAxiosClient("betBillionsAPI");
      const { data } = await axiosClient.get<LotteryDetail>(
        `/lottery/awards/${lotteryId}`,
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

  public async getRandomBingoBoards(token: string): Promise<BingoBoard[]> {
    let response: BingoBoard[] | null = null;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const axiosClient = getAxiosClient("betBillionsAPI");
      const { data } = await axiosClient.get<BingoBoard[]>(
        "/cardBingo/list",
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

  // public async buyBingoBoards(purchaseData:BingoBoard[], lotteryId:number, token:string):Promise<ServerResponse> {
  //   let response: ServerResponse | null = null;
  //   const config = {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //   };
  //   try {
  //     const axiosClient = getAxiosClient("betBillionsAPI");
  //     const { data } = await axiosClient.post<ServerResponse>(
  //       `/cardBingo/save/${lotteryId}`,

  //       config
  //     );
  //     response = data;
  //   } catch (_e: unknown) {
  //     const errorMessage = (_e as AxiosError<ServerResponse>).response?.data
  //       .message;
  //     throw new Error(errorMessage);
  //   }
  //   return response;
  // }
}

export { LotteryService };
