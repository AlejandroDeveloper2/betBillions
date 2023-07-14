import { PiUsersFourFill } from "react-icons/pi";
import { BsFillCalendarDateFill, BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationArrow, FaUserAlt, FaUserTie } from "react-icons/fa";
import { GrStatusDisabledSmall } from "react-icons/gr";
import { IoLocationSharp } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";

import {
  useAuthContext,
  useListPagination,
  useRealTimeFecher,
} from "@hooks/index";
import { UsersService } from "@services/users.service";
import { formatDate, filterDiferenceList, sortListPerDate } from "@utils/index";
import { tableHeaders } from "./constants";

import { Empty, Footer, Loading, Table } from "@components/index";

import { PageTitle, UsersContainer } from "./UserAdmin.style";

const usersService = new UsersService();
const UsersAdmin = (): JSX.Element => {
  const { userAuth } = useAuthContext();
  const { data: users, isLoading } = useRealTimeFecher(
    "/users/list",
    usersService.getAllUsers
  );
  const { records, PaginationComponent } = useListPagination(
    users ? users : []
  );

  const filteredUsers = filterDiferenceList(records, {
    a: "username",
    b: userAuth?.sub,
  });
  const sortedUsers = sortListPerDate(filteredUsers, "createdAt");

  return (
    <>
      <UsersContainer>
        <PageTitle>
          <h1>Usuarios del sistema</h1>
          <PiUsersFourFill
            style={{ fontSize: 50, color: "var(--bg-secondary-color)" }}
          />
        </PageTitle>
        {isLoading ? (
          <Loading
            message="Cargando usuarios..."
            textColor="var(--bg-secondary-color)"
          />
        ) : (
          <Table
            headers={tableHeaders}
            columnsNumber={9}
            title="Listado de usuarios"
          >
            {users?.length === 0 ? (
              <Empty message="¡No hay usuarios registrados!" />
            ) : (
              sortedUsers?.map((user) => (
                <Table.Row key={user.id} columnsNumber={9}>
                  <Table.Item
                    value={user.username}
                    Icon={FaUserAlt}
                    label="Usuario"
                  />
                  <Table.Item
                    value={user.email}
                    Icon={MdAlternateEmail}
                    label="Correo"
                  />
                  <Table.Item
                    value={user.fullName}
                    Icon={FaUserAlt}
                    label="Nombre"
                  />
                  <Table.Item
                    value={user.phone ? user.phone : "No definido"}
                    Icon={BsFillTelephoneFill}
                    label="Telefono"
                  />
                  <Table.Item
                    value={user.country ? user.country : "No definido"}
                    Icon={FaLocationArrow}
                    label="País"
                  />
                  <Table.Item
                    value={user.city ? user.city : "No definido"}
                    Icon={IoLocationSharp}
                    label="Ciudad"
                  />
                  <Table.Item
                    value={user.status ? "Activo" : "Inactivo"}
                    Icon={GrStatusDisabledSmall}
                    label="Estado"
                  />
                  <Table.Item
                    value={user.roles === "ROLE_USER" ? "Usuario" : "Admin"}
                    Icon={FaUserTie}
                    label="Rol"
                  />
                  <Table.Item
                    value={formatDate(user.createdAt, "numeric")}
                    Icon={BsFillCalendarDateFill}
                    label="Registro"
                  />
                </Table.Row>
              ))
            )}
          </Table>
        )}
        <PaginationComponent />
        <Footer />
      </UsersContainer>
    </>
  );
};

export default UsersAdmin;
