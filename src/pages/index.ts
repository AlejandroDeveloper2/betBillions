/*Public pages */
export { default as LoginPage } from "./publicPages/login/LoginPage";
export { default as SignupPage } from "./publicPages/signup/SignupPage";
export { default as RecoverPassword } from "./publicPages/recoverPassword/RecoverPassword";
export { default as UpdatePassword } from "./publicPages/updatePassword/UpdatePassword";
export { default as ActivateAccount } from "./publicPages/activateAccount/ActivateAccount";

/* Protected user pages*/
export { default as UserPanel } from "./protectedPages/userPages/userPanel/UserPanel";
export { default as MyWallet } from "./protectedPages/userPages/myWallet/MyWallet";
export { default as MyWalletDeposit } from "./protectedPages/userPages/myWallet/MyWalletDeposit";
export { default as MyWalletWithdraw } from "./protectedPages/userPages/myWallet/MyWalletWithdraw";
export { default as LotteryPage } from "./protectedPages/userPages/lottery/LotteryPage";
export { default as LotteryDetails } from "./protectedPages/userPages/lottery/LotteryDetails";
export { default as Transactions } from "./protectedPages/userPages/transactions/Transactions";
export { default as TeamPage } from "./protectedPages/userPages/team/TeamPage";
export { default as PurchaseBingoBoard } from "./protectedPages/userPages/purchaseBingoBoard/PurchaseBingoBoard";

/* Protected admin pages*/
export { default as TransactionsAdmin } from "./protectedPages/adminPages/transactionsAdmin/TransactionsAdmin";

/*Error page */
export { default as Page404 } from "./404Page/Page404";
