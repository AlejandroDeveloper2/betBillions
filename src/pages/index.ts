/*Public pages */
export { default as LoginPage } from "./publicPages/login/LoginPage";
export { default as SignupPage } from "./publicPages/signup/SignupPage";
export { default as RecoverPassword } from "./publicPages/recoverPassword/RecoverPassword";
export { default as UpdatePassword } from "./publicPages/updatePassword/UpdatePassword";
export { default as ActivateAccount } from "./publicPages/activateAccount/ActivateAccount";

/* Protected pages */
export { default as UserPanel } from "./protectedPages/userPages/userPanel/UserPanel";
export { default as MyWallet } from "./protectedPages/userPages/myWallet/MyWallet";
export { default as MyWalletDeposit } from "./protectedPages/userPages/myWallet/MyWalletDeposit";
export { default as MyWalletWithdraw } from "./protectedPages/userPages/myWallet/MyWalletWithdraw";

/*Error page */
export { default as Page404 } from "./404Page/Page404";
