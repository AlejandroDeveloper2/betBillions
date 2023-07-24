import { createContext, useMemo, useState, useCallback } from "react";

import {
  BingoContextType,
  BingoRound,
  BingoBoard,
  ProviderProps,
  ToastTypes,
  LoadingConfig,
  BingoBall,
} from "types";
import { TokenAuth } from "@utils/index";
import { useToastContext } from "@hooks/index";

/*services*/
import { BingoService } from "@services/bingo.service";

const BingoContext = createContext<BingoContextType>({} as BingoContextType);

const tokenAuth = new TokenAuth();
const bingoService = new BingoService();

const BingoProvider = ({ children }: ProviderProps) => {
  const [bingoRound, setBingoRound] = useState<BingoRound | null>(null);
  const [playerBoard, setPlayerBoard] = useState<BingoBoard | null>(null);

  const { openToast } = useToastContext();

  const startGame = async (idLottery: number): Promise<void> => {
    const token = tokenAuth.getToken();
    if (token) {
      try {
        const res = await bingoService.startGame(idLottery, token);
        setBingoRound(res);
      } catch (error: unknown) {
        const errorMessage = (error as Error).message;
        openToast({
          message: errorMessage,
          type: ToastTypes.error,
        });
      }
    }
  };

  const getPlayerBoard = async (
    idLottery: number,
    roundId: number
  ): Promise<void> => {
    const token = tokenAuth.getToken();
    if (token) {
      try {
        const res = await bingoService.getPlayerBoard(
          idLottery,
          roundId,
          token
        );
        setPlayerBoard(res);
      } catch (error: unknown) {
        const errorMessage = (error as Error).message;
        openToast({
          message: errorMessage,
          type: ToastTypes.error,
        });
      }
    }
  };

  const activeBingoLottery = useCallback(
    async (idLottery: number, roundId: number, config: LoadingConfig) => {
      const token = tokenAuth.getToken();
      if (token) {
        try {
          config.setMessage("Activando....");
          config.activeLoading();
          await bingoService.activeBingoLottery(idLottery, roundId, token);
          openToast({
            message: "Sorteo activado...",
            type: ToastTypes.success,
          });
        } catch (error: unknown) {
          const errorMessage = (error as Error).message;
          openToast({
            message: errorMessage,
            type: ToastTypes.error,
          });
        } finally {
          config.inactiveLoading();
        }
      }
    },
    []
  );

  const validateBingoBalls = useCallback(
    async (
      idLottery: number,
      roundId: number,
      ball: string,
      shownBalls: string[]
    ): Promise<void> => {
      const token = tokenAuth.getToken();
      let updatedBall: BingoBall = {
        numbers: ball,
        state: false,
        color: "var(--white)",
      };
      if (token) {
        try {
          const res = await bingoService.validateBingoBalls(
            idLottery,
            roundId,
            ball,
            token
          );
          updatedBall = { ...res, color: "var(--green)" };
          updatePlayerBoard(ball, shownBalls, updatedBall);
        } catch (error: unknown) {
          const errorMessage = (error as Error).message;
          openToast({
            message: errorMessage,
            type: ToastTypes.error,
          });
        }
      }
    },
    [playerBoard]
  );

  const updatePlayerBoard = (
    ball: string,
    shownBalls: string[],
    updatedBall: BingoBall
  ): void => {
    if (playerBoard) {
      const newCard = { ...playerBoard }.card.map((bingoBall) => {
        if (
          ball === bingoBall.numbers &&
          shownBalls.includes(bingoBall.numbers)
        ) {
          if (!bingoBall.state) {
            openToast({
              message: "Balota correcta",
              type: ToastTypes.success,
            });
            return updatedBall;
          }
          return bingoBall;
        }
        return bingoBall;
      });
      setPlayerBoard({ ...playerBoard, card: newCard });
    }
  };

  const setBingoWinner = useCallback(
    async (
      idLottery: number,
      roundId: number,
      config: LoadingConfig
    ): Promise<void> => {
      const token = tokenAuth.getToken();
      if (token) {
        try {
          config.setMessage("Validando carton....");
          config.activeLoading();
          const res = await bingoService.setBingoWinner(
            idLottery,
            roundId,
            token
          );
          openToast({
            message: res.message,
            type: res.typeStatus,
          });
        } catch (error: unknown) {
          const errorMessage = (error as Error).message;
          openToast({
            message: errorMessage,
            type: ToastTypes.error,
          });
        } finally {
          config.inactiveLoading();
        }
      }
    },
    []
  );

  const value = useMemo(
    () => ({
      bingoRound,
      playerBoard,
      startGame,
      getPlayerBoard,
      activeBingoLottery,
      validateBingoBalls,
      setBingoWinner,
    }),
    [
      bingoRound,
      playerBoard,
      startGame,
      getPlayerBoard,
      activeBingoLottery,
      validateBingoBalls,
      setBingoWinner,
    ]
  );

  return (
    <BingoContext.Provider value={value}>{children}</BingoContext.Provider>
  );
};

export { BingoProvider };
export default BingoContext;
