import { useNavigate } from "react-router-dom";
import { BsClockHistory, BsFillCalendarDateFill } from "react-icons/bs";
import { IoTicketSharp } from "react-icons/io5";
import { BiSolidCategory } from "react-icons/bi";
import { GrStatusInfoSmall } from "react-icons/gr";
import { HiMiniPaperAirplane } from "react-icons/hi2";

import { useListPagination, useRealTimeFecher } from "@hooks/index";
import { SupportService } from "@services/support.service";
import { formatDate, sortListPerDate } from "@utils/index";
import { tableHeaders } from "./constants";

import {
  DefaultButton,
  Empty,
  Footer,
  Loading,
  SidebarDefault,
  Table,
} from "@components/index";

import { PageTitle, SupportContainer } from "./SupportPage.style";
import { Content } from "@styles/GlobalStyles.style";

const supportService = new SupportService();

const SupportHistory = (): JSX.Element => {
  const { data: userRequests, isLoading } = useRealTimeFecher(
    "/support/list/users",
    supportService.getSupportUserRequests
  );
  const { records, PaginationComponent } = useListPagination(
    userRequests ? userRequests : []
  );
  const sortedSupportRequests = sortListPerDate(records, "createdAt");
  const navigate = useNavigate();

  return (
    <SupportContainer>
      <SidebarDefault />
      <Content>
        <PageTitle>
          <div>
            <h1>Historial de solicitudes</h1>
            <BsClockHistory
              style={{ color: "var(--bg-secondary-color)", fontSize: 40 }}
            />
          </div>
          <DefaultButton
            style={{
              bg: "var(--bg-secondary-color)",
              fontColor: "var(--white)",
              width: "30rem",
            }}
            title={"Realizar solicitud"}
            label="Realizar solicitud"
            onClick={() => navigate("/userPanel/support/sendRequest")}
          >
            <HiMiniPaperAirplane
              style={{ color: "var(--white)", fontSize: 30, marginRight: 10 }}
            />
          </DefaultButton>
        </PageTitle>
        {isLoading ? (
          <Loading
            message="Cargando historial de solicitudes..."
            textColor="var(--bg-secondary-color)"
          />
        ) : (
          <Table
            headers={tableHeaders}
            columnsNumber={4}
            title="Historial de solicitudes"
          >
            {userRequests?.length === 0 ? (
              <Empty message="¡No tienes solicitudes de soporte aún!" />
            ) : (
              sortedSupportRequests.map((request) => (
                <Table.Row key={request.id} columnsNumber={4}>
                  <Table.Item
                    value={request.ticket}
                    Icon={IoTicketSharp}
                    label="Ticket"
                  />
                  <Table.Item
                    value={formatDate(request.createdAt, "mixted")}
                    Icon={BsFillCalendarDateFill}
                    label="Registro"
                  />
                  <Table.Item
                    value={request.category}
                    Icon={BiSolidCategory}
                    label="Categoria"
                  />
                  <Table.Item
                    value={
                      request.state === "Pending" ? "Pendiente" : "Respondido"
                    }
                    Icon={GrStatusInfoSmall}
                    label="Estado"
                  />
                </Table.Row>
              ))
            )}
          </Table>
        )}
        <PaginationComponent />
        <Footer />
      </Content>
    </SupportContainer>
  );
};

export default SupportHistory;
