import { AxiosError } from "axios";

import getAxiosClient from "@config/axiosClient";
import { BingoBall, BingoBoard, BingoRound, ServerResponse } from "types";

class BingoService {
  public async startGame(
    lotteryKey: string,
    token: string
  ): Promise<BingoRound> {
    let response: BingoRound | null = null;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const axiosClient = getAxiosClient("betBillionsAPI");
      const { data } = await axiosClient.get<BingoRound>(
        `/lottery/start/${lotteryKey}`,
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

  public async getPlayerBoard(
    lotteryKey: string,
    roundId: number,
    token: string
  ): Promise<BingoBoard> {
    let response: BingoBoard | null = null;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const axiosClient = getAxiosClient("betBillionsAPI");
      const { data } = await axiosClient.get<BingoBoard>(
        `/cardBingo/lottery/${lotteryKey}/round/${roundId}`,
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

  public async activeBingoLottery(
    lotteryKey: string,
    roundId: number,
    token: string
  ): Promise<void> {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const axiosClient = getAxiosClient("betBillionsAPI");
      await axiosClient.get<void>(
        `/lottery/start/${lotteryKey}/round/${roundId}`,
        config
      );
    } catch (_e: unknown) {
      const errorMessage = (_e as AxiosError<ServerResponse>).response?.data
        .message;
      throw new Error(errorMessage);
    }
  }

  public async validateBingoBalls(
    lotteryKey: string,
    roundId: number,
    ball: string,
    token: string
  ): Promise<BingoBall> {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    let response: BingoBall | null = null;
    try {
      const axiosClient = getAxiosClient("betBillionsAPI");
      const { data } = await axiosClient.patch<BingoBall>(
        `/cardBingo/lottery/${lotteryKey}/round/${roundId}/ball/${ball}`,
        {},
        config
      );
      response = data;
      return response;
    } catch (_e: unknown) {
      const errorMessage = (_e as AxiosError<ServerResponse>).response?.data
        .message;
      throw new Error(errorMessage);
    }
  }

  public async setBingoWinner(
    lotteryKey: string,
    roundId: number,
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
        `/cardBingo/winner/lottery/${lotteryKey}/round/${roundId}`,
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

export { BingoService };
