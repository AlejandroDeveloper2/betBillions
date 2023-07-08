import { BrowserRouter } from "react-router-dom";

/* Context */
import {
  AuthProvider,
  UserProfileProvider,
  WalletProvider,
  LotteryProvider,
  TransactionProvider,
} from "@context/index";

/* Routers */
import AppRouter from "./routes/AppRouter";

function App(): JSX.Element {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
