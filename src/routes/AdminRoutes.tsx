import { Routes, Route } from "react-router-dom";

import { ProtectedLayout } from "@layouts/index";

import {
  LotteryAdmin,
  Page404,
  SupportAdminPage,
  TransactionsAdmin,
  UserProfile,
  UsersAdmin,
  WithdrawRequestAdmin,
} from "@pages/index";

const AdminRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/admin" element={<ProtectedLayout />}>
        <Route index element={<TransactionsAdmin />} />
        <Route path="/admin/settings/myProfile" element={<UserProfile />} />
        <Route path="/admin/users" element={<UsersAdmin />} />
        <Route path="/admin/support/list" element={<SupportAdminPage />} />
        <Route path="/admin/lottery" element={<LotteryAdmin />} />
        <Route
          path="/admin/withdraws/requests"
          element={<WithdrawRequestAdmin />}
        />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
