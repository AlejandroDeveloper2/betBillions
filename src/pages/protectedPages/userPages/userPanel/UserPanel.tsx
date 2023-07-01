import { Footer } from "../../../../components";

import { useAuthContext } from "../../../../hooks";
import { PanelContainer } from "./UserPanel.style";

const UserPanel = (): JSX.Element => {
  const { userAuth } = useAuthContext();
  return (
    <PanelContainer>
      <h1>
        Bienvenido <span>{userAuth ? userAuth.fullName : "Usuario"}</span>
      </h1>
      <Footer />
    </PanelContainer>
  );
};

export default UserPanel;
