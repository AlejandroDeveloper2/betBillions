import { Routes, Route } from "react-router-dom";

/* Layouts */
import { ProtectedLayout } from "../layouts";

/* Pages */
import { Page404, UserPanel } from "../pages";

const UserRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/userPanel" element={<ProtectedLayout />}>
        <Route index element={<UserPanel />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
};

export default UserRoutes;
