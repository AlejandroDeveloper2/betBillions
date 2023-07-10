import { useState, createContext, useMemo, useCallback } from "react";

import {
  MessageConfig,
  ProviderProps,
  ToastTypes,
  LotteryContextType,
  LotteryListItem,
  LotteryDetail,
  BingoBoard,
  LoadingConfig,
} from "types";
import { TokenAuth } from "@utils/index";
import { useShoppingCartContext } from "@hooks/index";

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

  const getAllBingoReffels = useCallback(
    async (config: MessageConfig): Promise<void> => {
      const { loadingConfig, toastConfig } = config;
      const token = tokenAuth.getToken();
      if (token) {
        try {
          loadingConfig.setMessage("Cargando sorteos...");
          loadingConfig.activeLoading();
          const res = await lotteryService.getAllBingoReffels(token);
          setReffels(res);
          toastConfig.configToast(
            ToastTypes.success,
            "Sorteos cargados correctamente!"
          );
          toastConfig.showToast();
        } catch (error: unknown) {
          const errorMessage = (error as Error).message;
          toastConfig.showToast();
          toastConfig.configToast(ToastTypes.error, errorMessage);
        } finally {
          toastConfig.hideToast(3000);
          loadingConfig.inactiveLoading();
        }
      }
    },
    []
  );

  const getBingoReffel = useCallback(
    async (lotteryId: number, config: MessageConfig) => {
      const { loadingConfig, toastConfig } = config;
      const token = tokenAuth.getToken();
      if (token) {
        try {
          loadingConfig.setMessage("Cargando información del sorteo...");
          loadingConfig.activeLoading();
          const res = await lotteryService.getBingoReffel(lotteryId, token);
          setLotteryDetail(res);
          toastConfig.configToast(
            ToastTypes.success,
            "Información cargada correctamente!"
          );
          toastConfig.showToast();
        } catch (error: unknown) {
          const errorMessage = (error as Error).message;
          toastConfig.showToast();
          toastConfig.configToast(ToastTypes.error, errorMessage);
        } finally {
          toastConfig.hideToast(3000);
          loadingConfig.inactiveLoading();
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
      config: MessageConfig
    ): Promise<void> => {
      const { loadingConfig, toastConfig } = config;
      const token = tokenAuth.getToken();
      if (token) {
        try {
          loadingConfig.setMessage("Realizando compra...");
          loadingConfig.activeLoading();
          if (purchaseData.length === 0) {
            toastConfig.configToast(
              ToastTypes.warning,
              "No has seleccionado ningún cartón!"
            );
            toastConfig.showToast();
            return;
          }
          const res = await lotteryService.buyBingoBoards(
            purchaseData,
            idLottery,
            token
          );
          toastConfig.configToast(res.typeStatus, res.message);
          toastConfig.showToast();
        } catch (error: unknown) {
          const errorMessage = (error as Error).message;
          toastConfig.showToast();
          toastConfig.configToast(ToastTypes.error, errorMessage);
        } finally {
          toastConfig.hideToast(3000);
          loadingConfig.inactiveLoading();
          clearShoppingCart();
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
          console.log(errorMessage);
        } finally {
          inactiveLoading();
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
