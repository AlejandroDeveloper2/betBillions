import { GrTransaction } from "react-icons/gr";

import { useUserProfileContext } from "../../../../hooks";
import { tableHeaders } from "./contants";

import {
  Indicator,
  SidebarDefault,
  Image,
  Table,
} from "../../../../components";

import { TransactionsContainer, PageTitle } from "./Transactions.style";
import {
  IndicatorHead,
  IndicatorTitle,
  IndicatorValue,
} from "../../../../styles/GlobalStyles.style";

import { Wallet3dIcon } from "../../../../assets";

const Transactions = (): JSX.Element => {
  const { userPanelData } = useUserProfileContext();

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
        <div>Tabla</div>
      </Table>
    </TransactionsContainer>
  );
};

export default Transactions;
