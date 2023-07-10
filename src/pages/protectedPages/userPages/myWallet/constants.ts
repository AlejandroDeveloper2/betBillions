import * as yup from "yup";

import { WalletDepositFormValues, WalletWithdrawFormValues } from "types";

const getTransactionWalletValues = (): WalletDepositFormValues => ({
  walletType: "TRC20",
  transaction: "",
  urlTransaction: "",
});

const getWalletInfo = (): WalletWithdrawFormValues => ({
  wallet: "",
});

const transactionHashRules = /^[a-fA-F0-9]{64}$/;

const schema = yup
  .object()
  .shape({
    walletType: yup.string(),
    transaction: yup
      .string()
      .required("El hash de transacción es obligatorio!")
      .matches(transactionHashRules, {
        message: "El hash de transacción ingresado no es valido!",
      }),
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
