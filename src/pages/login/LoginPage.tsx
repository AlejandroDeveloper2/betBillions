import { useForm } from "react-hook-form";
import { MdOutlinePersonOutline, MdHttps } from "react-icons/md";
import { yupResolver } from "@hookform/resolvers/yup";

import { DEFAULTVALUES, schema } from "./constants";
import { LoginFormValues } from "../../types";

/*Components */
import {
  CustomForm,
  DefaultInput,
  DefaultSubmit,
  ErrorMessage,
} from "../../components";

/*styles*/
import { Links, LinkVariant, FormContainer } from "./LoginPage.style";

const LoginPage = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    defaultValues: DEFAULTVALUES,
    resolver: yupResolver(schema),
  });

  const login = (data: LoginFormValues): void => {
    console.log(data);
  };

  return (
    <FormContainer>
      <CustomForm
        formTitle="bienvenido"
        handleSubmit={handleSubmit}
        action={login}
      >
        <DefaultInput
          type="text"
          placeholder="Nombre de usuario"
          label={null}
          Icon={MdOutlinePersonOutline}
          register={register}
          name="username"
        />
        {errors.username ? (
          <ErrorMessage message={errors.username.message} />
        ) : null}
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
          <LinkVariant to="/">Recordar contraseña</LinkVariant>
          <LinkVariant to="/">¿Olvido contraseña?</LinkVariant>
        </Links>
        <DefaultSubmit
          style={{
            bg: "var(--bg-secondary-color)",
            fontColor: "var(--white)",
          }}
          title="Ingresar"
          label="Iniciar sesión"
        />
        <Links>
          <LinkVariant to="/">¿No tienes una cuenta? Registrarse</LinkVariant>
        </Links>
      </CustomForm>
    </FormContainer>
  );
};

export default LoginPage;
