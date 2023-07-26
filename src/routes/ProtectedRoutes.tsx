import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { useAuthContext } from "@hooks/index";

const UserRoutes = lazy(() => import("./UserRoutes"));
const AdminRoutes = lazy(() => import("./AdminRoutes"));

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
