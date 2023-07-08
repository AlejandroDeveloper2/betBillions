import { BrowserRouter } from "react-router-dom";

/* Context */
import {
  AuthProvider,
  UserProfileProvider,
  WalletProvider,
  LotteryProvider,
  TransactionProvider,
  ShoppingCartProvider,
} from "@context/index";

/* Routers */
import AppRouter from "./routes/AppRouter";

function App(): JSX.Element {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
