import * as yup from "yup";

import { WalletDepositFormValues, WalletWithdrawFormValues } from "types";

const getTransactionWalletValues = (
  urlTransaction: string
): WalletDepositFormValues => ({
  walletType: "Trendo",
  transaction: "",
  urlTransaction,
});

const getWalletInfo = (wallet: string): WalletWithdrawFormValues => ({
  wallet,
});

const schema = yup
  .object()
  .shape({
    walletType: yup.string(),
    transaction: yup
      .string()
      .required("El hash de transacción es obligatorio!"),
    urlTransaction: yup
      .string()
      .required("Adjunta el comprobante de deposito!"),
  })
  .required();

const schema2 = yup
  .object()
  .shape({
    wallet: yup
      .string()
      .required("La dirección de la billetera es obligatoria!"),
  })
  .required();

export { getTransactionWalletValues, getWalletInfo, schema, schema2 };
