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

  const { showToast, hideToast, configToast } = useToastContext();

  const startGame = async (idLottery: number): Promise<void> => {
    const token = tokenAuth.getToken();
    if (token) {
      try {
        const res = await bingoService.startGame(idLottery, token);
        setBingoRound(res);
        // showToast();
        // configToast(ToastTypes.success, "Ronda iniciada!");
      } catch (error: unknown) {
        const errorMessage = (error as Error).message;
        showToast();
        configToast(ToastTypes.error, errorMessage);
      } finally {
        hideToast(3000);
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
        showToast();
        configToast(ToastTypes.error, errorMessage);
      } finally {
        hideToast(3000);
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
          showToast();
          configToast(ToastTypes.success, "Sorteo activado...");
        } catch (error: unknown) {
          const errorMessage = (error as Error).message;
          showToast();
          configToast(ToastTypes.error, errorMessage);
        } finally {
          hideToast(3000);
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
    }),
    [bingoRound, playerBoard, startGame, getPlayerBoard, activeBingoLottery]
  );

  return (
    <BingoContext.Provider value={value}>{children}</BingoContext.Provider>
  );
};

export { BingoProvider };
export default BingoContext;
