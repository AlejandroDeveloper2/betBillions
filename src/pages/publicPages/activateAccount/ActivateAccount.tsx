import { DefaultButton, LoadingButton, Toast } from "../../../components";
import { useAuthContext, useLoading, useToast } from "../../../hooks";

import { FormContainer } from "../../../styles/GlobalStyles.style";
import { FormLayout, PageTitle } from "./ActivateAccount.style";

const ActivateAccount = (): JSX.Element => {
  const { activateUserAccount } = useAuthContext();

  const {
    isToastVisible,
    toast,
    showToast,
    hideToast,
    getToastColor,
    configToast,
  } = useToast();

  const {
    isLoading,
    loadingMessage,
    activeLoading,
    inactiveLoading,
    setMessage,
  } = useLoading();

  return (
    <>
      <FormContainer width={35}>
        <FormLayout>
          <PageTitle>Verificación de cuenta</PageTitle>
          {isLoading ? (
            <LoadingButton
              message={loadingMessage}
              style={{
                bg: "var(--bg-secondary-color)",
                fontColor: "var(--white)",
              }}
            />
          ) : (
            <DefaultButton
              style={{
                bg: "var(--bg-secondary-color)",
                fontColor: "var(--white)",
              }}
              title={"Activa tu cuenta"}
              label="Verificar cuenta"
              onClick={() =>
                activateUserAccount({
                  toastConfig: {
                    showToast,
                    hideToast,
                    configToast,
                  },
                  loadingConfig: {
                    activeLoading,
                    inactiveLoading,
                    setMessage,
                  },
                })
              }
            />
          )}
        </FormLayout>
      </FormContainer>
      <Toast
        message={toast.toastMessage}
        type={toast.toastType}
        toastConfig={{
          isToastVisible,
          getToastColor,
          hideToast,
        }}
      />
    </>
  );
};

export default ActivateAccount;
