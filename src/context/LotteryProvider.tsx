import { createContext, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import {
  ProviderProps,
  ToastTypes,
  LotteryContextType,
  BingoBoard,
  LoadingConfig,
  LotteryFormValues,
} from "types";
import { TokenAuth } from "@utils/index";
import { useShoppingCartContext, useToastContext } from "@hooks/index";

/*services*/
import { LotteryService } from "@services/lottery.service";
import { UseFormReset } from "react-hook-form";

const LotteryContext = createContext<LotteryContextType>(
  {} as LotteryContextType
);

const lotteryService = new LotteryService();
const tokenAuth = new TokenAuth();

const LotteryProvider = ({ children }: ProviderProps) => {
  const { clearShoppingCart } = useShoppingCartContext();
  const { openToast } = useToastContext();
  const navigate = useNavigate();

  const buyBingoBoards = useCallback(
    async (
      purchaseData: BingoBoard[],
      lotteryKey: string,
      config: LoadingConfig
    ): Promise<void> => {
      const token = tokenAuth.getToken();
      if (token) {
        try {
          config.setMessage("Realizando compra...");
          config.activeLoading();
          if (purchaseData.length === 0) {
            openToast({
              message: "No has seleccionado ningún cartón!",
              type: ToastTypes.warning,
            });
            return;
          }
          if (purchaseData.length === 5 || purchaseData.length === 6) {
            openToast({
              message: `Selecciona ${
                7 - purchaseData.length
              } cartones mas para aplicar a la promoción!`,
              type: ToastTypes.warning,
            });
            return;
          }
          const res = await lotteryService.buyBingoBoards(
            purchaseData,
            lotteryKey,
            token
          );
          openToast({
            message: res.message,
            type: res.typeStatus,
          });
          clearShoppingCart();
          navigate(`/userPanel/lottery/details/${lotteryKey}`);
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

  const createLottery = useCallback(
    async (
      lotteryData: LotteryFormValues,
      config: LoadingConfig,
      reset: UseFormReset<LotteryFormValues>
    ): Promise<void> => {
      const { activeLoading, inactiveLoading, setMessage } = config;
      const token = tokenAuth.getToken();
      if (token) {
        try {
          setMessage("Creando sorteo...");
          activeLoading();
          const res = await lotteryService.createLottery(lotteryData, token);
          openToast({
            message: res.message,
            type: res.typeStatus,
          });
          reset();
        } catch (error: unknown) {
          const errorMessage = (error as Error).message;
          openToast({
            message: errorMessage,
            type: ToastTypes.error,
          });
        } finally {
          inactiveLoading();
        }
      }
    },
    []
  );

  const inactiveLottery = useCallback(
    async (lotteryKey: string, config: LoadingConfig): Promise<void> => {
      const { activeLoading, inactiveLoading, setMessage } = config;
      const token = tokenAuth.getToken();
      if (token) {
        try {
          setMessage("Inactivando sorteo...");
          activeLoading();
          const res = await lotteryService.inactiveLottery(lotteryKey, token);
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
          inactiveLoading();
        }
      }
    },
    []
  );

  const value = useMemo(
    () => ({
      buyBingoBoards,
      createLottery,
      inactiveLottery,
    }),
    [buyBingoBoards, createLottery, inactiveLottery]
  );

  return (
    <LotteryContext.Provider value={value}>{children}</LotteryContext.Provider>
  );
};

export { LotteryProvider };
export default LotteryContext;
