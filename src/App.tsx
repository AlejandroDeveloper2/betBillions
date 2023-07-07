import { BrowserRouter } from "react-router-dom";

/* Context */
import {
  AuthProvider,
  UserProfileProvider,
  WalletProvider,
  LotteryProvider,
} from "./context";

/* Routers */
import AppRouter from "./routes/AppRouter";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <LotteryProvider>
        <WalletProvider>
          <UserProfileProvider>
            <AuthProvider>
              <AppRouter />
            </AuthProvider>
          </UserProfileProvider>
        </WalletProvider>
      </LotteryProvider>
    </BrowserRouter>
  );
}

export default App;
