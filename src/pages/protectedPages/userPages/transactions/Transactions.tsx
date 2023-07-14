import { GrStatusDisabledSmall, GrTransaction } from "react-icons/gr";
import { FaHashtag } from "react-icons/fa";
import { MdAccountBalanceWallet, MdCategory } from "react-icons/md";
import { BsFillCalendarDateFill } from "react-icons/bs";

import { useListPagination, useRealTimeFecher } from "@hooks/index";
import { tableHeaders } from "./constants";
import { formatDate, sortListPerDate } from "@utils/index";

import { TransactionsService } from "@services/transactions.service";
import { UserProfileService } from "@services/userProfile.service";

import {
  Indicator,
  SidebarDefault,
  Image,
  Table,
  Loading,
  Footer,
  Empty,
} from "@components/index";

import { TransactionsContainer, PageTitle } from "./Transactions.style";
import {
  Content,
  IndicatorHead,
  IndicatorTitle,
  IndicatorValue,
} from "@styles/GlobalStyles.style";

import { Wallet3dIcon } from "@assets/index";

const Transactions = (): JSX.Element => {
  const transactionsService = new TransactionsService();
  const userProfileService = new UserProfileService();
  const { data: userTransactions, isLoading } = useRealTimeFecher(
    "/transaction/list",
    transactionsService.getUserTransactions
  );
  const { data: userPanelData, isLoading: isLoadingUserData } =
    useRealTimeFecher("/users/panel", userProfileService.getUserPanelData);

  const { records, PaginationComponent } = useListPagination(
    userTransactions ? userTransactions : []
  );

  const sortedTransactions = sortListPerDate(records, "createdAt");

  return (
    <TransactionsContainer>
      <SidebarDefault />
      <Content>
        <PageTitle>
          <h1>Transacciones</h1>
          <GrTransaction style={{ fontSize: "50px" }} />
        </PageTitle>
        <Indicator width="30rem">
          <IndicatorHead>
            <IndicatorTitle>Saldo Total</IndicatorTitle>
            <Image
              source={Wallet3dIcon}
              alt={"Bet billions wallet"}
              size={{ lg: 20, md: 10, sm: 20 }}
            />
          </IndicatorHead>
          {isLoadingUserData ? (
            <Loading
              message="Cargando balance disponible..."
              textColor="var(--bg-secondary-color)"
            />
          ) : (
            <IndicatorValue>
              ${userPanelData?.balance}
              <span>USD</span>
            </IndicatorValue>
          )}
        </Indicator>
        {isLoading ? (
          <Loading
            message="Cargando historial de transacciones.."
            textColor="var(--bg-secondary-color)"
          />
        ) : (
          <Table
            headers={tableHeaders}
            columnsNumber={5}
            title="Listado de transacciones"
          >
            {userTransactions?.length === 0 ? (
              <Empty message="No tienes transaciones aún" />
            ) : (
              sortedTransactions?.map((transaction) => (
                <Table.Row key={transaction.id} columnsNumber={5}>
                  <Table.Item
                    value={transaction.id}
                    Icon={FaHashtag}
                    label="Id"
                  />
                  <Table.Item
                    value={`${transaction.balance} USD`}
                    Icon={MdAccountBalanceWallet}
                    label="Balance"
                  />
                  <Table.Item
                    value={
                      transaction.typeHistory === "Earnings"
                        ? "Premios"
                        : transaction.typeHistory === "Shopping"
                        ? "Compras"
                        : "Transacciones"
                    }
                    Icon={MdCategory}
                    label="Tipo"
                  />
                  <Table.Item
                    value={transaction.state ? "Completada" : "Pendiente"}
                    Icon={GrStatusDisabledSmall}
                    label="Estado"
                  />
                  <Table.Item
                    value={formatDate(transaction.createdAt)}
                    Icon={BsFillCalendarDateFill}
                    label="Fecha"
                  />
                </Table.Row>
              ))
            )}
          </Table>
        )}
        <PaginationComponent />
        <Footer />
      </Content>
    </TransactionsContainer>
  );
};

export default Transactions;
