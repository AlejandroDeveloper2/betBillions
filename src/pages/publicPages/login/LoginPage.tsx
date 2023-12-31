import { useForm } from "react-hook-form";
import { MdOutlinePersonOutline, MdHttps } from "react-icons/md";
import { yupResolver } from "@hookform/resolvers/yup";

import { DEFAULTVALUES, schema } from "./constants";
import { LoginFormValues } from "types";
import { useAuthContext, useLoading } from "@hooks/index";

/*Components */
import {
  CustomForm,
  DefaultInput,
  DefaultSubmit,
  ErrorMessage,
  LoadingButton,
} from "@components/index";

/*styles*/
import { FormContainer, Links, LinkVariant } from "@styles/GlobalStyles.style";

const LoginPage = (): JSX.Element => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    defaultValues: DEFAULTVALUES,
    resolver: yupResolver(schema),
  });

  const {
    isLoading,
    loadingMessage,
    activeLoading,
    inactiveLoading,
    setMessage,
  } = useLoading();

  const { login } = useAuthContext();

  return (
    <FormContainer width={30}>
      <CustomForm
        formTitle="bienvenido"
        config={{
          activeLoading,
          inactiveLoading,
          setMessage,
        }}
        formType="login"
        handleSubmit={handleSubmit}
        action={login}
        reset={reset}
      >
        <DefaultInput
          type="text"
          placeholder="Correo electronico"
          label={null}
          Icon={MdOutlinePersonOutline}
          register={register}
          name="email"
        />
        {errors.email ? <ErrorMessage message={errors.email.message} /> : null}
        <DefaultInput
          type="password"
          placeholder="Contraseña"
          label={null}
          Icon={MdHttps}
          register={register}
          name="password"
        />
        {errors.password ? (
          <ErrorMessage message={errors.password.message} />
        ) : null}
        <Links>
          <LinkVariant to="/recoverPassword">¿Olvido contraseña?</LinkVariant>
        </Links>
        {!isLoading ? (
          <DefaultSubmit
            style={{
              bg: "var(--bg-secondary-color)",
              fontColor: "var(--white)",
            }}
            title="Ingresar"
            label="Iniciar sesión"
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
          <LinkVariant to="/createAccount/newAccount">
            ¿No tienes una cuenta? Registrarse
          </LinkVariant>
        </Links>
      </CustomForm>
    </FormContainer>
  );
};

export default LoginPage;
