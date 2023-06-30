import { Routes, Route, Navigate } from "react-router-dom";

import PublicRoutes from "./PublicRoutes";
import ProtectedRoutes from "./ProtectedRoutes";

import { useAuthContext } from "../hooks";

import { LoadingScreen } from "../components";

const AppRouter = (): JSX.Element => {
  const { authStatus } = useAuthContext();

  if (authStatus === "checking") return <LoadingScreen />;
  return (
    <Routes>
      {authStatus === "authenticated" ? (
        <>
          <Route path="/*" element={<ProtectedRoutes />} />
          <Route path="/" element={<Navigate to="/userPanel" />} />
        </>
      ) : (
        <>
          <Route path="/*" element={<PublicRoutes />} />
          <Route path="/userPanel/*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  );
};

export default AppRouter;
