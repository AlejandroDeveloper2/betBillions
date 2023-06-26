import { Routes, Route } from "react-router-dom";

import PublicRoutes from "./PublicRoutes";

const AppRouter = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/*" element={<PublicRoutes />} />
    </Routes>
  );
};

export default AppRouter;
