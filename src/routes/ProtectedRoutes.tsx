import { Route, Routes } from "react-router-dom";

import { useAuthContext } from "@hooks/index";

import UserRoutes from "./UserRoutes";
import AdminRoutes from "./AdminRoutes";

const ProtectedRoutes = (): JSX.Element => {
  const { userAuth } = useAuthContext();

  return (
    <Routes>
      {userAuth?.roles[0].authority === "ROLE_USER" ? (
        <Route path="/*" element={<UserRoutes />} />
      ) : (
        <Route path="/*" element={<AdminRoutes />} />
      )}
    </Routes>
  );
};

export default ProtectedRoutes;
