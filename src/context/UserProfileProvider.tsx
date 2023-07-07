import { useState, createContext, useMemo } from "react";

import {
  // MessageConfig,
  ProviderProps,
  // ToastTypes,
  UserProfileContextType,
  UserPanelData,
} from "../types";
// import { TokenAuth } from "@utils/index";

// /*services*/
// import { UserProfileService } from "@services/userProfile.service";

const UserProfileContext = createContext<UserProfileContextType>(
  {} as UserProfileContextType
);

const UserProfileProvider = ({ children }: ProviderProps) => {
  const [userPanelData] = useState<UserPanelData | null>(null);

  const value = useMemo(
    () => ({
      userPanelData,
    }),
    [userPanelData]
  );

  return (
    <UserProfileContext.Provider value={value}>
      {children}
    </UserProfileContext.Provider>
  );
};

export { UserProfileProvider };
export default UserProfileContext;
