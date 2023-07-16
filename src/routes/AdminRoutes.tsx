import { Routes, Route } from "react-router-dom";

import { ProtectedLayout } from "@layouts/index";

import {
  Page404,
  SupportAdminPage,
  TransactionsAdmin,
  UserProfile,
  UsersAdmin,
} from "@pages/index";

const AdminRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/admin" element={<ProtectedLayout />}>
        <Route index element={<TransactionsAdmin />} />
        <Route path="/admin/settings/myProfile" element={<UserProfile />} />
        <Route path="/admin/users" element={<UsersAdmin />} />
        <Route path="/admin/support/list" element={<SupportAdminPage />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
