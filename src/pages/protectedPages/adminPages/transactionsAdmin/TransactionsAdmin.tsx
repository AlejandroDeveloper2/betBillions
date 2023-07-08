import { GrTransaction } from "react-icons/gr";
import { BsCurrencyExchange, BsFillCalendarDateFill } from "react-icons/bs";
import { FaBarcode, FaUserAlt } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { GrStatusDisabledSmall } from "react-icons/gr";
import { MdAlternateEmail } from "react-icons/md";
import { RiPriceTag3Fill } from "react-icons/ri";
import { AiFillEye, AiOutlineCheck } from "react-icons/ai";
import { HiXMark } from "react-icons/hi2";

import { useRealTimeFecher } from "@hooks/index";
import { TransactionsService } from "@services/transactions.service";
import { tableHeaders } from "./constants";
import { formatDate } from "@utils/index";

import { DefaultButton, Footer, Loading, Table } from "@components/index";

import { PageTitle, TransactionsContainer } from "./TransactionsAdmin.style";

const TransactionsAdmin = (): JSX.Element => {
  const transactionsService = new TransactionsService();
  const { data: transactions, isLoading } = useRealTimeFecher(
    "/transaction/list",
    transactionsService.getAdminTransactions
  );

  return (
    <TransactionsContainer>
      <PageTitle>
        <h1>Transaciones de usuario</h1>
        <GrTransaction
          style={{ fontSize: 50, color: "var(--bg-secondary-color)" }}
        />
      </PageTitle>
      {isLoading ? (
        <Loading
          message="Cargando transaciones de usuario..."
          textColor="var(--bg-secondary-color)"
        />
      ) : (
        <Table
          headers={tableHeaders}
          columnsNumber={9}
          title="Listado de transacciones"
        >
          {transactions?.map((transaction) => (
            <Table.Row key={transaction.id} columnsNumber={9}>
              <Table.Item
                value={transaction.walletType}
                Icon={GiWallet}
                label="Billetera"
              />
              <Table.Item
                value={transaction.transaction}
                Icon={FaBarcode}
                label="Hash"
              />
              <Table.Item
                value={transaction.price ? transaction.price : 0}
                Icon={RiPriceTag3Fill}
                label="Precio"
              />
              <Table.Item
                value={transaction.currency}
                Icon={BsCurrencyExchange}
                label="Moneda"
              />
              <Table.Item
                value={
                  transaction.stateTransaction === "Completed"
                    ? "Completada"
                    : transaction.stateTransaction === "Pending"
                    ? "Pendiente"
                    : "Invalidada"
                }
                Icon={GrStatusDisabledSmall}
                label="Estado"
              />
              <Table.Item
                value={formatDate(transaction.createdAt, "numeric")}
                Icon={BsFillCalendarDateFill}
                label="Registro"
              />
              <Table.Item
                value={transaction.username}
                Icon={FaUserAlt}
                label="Usuario"
              />
              <Table.Item
                value={transaction.email}
                Icon={MdAlternateEmail}
                label="Correo"
              />
              <Table.Options>
                <DefaultButton
                  style={{
                    bg: "var(--blue)",
                    fontColor: "var(--white)",
                    width: "auto",
                    padding: "0.3rem 0.2rem",
                  }}
                  title={"Ver mas detalles"}
                >
                  <AiFillEye style={{ color: "var(--white)", fontSize: 20 }} />
                </DefaultButton>
                <DefaultButton
                  style={{
                    bg: "var(--success)",
                    fontColor: "var(--white)",
                    width: "auto",
                    padding: "0.3rem 0.2rem",
                  }}
                  title={"Validar transacción"}
                >
                  <AiOutlineCheck
                    style={{ color: "var(--white)", fontSize: 20 }}
                  />
                </DefaultButton>
                <DefaultButton
                  style={{
                    bg: "var(--error)",
                    fontColor: "var(--white)",
                    width: "auto",
                    padding: "0.3rem 0.2rem",
                  }}
                  title={"Invalidar transacción"}
                >
                  <HiXMark style={{ color: "var(--white)", fontSize: 20 }} />
                </DefaultButton>
              </Table.Options>
            </Table.Row>
          ))}
        </Table>
      )}
      <Footer />
    </TransactionsContainer>
  );
};

export default TransactionsAdmin;
