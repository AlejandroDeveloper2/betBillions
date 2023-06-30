import { Routes, Route } from "react-router-dom";

/* Layouts */
import { ProtectedLayout } from "../layouts";

/* Pages */
import { UserPanel } from "../pages";

const UserRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/userPanel" element={<ProtectedLayout />}>
        <Route index element={<UserPanel />} />
      </Route>
    </Routes>
  );
};

export default UserRoutes;
