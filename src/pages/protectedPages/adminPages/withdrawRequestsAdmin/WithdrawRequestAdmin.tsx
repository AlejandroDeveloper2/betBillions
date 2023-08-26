import { BiMoneyWithdraw } from "react-icons/bi";
import { BsFillCalendarDateFill, BsFillTelephoneFill } from "react-icons/bs";
import { FaHashtag } from "react-icons/fa";
import { GrStatusDisabledSmall } from "react-icons/gr";
import { HiCurrencyDollar } from "react-icons/hi";
import { HiWallet } from "react-icons/hi2";
import { IoMdPricetag } from "react-icons/io";

import { useRealTimeFecher, useListPagination } from "@hooks/index";
import { WithdrawService } from "@services/withdraws.service";
import { tableHeaders } from "./constants";
import { sortListPerDate } from "@utils/index";

import { Empty, Footer, Loading, Table } from "@components/index";

import { WithdrawsContainer, PageTitle } from "./WithdrawRequestAdmin.style";

const withdrawService = new WithdrawService();

const WithdrawRequestAdmin = (): JSX.Element => {
  const { data: retreats, isLoading } = useRealTimeFecher(
    "/retreats/list",
    withdrawService.getAllRetreats
  );

  const sortedRetreats = sortListPerDate(retreats, "createdAt");

  const { records, PaginationComponent } = useListPagination(
    sortedRetreats ? sortedRetreats : []
  );

  return (
    <WithdrawsContainer>
      <PageTitle>
        <h1>Listado de solicitud de retiros</h1>
        <BiMoneyWithdraw
          style={{ color: "var(--bg-secondary-color)", fontSize: 40 }}
        />
      </PageTitle>
      {isLoading ? (
        <Loading
          message="Cargando solicitudes de retiro"
          textColor="var(--bg-secondary-color)"
        />
      ) : (
        <Table
          headers={tableHeaders}
          columnsNumber={7}
          title="Solicitudes de retiro"
        >
          {!retreats ? (
            <Empty message="¡No hay solicitudes de retiro!" />
          ) : (
            records.map((retreat) => (
              <Table.Row key={retreat.id} columnsNumber={7}>
                <Table.Item
                  value={retreat.wallet}
                  Icon={HiWallet}
                  label="Billetera"
                />
                <Table.Item
                  value={retreat.userWalletId}
                  Icon={FaHashtag}
                  label="Id Billetera"
                />
                <Table.Item
                  value={retreat.price}
                  Icon={IoMdPricetag}
                  label="Valor retiro"
                />
                <Table.Item
                  value={retreat.commissionPercentage}
                  Icon={BsFillTelephoneFill}
                  label="Comisión"
                />
                <Table.Item
                  value={retreat.currency}
                  Icon={HiCurrencyDollar}
                  label="Moneda"
                />
                <Table.Item
                  value={retreat.stateRetreats}
                  Icon={GrStatusDisabledSmall}
                  label="Estado"
                />
                <Table.Item
                  value={retreat.createdAt}
                  Icon={BsFillCalendarDateFill}
                  label="Fecha retiro"
                />
              </Table.Row>
            ))
          )}
        </Table>
      )}
      <PaginationComponent />
      <Footer />
    </WithdrawsContainer>
  );
};

export default WithdrawRequestAdmin;
