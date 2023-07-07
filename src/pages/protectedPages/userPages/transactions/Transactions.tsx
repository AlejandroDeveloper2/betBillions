import { GrTransaction } from "react-icons/gr";

import { useRealTimeFecher, useUserProfileContext } from "@hooks/index";
import { tableHeaders } from "./contants";
import { TransactionsService } from "@services/transactions.service";
import { formatDate } from "@utils/index";

import {
  Indicator,
  SidebarDefault,
  Image,
  Table,
  Loading,
} from "@components/index";

import { TransactionsContainer, PageTitle } from "./Transactions.style";
import {
  IndicatorHead,
  IndicatorTitle,
  IndicatorValue,
} from "@styles/GlobalStyles.style";

import { Wallet3dIcon } from "@assets/index";
import { UserTransaction } from "types";

const Transactions = (): JSX.Element => {
  const transactionsService = new TransactionsService();
  const { userPanelData } = useUserProfileContext();
  const { data: userTransactions, isLoading } = useRealTimeFecher<
    UserTransaction[]
  >("/transaction/list", transactionsService.getUserTransactions);

  return (
    <TransactionsContainer>
      <SidebarDefault />
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
        <IndicatorValue>
          ${userPanelData?.balance}
          <span>USD</span>
        </IndicatorValue>
      </Indicator>
      <Table headers={tableHeaders} columnsNumber={5}>
        {isLoading ? (
          <Loading
            message="Cargando historial de transacciones.."
            textColor="var(--bg-secondary-color)"
          />
        ) : (
          userTransactions?.map((transaction) => (
            <>
              <Table.Item value={transaction.id} />
              <Table.Item value={transaction.balance} />
              <Table.Item value={transaction.typeHistory} />
              <Table.Item
                value={transaction.state ? "Respondida" : "Pendiente"}
              />
              <Table.Item value={formatDate(transaction.createdAt)} />
            </>
          ))
        )}
      </Table>
    </TransactionsContainer>
  );
};

export default Transactions;
