import { useContext } from "react";

import LocationContext from "@context/LocationProvider";

const useLocationContext = () => {
  return useContext(LocationContext);
};

export default useLocationContext;
