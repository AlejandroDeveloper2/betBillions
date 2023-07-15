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
} from "@context/index";

/* Routers */
import AppRouter from "./routes/AppRouter";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <ToastProvider>
        <LocationProvider>
          <SupportProvider>
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
          </SupportProvider>
        </LocationProvider>
      </ToastProvider>
    </BrowserRouter>
  );
}

export default App;
