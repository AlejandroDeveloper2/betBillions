import { Routes, Route } from "react-router-dom";

/* Layouts */
import { PublicLayout } from "@layouts/index";

/* Pages */
import {
  LoginPage,
  SignupPage,
  RecoverPassword,
  UpdatePassword,
  ActivateAccount,
  Page404,
} from "@pages/index";

const PublicRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<LoginPage />} />
        <Route path="/createAccount/:userName" element={<SignupPage />} />
        <Route path="/createAccount" element={<SignupPage />} />
        <Route path="/recoverPassword" element={<RecoverPassword />} />
        <Route path="/updatePassword/:token" element={<UpdatePassword />} />
        <Route path="/activateAccount/:token" element={<ActivateAccount />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
};

export default PublicRoutes;
