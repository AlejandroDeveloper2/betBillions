import { BrowserRouter } from "react-router-dom";

/* Context */
import { AuthProvider, UserProfileProvider, WalletProvider } from "./context";

/* Routers */
import AppRouter from "./routes/AppRouter";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <WalletProvider>
        <UserProfileProvider>
          <AuthProvider>
            <AppRouter />
          </AuthProvider>
        </UserProfileProvider>
      </WalletProvider>
    </BrowserRouter>
  );
}

export default App;
