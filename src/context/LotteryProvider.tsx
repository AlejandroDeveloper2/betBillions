import { useState, createContext, useMemo, useCallback } from "react";

import {
  MessageConfig,
  ProviderProps,
  ToastTypes,
  LotteryContextType,
  LotteryListItem,
  LotteryDetail,
} from "../types";
import { TokenAuth } from "@utils/index";

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

  const value = useMemo(
    () => ({
      reffels,
      lotteryDetail,
      getAllBingoReffels,
      getBingoReffel,
    }),
    [reffels, lotteryDetail, getAllBingoReffels, getBingoReffel]
  );

  return (
    <LotteryContext.Provider value={value}>{children}</LotteryContext.Provider>
  );
};

export { LotteryProvider };
export default LotteryContext;
