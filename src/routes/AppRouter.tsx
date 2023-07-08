import { Routes, Route, Navigate } from "react-router-dom";

import PublicRoutes from "./PublicRoutes";
import ProtectedRoutes from "./ProtectedRoutes";

import { useAuthContext } from "@hooks/index";

import { LoadingScreen } from "@components/index";

const AppRouter = (): JSX.Element => {
  const { authStatus, userAuth } = useAuthContext();

  if (authStatus === "checking") return <LoadingScreen />;
  return (
    <Routes>
      {authStatus === "authenticated" ? (
        <>
          <Route path="/*" element={<ProtectedRoutes />} />
          {userAuth?.roles[0].authority === "ROLE_USER" ? (
            <Route path="/" element={<Navigate to="/userPanel" />} />
          ) : (
            <Route path="/" element={<Navigate to="/admin" />} />
          )}
        </>
      ) : (
        <>
          <Route path="/*" element={<PublicRoutes />} />
          <Route path="/userPanel/*" element={<Navigate to="/" />} />
          <Route path="/admin/*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  );
};

export default AppRouter;
