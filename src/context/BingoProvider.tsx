import { createContext, useMemo, useState, useCallback } from "react";

import {
  BingoContextType,
  BingoRound,
  BingoBoard,
  ProviderProps,
  ToastTypes,
  LoadingConfig,
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
          isToastVisible: true,
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
          isToastVisible: true,
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
            isToastVisible: true,
          });
        } catch (error: unknown) {
          const errorMessage = (error as Error).message;
          openToast({
            message: errorMessage,
            type: ToastTypes.error,
            isToastVisible: true,
          });
        } finally {
          config.inactiveLoading();
        }
      }
    },
    []
  );

  const validateBingoBalls = useCallback(
    async (idLottery: number, roundId: number, ball: string) => {
      const token = tokenAuth.getToken();
      if (token) {
        try {
          await bingoService.validateBingoBalls(
            idLottery,
            roundId,
            ball,
            token
          );
          openToast({
            message: "Balota correcta",
            type: ToastTypes.success,
            isToastVisible: true,
          });
        } catch (error: unknown) {
          const errorMessage = (error as Error).message;
          openToast({
            message: errorMessage,
            type: ToastTypes.error,
            isToastVisible: true,
          });
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
    }),
    [
      bingoRound,
      playerBoard,
      startGame,
      getPlayerBoard,
      activeBingoLottery,
      validateBingoBalls,
    ]
  );

  return (
    <BingoContext.Provider value={value}>{children}</BingoContext.Provider>
  );
};

export { BingoProvider };
export default BingoContext;
