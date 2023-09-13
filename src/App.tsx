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
  LocationProvider,
  SupportProvider,
  BingoProvider,
  WithdrawProvider,
} from "@context/index";

/* Routers */
import AppRouter from "./routes/AppRouter";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <ToastProvider>
        <LocationProvider>
          <ShoppingCartProvider>
            <AuthProvider>
              <WithdrawProvider>
                <SupportProvider>
                  <TransactionProvider>
                    <LotteryProvider>
                      <WalletProvider>
                        <UserProfileProvider>
                          <BingoProvider>
                            <AppRouter />
                          </BingoProvider>
                        </UserProfileProvider>
                      </WalletProvider>
                    </LotteryProvider>
                  </TransactionProvider>
                </SupportProvider>
              </WithdrawProvider>
            </AuthProvider>
          </ShoppingCartProvider>
        </LocationProvider>
      </ToastProvider>
    </BrowserRouter>
  );
}

export default App;
