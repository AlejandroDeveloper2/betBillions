import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { MdAlternateEmail } from "react-icons/md";

import { useToast, useLoading, useAuthContext } from "../../../hooks";
import { RecoverPassFormValues } from "../../../types";
import { DEFAULTVALUES, schema } from "./constants";

import {
  CustomForm,
  DefaultInput,
  DefaultSubmit,
  ErrorMessage,
  LoadingButton,
  Toast,
} from "../../../components";

import {
  FormContainer,
  LinkVariant,
  Links,
} from "../../../styles/GlobalStyles.style";

const RecoverPassword = (): JSX.Element => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<RecoverPassFormValues>({
    defaultValues: DEFAULTVALUES,
    resolver: yupResolver(schema),
  });

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

  const { recoverPassword } = useAuthContext();

  return (
    <>
      <FormContainer width={30}>
        <CustomForm
          formTitle="recuperar contraseña"
          config={{
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
          }}
          formType="recoverPass"
          handleSubmit={handleSubmit}
          action={recoverPassword}
          reset={reset}
        >
          <DefaultInput
            type="text"
            placeholder="Correo electronico"
            label={null}
            Icon={MdAlternateEmail}
            register={register}
            name="email"
          />
          {errors.email ? (
            <ErrorMessage message={errors.email.message} />
          ) : null}
          {!isLoading ? (
            <DefaultSubmit
              style={{
                bg: "var(--bg-secondary-color)",
                fontColor: "var(--white)",
              }}
              title="Enviar solicitud"
              label="Recuperar contraseña"
            />
          ) : (
            <LoadingButton
              message={loadingMessage}
              style={{
                bg: "var(--bg-secondary-color)",
                fontColor: "var(--white)",
              }}
            />
          )}
          <Links>
            <LinkVariant to="/">Regresar al inicio de sesión</LinkVariant>
          </Links>
        </CustomForm>
      </FormContainer>
      <Toast
        message={toast.toastMessage}
        type={toast.toastType}
        toastConfig={{ isToastVisible, getToastColor, hideToast }}
      />
    </>
  );
};

export default RecoverPassword;
