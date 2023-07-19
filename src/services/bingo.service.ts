import { AxiosError } from "axios";

import getAxiosClient from "@config/axiosClient";
import { BingoBoard, BingoRound, ServerResponse } from "types";

class BingoService {
  public async startGame(
    idLottery: number,
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
        `/lottery/start/${idLottery}`,
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
    idLottery: number,
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
        `/cardBingo/lottery/${idLottery}/round/${roundId}`,
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
