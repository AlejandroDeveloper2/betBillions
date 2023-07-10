import { BrowserRouter } from "react-router-dom";

/* Context */
import {
  AuthProvider,
  UserProfileProvider,
  WalletProvider,
  LotteryProvider,
  TransactionProvider,
  ShoppingCartProvider,
  ToastProvider,
} from "@context/index";

/* Routers */
import AppRouter from "./routes/AppRouter";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <ToastProvider>
        <ShoppingCartProvider>
          <TransactionProvider>
            <LotteryProvider>
              <WalletProvider>
                <UserProfileProvider>
                  <AuthProvider>
                    <AppRouter />
                  </AuthProvider>
                </UserProfileProvider>
              </WalletProvider>
            </LotteryProvider>
          </TransactionProvider>
        </ShoppingCartProvider>
      </ToastProvider>
    </BrowserRouter>
  );
}

export default App;
