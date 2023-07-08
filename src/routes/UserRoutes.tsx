import { Routes, Route } from "react-router-dom";

/* Layouts */
import { ProtectedLayout } from "@layouts/index";

/* Pages */
import {
  LotteryDetails,
  LotteryPage,
  MyWallet,
  MyWalletDeposit,
  MyWalletWithdraw,
  Page404,
  PurchaseBingoBoard,
  TeamPage,
  Transactions,
  UserPanel,
} from "@pages/index";

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
        <Route path="/userPanel/lottery" element={<LotteryPage />} />
        <Route
          path="/userPanel/lottery/details/:lotteryId"
          element={<LotteryDetails />}
        />
        <Route path="/userPanel/transactions" element={<Transactions />} />
        <Route path="/userPanel/myTeam" element={<TeamPage />} />
        <Route
          path="/userPanel/lottery/purchaseBingoBoard"
          element={<PurchaseBingoBoard />}
        />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
};

export default UserRoutes;
