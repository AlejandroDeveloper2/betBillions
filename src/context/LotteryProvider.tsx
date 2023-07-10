import { useState, createContext, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import {
  ProviderProps,
  ToastTypes,
  LotteryContextType,
  LotteryListItem,
  LotteryDetail,
  BingoBoard,
  LoadingConfig,
} from "types";
import { TokenAuth } from "@utils/index";
import { useShoppingCartContext, useToastContext } from "@hooks/index";

/*services*/
import { LotteryService } from "@services/lottery.service";

const LotteryContext = createContext<LotteryContextType>(
  {} as LotteryContextType
);

const lotteryService = new LotteryService();
const tokenAuth = new TokenAuth();

const LotteryProvider = ({ children }: ProviderProps) => {
  const [reffels, setReffels] = useState<LotteryListItem[]>([]);
  const [lotteryDetail, setLotteryDetail] = useState<LotteryDetail | null>(
    null
  );
  const [randomBingoBoards, setRandomBingoBoards] = useState<BingoBoard[]>([]);
  const [userBingoBoards, setUserBingoBoards] = useState<BingoBoard[]>([]);
  const { clearShoppingCart } = useShoppingCartContext();
  const { showToast, hideToast, configToast } = useToastContext();
  const navigate = useNavigate();

  const getAllBingoReffels = useCallback(
    async (config: LoadingConfig): Promise<void> => {
      const token = tokenAuth.getToken();
      if (token) {
        try {
          config.setMessage("Cargando sorteos...");
          config.activeLoading();
          const res = await lotteryService.getAllBingoReffels(token);
          setReffels(res);
          configToast(ToastTypes.success, "Sorteos cargados correctamente!");
          showToast();
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

  const getBingoReffel = useCallback(
    async (lotteryId: number, config: LoadingConfig) => {
      const token = tokenAuth.getToken();
      if (token) {
        try {
          config.setMessage("Cargando información del sorteo...");
          config.activeLoading();
          const res = await lotteryService.getBingoReffel(lotteryId, token);
          setLotteryDetail(res);
          configToast(ToastTypes.success, "Información cargada correctamente!");
          showToast();
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

  const getRandomBingoBoards = useCallback(async (): Promise<void> => {
    const token = tokenAuth.getToken();
    if (token) {
      try {
        const res = await lotteryService.getRandomBingoBoards(token);
        setRandomBingoBoards(res);
      } catch (error: unknown) {
        const errorMessage = (error as Error).message;
        console.log(errorMessage);
      }
    }
  }, []);

  const buyBingoBoards = useCallback(
    async (
      purchaseData: BingoBoard[],
      idLottery: number,
      config: LoadingConfig
    ): Promise<void> => {
      const token = tokenAuth.getToken();
      if (token) {
        try {
          config.setMessage("Realizando compra...");
          config.activeLoading();
          if (purchaseData.length === 0) {
            configToast(
              ToastTypes.warning,
              "No has seleccionado ningún cartón!"
            );
            showToast();
            return;
          }
          if (purchaseData.length === 5) {
            configToast(
              ToastTypes.warning,
              "Selecciona 2 cartones mas para aplicar a la promoción!"
            );
            showToast();
            return;
          }
          const res = await lotteryService.buyBingoBoards(
            purchaseData,
            idLottery,
            token
          );
          configToast(res.typeStatus, res.message);
          showToast();
          clearShoppingCart();
          navigate(`/userPanel/lottery/details/${idLottery}`);
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

  const getPurchasedUserBingoBoards = useCallback(
    async (idLottery: number, config: LoadingConfig): Promise<void> => {
      const { activeLoading, inactiveLoading, setMessage } = config;
      const token = tokenAuth.getToken();
      if (token) {
        try {
          setMessage("Cargando...");
          activeLoading();
          const res = await lotteryService.getPurchasedUserBingoBoards(
            token,
            idLottery
          );
          setUserBingoBoards(res);
        } catch (error: unknown) {
          const errorMessage = (error as Error).message;
          configToast(ToastTypes.error, errorMessage);
          showToast();
        } finally {
          inactiveLoading();
          hideToast(3000);
        }
      }
    },
    []
  );

  const value = useMemo(
    () => ({
      reffels,
      lotteryDetail,
      randomBingoBoards,
      userBingoBoards,
      getAllBingoReffels,
      getBingoReffel,
      getRandomBingoBoards,
      buyBingoBoards,
      getPurchasedUserBingoBoards,
    }),
    [
      reffels,
      lotteryDetail,
      randomBingoBoards,
      userBingoBoards,
      getAllBingoReffels,
      getBingoReffel,
      getRandomBingoBoards,
      buyBingoBoards,
      getPurchasedUserBingoBoards,
    ]
  );

  return (
    <LotteryContext.Provider value={value}>{children}</LotteryContext.Provider>
  );
};

export { LotteryProvider };
export default LotteryContext;
