import { Route, Routes } from "react-router-dom";

// import { useAuthContext } from "../hooks";

import UserRoutes from "./UserRoutes";

const ProtectedRoutes = (): JSX.Element => {
  //   const { userAuth } = useAuthContext();
  return (
    <Routes>
      <Route path="/*" element={<UserRoutes />} />
    </Routes>
  );
};

export default ProtectedRoutes;
