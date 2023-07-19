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
} from "@context/index";

/* Routers */
import AppRouter from "./routes/AppRouter";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <ToastProvider>
        <LocationProvider>
          <AuthProvider>
            <SupportProvider>
              <ShoppingCartProvider>
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
              </ShoppingCartProvider>
            </SupportProvider>
          </AuthProvider>
        </LocationProvider>
      </ToastProvider>
    </BrowserRouter>
  );
}

export default App;
