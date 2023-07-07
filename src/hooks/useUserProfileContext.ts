import { useContext } from "react";

import UserProfileContext from "@context/UserProfileProvider";

const useUserProfileContext = () => {
  return useContext(UserProfileContext);
};

export default useUserProfileContext;
