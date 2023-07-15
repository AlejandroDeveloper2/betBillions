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
export { default as PurchaseBingoDetails } from "./protectedPages/userPages/purchaseBingoBoard/PurchaseBingoDetails";
export { default as GamePreview } from "./protectedPages/userPages/gamePreview/GamePreview";
export { default as UserProfile } from "./protectedPages/userPages/userProfile/UserProfile";
export { default as SupportHistory } from "./protectedPages/userPages/supportPage/SupportHistory";
export { default as SupportRequest } from "./protectedPages/userPages/supportPage/SupportRequest";

/* Protected admin pages*/
export { default as TransactionsAdmin } from "./protectedPages/adminPages/transactionsAdmin/TransactionsAdmin";
export { default as UsersAdmin } from "./protectedPages/adminPages/usersAdmin/UsersAdmin";

/*Error page */
export { default as Page404 } from "./404Page/Page404";
