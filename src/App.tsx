import { BrowserRouter } from "react-router-dom";

/* Routers */
import AppRouter from "./routes/AppRouter";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
