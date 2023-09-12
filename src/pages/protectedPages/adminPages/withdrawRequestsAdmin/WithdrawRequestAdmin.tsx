import { BiMoneyWithdraw } from "react-icons/bi";
import { BsFillCalendarDateFill, BsFillTelephoneFill } from "react-icons/bs";
import { FaHashtag } from "react-icons/fa";
import { GrStatusDisabledSmall } from "react-icons/gr";
import { HiCurrencyDollar } from "react-icons/hi";
import { HiWallet, HiXMark } from "react-icons/hi2";
import { IoMdPricetag } from "react-icons/io";

import {
  useRealTimeFecher,
  useListPagination,
  useWithdrawContext,
  useLoading,
} from "@hooks/index";
import { WithdrawService } from "@services/withdraws.service";
import { tableHeaders } from "./constants";
import { formatDate, sortListPerDate } from "@utils/index";

import {
  DefaultButton,
  Empty,
  Footer,
  Loading,
  Table,
} from "@components/index";

import { WithdrawsContainer, PageTitle } from "./WithdrawRequestAdmin.style";
import { AiOutlineCheck } from "react-icons/ai";

const withdrawService = new WithdrawService();

const WithdrawRequestAdmin = (): JSX.Element => {
  const { validateTransaction, invalidateTransaction } = useWithdrawContext();
  const { data: retreats, isLoading } = useRealTimeFecher(
    "/retreats/list",
    withdrawService.getAllRetreats
  );

  const sortedRetreats = sortListPerDate(retreats, "createdAt");

  const { records, PaginationComponent } = useListPagination(
    sortedRetreats ? sortedRetreats : []
  );

  const { activeLoading, inactiveLoading, setMessage } = useLoading();

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
          columnsNumber={8}
          title="Solicitudes de retiro"
        >
          {!retreats ? (
            <Empty message="¡No hay solicitudes de retiro!" />
          ) : (
            records.map((retreat) => (
              <Table.Row key={retreat.id} columnsNumber={8}>
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
                  value={formatDate(retreat.createdAt, "numeric")}
                  Icon={BsFillCalendarDateFill}
                  label="Fecha retiro"
                />
                <Table.Options>
                  <DefaultButton
                    style={{
                      bg: "var(--success)",
                      fontColor: "var(--white)",
                      width: "3rem",
                      padding: "0.3rem 0.2rem",
                    }}
                    title={"Validar transacción"}
                    onClick={() =>
                      validateTransaction(retreat, {
                        activeLoading,
                        inactiveLoading,
                        setMessage,
                      })
                    }
                  >
                    <AiOutlineCheck
                      style={{ color: "var(--white)", fontSize: 20 }}
                    />
                  </DefaultButton>
                  <DefaultButton
                    style={{
                      bg: "var(--error)",
                      fontColor: "var(--white)",
                      width: "3rem",
                      padding: "0.3rem 0.2rem",
                    }}
                    title={"Invalidar transacción"}
                    onClick={() =>
                      invalidateTransaction(retreat, {
                        activeLoading,
                        inactiveLoading,
                        setMessage,
                      })
                    }
                  >
                    <HiXMark style={{ color: "var(--white)", fontSize: 20 }} />
                  </DefaultButton>
                </Table.Options>
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
