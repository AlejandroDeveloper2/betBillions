import { DefaultButton, LoadingButton } from "@components/index";
import { useAuthContext, useLoading } from "@hooks/index";

import { FormContainer } from "@styles/GlobalStyles.style";
import { FormLayout, PageTitle } from "./ActivateAccount.style";

const ActivateAccount = (): JSX.Element => {
  const { activateUserAccount } = useAuthContext();
  const {
    isLoading,
    loadingMessage,
    activeLoading,
    inactiveLoading,
    setMessage,
  } = useLoading();

  return (
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
                activeLoading,
                inactiveLoading,
                setMessage,
              })
            }
          />
        )}
      </FormLayout>
    </FormContainer>
  );
};

export default ActivateAccount;
