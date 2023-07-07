import { useState, createContext, useMemo, useCallback } from "react";

import {
  MessageConfig,
  ProviderProps,
  ToastTypes,
  UserProfileContextType,
  UserPanelData,
} from "../types";
import { TokenAuth } from "@utils/index";

/*services*/
import { UserProfileService } from "@services/userProfile.service";

const UserProfileContext = createContext<UserProfileContextType>(
  {} as UserProfileContextType
);

const userProfileService = new UserProfileService();
const tokenAuth = new TokenAuth();

const UserProfileProvider = ({ children }: ProviderProps) => {
  const [userPanelData, setUserPanelData] = useState<UserPanelData | null>(
    null
  );

  const getUserPanelData = useCallback(
    async (config: MessageConfig): Promise<void> => {
      const { loadingConfig, toastConfig } = config;
      const token = tokenAuth.getToken();
      if (token) {
        try {
          loadingConfig.setMessage("Cargando información...");
          loadingConfig.activeLoading();
          const res = await userProfileService.getUserPanelData(token);
          setUserPanelData(res);
          toastConfig.configToast(
            ToastTypes.success,
            "Información cargada satisfactoriamente!"
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
      userPanelData,
      getUserPanelData,
    }),
    [userPanelData, getUserPanelData]
  );

  return (
    <UserProfileContext.Provider value={value}>
      {children}
    </UserProfileContext.Provider>
  );
};

export { UserProfileProvider };
export default UserProfileContext;
