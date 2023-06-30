import { useAuthContext } from "../../../../hooks";

const UserPanel = (): JSX.Element => {
  const { logout } = useAuthContext();
  return (
    <div>
      UserPanel <button onClick={logout}>Cerrar sesión</button>
    </div>
  );
};

export default UserPanel;
