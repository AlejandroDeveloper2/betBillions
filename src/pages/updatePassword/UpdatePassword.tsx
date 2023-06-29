import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { MdHttps } from "react-icons/md";

import { UpdatePassFormValues } from "../../types";
import { DEFAULTVALUES, schema } from "./constants";
import { useAuthContext, useLoading, useToast } from "../../hooks";

import {
  CustomForm,
  DefaultInput,
  DefaultSubmit,
  ErrorMessage,
  LoadingButton,
  Toast,
} from "../../components";

import {
  FormContainer,
  LinkVariant,
  Links,
} from "../../styles/GlobalStyles.style";

const UpdatePassword = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdatePassFormValues>({
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

  const { changeUserPassword } = useAuthContext();

  return (
    <>
      <FormContainer width={30}>
        <CustomForm
          formTitle="Actualizar contraseña"
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
          formType="updatePass"
          handleSubmit={handleSubmit}
          action={changeUserPassword}
        >
          <DefaultInput
            type="password"
            placeholder="Nueva contraseña"
            label={null}
            Icon={MdHttps}
            register={register}
            name="password"
          />
          {errors.password ? (
            <ErrorMessage message={errors.password.message} />
          ) : null}
          <DefaultInput
            type="password"
            placeholder="Confirma tu contraseña"
            label={null}
            Icon={MdHttps}
            register={register}
            name="confirmPassword"
          />
          {errors.confirmPassword ? (
            <ErrorMessage message={errors.confirmPassword.message} />
          ) : null}
          {!isLoading ? (
            <DefaultSubmit
              style={{
                bg: "var(--bg-secondary-color)",
                fontColor: "var(--white)",
              }}
              title="Cambiar contraseña"
              label="Actualizar contraseña"
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

export default UpdatePassword;
