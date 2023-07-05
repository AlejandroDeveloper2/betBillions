import { Routes, Route } from "react-router-dom";

/* Layouts */
import { ProtectedLayout } from "../layouts";

/* Pages */
import {
  MyWallet,
  MyWalletDeposit,
  MyWalletWithdraw,
  Page404,
  UserPanel,
} from "../pages";

const UserRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/userPanel" element={<ProtectedLayout />}>
        <Route index element={<UserPanel />} />
        <Route path="/userPanel/myWallet" element={<MyWallet />} />
        <Route
          path="/userPanel/myWallet/deposit"
          element={<MyWalletDeposit />}
        />
        <Route
          path="/userPanel/myWallet/withdraw"
          element={<MyWalletWithdraw />}
        />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
};

export default UserRoutes;
