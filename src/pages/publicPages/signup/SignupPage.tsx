import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  MdOutlinePersonOutline,
  MdHttps,
  MdAlternateEmail,
} from "react-icons/md";
import { AiOutlineLink } from "react-icons/ai";
import { HiIdentification } from "react-icons/hi";
import { useLocation } from "react-router-dom";

import { useLoading, useAuthContext, useCheckbox } from "@hooks/index";
import { RegisterFormValues } from "types";
import { getDefaultValues, schema } from "./constants";

import {
  Checkbox,
  CustomForm,
  DefaultInput,
  DefaultSubmit,
  ErrorMessage,
  LoadingButton,
} from "@components/index";

import { FormContainer, Links, LinkVariant } from "@styles/GlobalStyles.style";
import { FormGrid, FormRow } from "./SignupPage.style";

const SignupPage = (): JSX.Element => {
  const location = useLocation();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    defaultValues: getDefaultValues(location),
    resolver: yupResolver(schema),
  });

  const {
    isLoading,
    loadingMessage,
    activeLoading,
    inactiveLoading,
    setMessage,
  } = useLoading();

  const { createUserAccount } = useAuthContext();
  const { isChecked, onChange } = useCheckbox();
  const { isChecked: isCheckedBox, onChange: onChangeBox } = useCheckbox();

  return (
    <FormContainer width={50}>
      <CustomForm
        formTitle="Crear cuenta"
        config={{
          activeLoading,
          inactiveLoading,
          setMessage,
        }}
        formType="register"
        handleSubmit={handleSubmit}
        action={createUserAccount}
        reset={reset}
      >
        <FormGrid>
          <FormRow>
            <DefaultInput
              type="text"
              placeholder="Nombre completo"
              label={null}
              Icon={HiIdentification}
              register={register}
              name="fullName"
            />
            {errors.fullName ? (
              <ErrorMessage message={errors.fullName.message} />
            ) : null}
          </FormRow>
          <FormRow>
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
          </FormRow>
          <FormRow>
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
          </FormRow>
          <FormRow>
            <DefaultInput
              type="password"
              placeholder="Confirmar contraseña"
              label={null}
              Icon={MdHttps}
              register={register}
              name="confirmPassword"
            />
            {errors.confirmPassword ? (
              <ErrorMessage message={errors.confirmPassword.message} />
            ) : null}
          </FormRow>
          <FormRow>
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
          </FormRow>
          <FormRow>
            <DefaultInput
              type="text"
              placeholder="Confirmar Correo electronico"
              label={null}
              Icon={MdAlternateEmail}
              register={register}
              name="confirmEmail"
            />
            {errors.confirmEmail ? (
              <ErrorMessage message={errors.confirmEmail.message} />
            ) : null}
          </FormRow>
        </FormGrid>
        <DefaultInput
          type="text"
          placeholder="Link de invitación"
          label={null}
          Icon={AiOutlineLink}
          register={register}
          name="invitationLink"
          disabled={true}
        />
        <Checkbox
          isChecked={isCheckedBox}
          onChange={onChangeBox}
          label="Confirmo que soy mayor de 18 años"
        />
        <Checkbox
          isChecked={isChecked}
          onChange={onChange}
          label="Acepto todos los terminos y condiciones"
        />
        {!isLoading ? (
          <DefaultSubmit
            style={{
              bg: "var(--bg-secondary-color)",
              fontColor: "var(--white)",
            }}
            title="Crear cuenta nueva"
            label="Crear cuenta"
            disabled={!isChecked || !isCheckedBox}
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
          <LinkVariant to="/">
            ¿Ya tienes una cuenta? Iniciar sesión
          </LinkVariant>
        </Links>
      </CustomForm>
    </FormContainer>
  );
};

export default SignupPage;
