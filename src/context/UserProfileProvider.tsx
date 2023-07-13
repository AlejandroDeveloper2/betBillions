import { useState, createContext, useMemo, useCallback } from "react";

import {
  LoadingConfig,
  ProviderProps,
  ToastTypes,
  UserProfileContextType,
  UserProfileFormValues,
} from "types";
import { TokenAuth } from "@utils/index";
import { useToastContext } from "@hooks/index";

/*services*/
import { UserProfileService } from "@services/userProfile.service";

const UserProfileContext = createContext<UserProfileContextType>(
  {} as UserProfileContextType
);

const tokenAuth = new TokenAuth();
const userProfileService = new UserProfileService();

const UserProfileProvider = ({ children }: ProviderProps) => {
  const [userPhotoUrl, setUserPhotoUrl] = useState<string>("");
  const { showToast, hideToast, configToast } = useToastContext();

  const updateUserProfile = useCallback(
    async (
      userData: UserProfileFormValues,
      config: LoadingConfig
    ): Promise<void> => {
      const token = tokenAuth.getToken();
      if (token) {
        try {
          config.setMessage("Actualizando perfil...");
          config.activeLoading();
          const res = await userProfileService.updateUserProfile(
            userData,
            token
          );
          configToast(res.typeStatus, res.message);
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

  const uploadUserProfilePhoto = useCallback(
    async (
      e: React.ChangeEvent<HTMLInputElement>,
      config: LoadingConfig
    ): Promise<void> => {
      const files = e.target.files;
      const formData = new FormData();
      if (files) {
        formData.append("file", files[0]);
        formData.append("upload_preset", "uploadUserPhoto");
      }
      try {
        config.setMessage("");
        config.activeLoading();
        const res = await userProfileService.uploadUserProfilePhoto(formData);
        setUserPhotoUrl(res);
        configToast(ToastTypes.success, "Foto subida correctamente!");
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

  const value = useMemo(
    () => ({
      userPhotoUrl,
      updateUserProfile,
      uploadUserProfilePhoto,
    }),
    [userPhotoUrl, updateUserProfile, uploadUserProfilePhoto]
  );

  return (
    <UserProfileContext.Provider value={value}>
      {children}
    </UserProfileContext.Provider>
  );
};

export { UserProfileProvider };
export default UserProfileContext;
