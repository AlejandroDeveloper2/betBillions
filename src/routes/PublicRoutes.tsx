import { Routes, Route } from "react-router-dom";

/* Layouts */
import { PublicLayout } from "../layouts";

/* Pages */
import { LoginPage } from "../pages";

const PublicRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<LoginPage />} />
      </Route>
    </Routes>
  );
};

export default PublicRoutes;
