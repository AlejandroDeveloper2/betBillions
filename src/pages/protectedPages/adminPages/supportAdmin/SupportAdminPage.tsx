import {
  MdAlternateEmail,
  MdContactSupport,
  MdQuestionAnswer,
} from "react-icons/md";
import { FaTicketAlt, FaUser } from "react-icons/fa";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { BiSolidCategory } from "react-icons/bi";
import { GrStatusDisabledSmall } from "react-icons/gr";

import { SupportService } from "@services/support.service";
import { useListPagination, useModal, useRealTimeFecher } from "@hooks/index";
import { formatDate, sortListPerDate } from "@utils/index";
import { tableHeaders } from "./constants";
import { SupportRequest } from "types";

import {
  AnswerRequestModal,
  DefaultButton,
  Empty,
  Footer,
  Loading,
  Table,
} from "@components/index";

import { PageTitle, SupportAdminContainer } from "./SupportAdminPage.style";

const SupportAdminPage = (): JSX.Element => {
  const supportService = new SupportService();
  const { data: requests, isLoading } = useRealTimeFecher(
    "/support/list",
    supportService.getSupportAdminRequests
  );

  const sortedRequests = sortListPerDate(requests, "createdAt");

  const { records, PaginationComponent } = useListPagination(
    sortedRequests ? sortedRequests : []
  );

  const {
    data: requestData,
    isModalVisible,
    showModal,
    hideModal,
  } = useModal<SupportRequest>();

  return (
    <>
      <AnswerRequestModal
        hideModal={hideModal}
        isModalVisible={isModalVisible}
        requestData={requestData}
      />
      <SupportAdminContainer>
        <PageTitle>
          <h1>Solicitudes de soporte</h1>
          <MdContactSupport
            style={{ fontSize: 50, color: "var(--bg-secondary-color)" }}
          />
        </PageTitle>
        {isLoading ? (
          <Loading
            message="Cargando solicitudes de soporte..."
            textColor="var(--bg-secondary-color)"
          />
        ) : (
          <Table
            headers={tableHeaders}
            columnsNumber={7}
            title="Listado de solicitudes"
          >
            {requests?.length === 0 ? (
              <Empty message="¡No hay solicitudes de soporte aún!" />
            ) : (
              records.map((request) => (
                <Table.Row key={request.id} columnsNumber={7}>
                  <Table.Item
                    value={request.ticket}
                    Icon={FaTicketAlt}
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
                    value={request.username}
                    Icon={FaUser}
                    label="Usuario"
                  />
                  <Table.Item
                    value={request.email}
                    Icon={MdAlternateEmail}
                    label="Correo"
                  />
                  <Table.Item
                    value={
                      request.state === "Pending" ? "Pendiente" : "Respondido"
                    }
                    Icon={GrStatusDisabledSmall}
                    label="Estado"
                  />
                  <Table.Options>
                    <DefaultButton
                      style={{
                        bg: "var(--bg-secondary-color)",
                        fontColor: "var(--white)",
                        width: "4rem",
                        padding: "0.5rem 0.3rem",
                      }}
                      title={"Responder solicitud"}
                      onClick={() => showModal(request)}
                    >
                      <MdQuestionAnswer
                        style={{ color: "var(--white)", fontSize: 20 }}
                      />
                    </DefaultButton>
                  </Table.Options>
                </Table.Row>
              ))
            )}
          </Table>
        )}
        <PaginationComponent />
        <Footer />
      </SupportAdminContainer>
    </>
  );
};

export default SupportAdminPage;
