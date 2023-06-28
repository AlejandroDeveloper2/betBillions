import { Routes, Route } from "react-router-dom";

/* Layouts */
import { PublicLayout } from "../layouts";

/* Pages */
import { LoginPage, SignupPage, RecoverPassword } from "../pages";

const PublicRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<LoginPage />} />
        <Route path="/createAccount/:userName" element={<SignupPage />} />
        <Route path="/createAccount" element={<SignupPage />} />
        <Route path="/recoverPassword" element={<RecoverPassword />} />
      </Route>
    </Routes>
  );
};

export default PublicRoutes;
