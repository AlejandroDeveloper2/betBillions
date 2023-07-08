import { Routes, Route } from "react-router-dom";

import { ProtectedLayout } from "@layouts/index";

import { Page404, TransactionsAdmin } from "@pages/index";

const AdminRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/admin" element={<ProtectedLayout />}>
        <Route index element={<TransactionsAdmin />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
