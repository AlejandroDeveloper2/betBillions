import { useState, createContext, useMemo, useCallback } from "react";
import { UseFormReset } from "react-hook-form";

import {
  LoadingConfig,
  ProviderProps,
  ToastTypes,
  SupportContextType,
  SupportFormValues,
  SupportAnswerFormValues,
} from "types";
import { TokenAuth } from "@utils/index";
import { useToastContext } from "@hooks/index";

/*services*/
import { SupportService } from "@services/support.service";

const SupportContext = createContext<SupportContextType>(
  {} as SupportContextType
);

const tokenAuth = new TokenAuth();
const supportService = new SupportService();

const SupportProvider = ({ children }: ProviderProps) => {
  const [supportImage, setSupportImage] = useState<string>("");
  const { showToast, hideToast, configToast } = useToastContext();

  const sendUserSupportRequest = useCallback(
    async (
      requestData: SupportFormValues,
      config: LoadingConfig,
      reset: UseFormReset<SupportFormValues>
    ): Promise<void> => {
      const token = tokenAuth.getToken();
      if (token) {
        try {
          config.setMessage("Enviando mensaje...");
          config.activeLoading();
          const res = await supportService.sendUserSupportRequest(
            requestData,
            token
          );
          configToast(res.typeStatus, res.message);
          showToast();
          reset();
          setSupportImage("");
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

  const uploadSupportImage = useCallback(
    async (
      e: React.ChangeEvent<HTMLInputElement>,
      config: LoadingConfig
    ): Promise<void> => {
      const files = e.target.files;
      const formData = new FormData();
      if (files) {
        formData.append("file", files[0]);
        formData.append("upload_preset", "uploadSupportImages");
      }
      try {
        config.setMessage("");
        config.activeLoading();
        const res = await supportService.uploadSupportImage(formData);
        setSupportImage(res);
        configToast(ToastTypes.success, "Imagen subida correctamente!");
        showToast();
      } catch (error: unknown) {
        const errorMessage = (error as Error).message;
        showToast();
        configToast(ToastTypes.error, errorMessage);
      } finally {
        hideToast(3000);
        config.inactiveLoading();
      }
    },
    []
  );

  const answerSupportUserRequest = useCallback(
    async (
      answerData: SupportAnswerFormValues,
      config: LoadingConfig,
      reset: UseFormReset<SupportAnswerFormValues>
    ): Promise<void> => {
      const token = tokenAuth.getToken();
      if (token) {
        try {
          config.setMessage("Enviando respuesta...");
          config.activeLoading();
          const res = await supportService.answerSupportUserRequest(
            answerData,
            token
          );
          configToast(res.typeStatus, res.message);
          showToast();
          reset();
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
      supportImage,
      sendUserSupportRequest,
      uploadSupportImage,
      answerSupportUserRequest,
    }),
    [
      supportImage,
      sendUserSupportRequest,
      uploadSupportImage,
      answerSupportUserRequest,
    ]
  );

  return (
    <SupportContext.Provider value={value}>{children}</SupportContext.Provider>
  );
};

export { SupportProvider };
export default SupportContext;
