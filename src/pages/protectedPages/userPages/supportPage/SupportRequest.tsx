import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { BsClockHistory } from "react-icons/bs";
import { BiArrowBack, BiSolidCategory } from "react-icons/bi";
import { AiFillMessage, AiOutlinePaperClip } from "react-icons/ai";
import { MdSend } from "react-icons/md";

import { SupportFormValues } from "types";
import { useSupportContext, useLoading } from "@hooks/index";
import { DEFAULTVALUES, categories, schema } from "./constants";

import {
  CustomForm,
  DefaultButton,
  DefaultSubmit,
  ErrorMessage,
  Footer,
  InputFile,
  LoadingButton,
  SelectWithLabel,
  SidebarDefault,
  TextareaInput,
} from "@components/index";

import {
  OptionsContainer,
  PageTitle,
  SupportContainer,
} from "./SupportPage.style";
import { Content, FormContainer } from "@styles/GlobalStyles.style";

const SupportPage = (): JSX.Element => {
  const navigate = useNavigate();
  const {
    register,
    control,
    reset,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SupportFormValues>({
    defaultValues: DEFAULTVALUES,
    resolver: yupResolver(schema),
  });
  const { supportImage, sendUserSupportRequest, uploadSupportImage } =
    useSupportContext();
  const {
    isLoading,
    loadingMessage,
    activeLoading,
    inactiveLoading,
    setMessage,
  } = useLoading();
  const {
    isLoading: isLoadingImage,
    loadingMessage: loadingMessageImage,
    activeLoading: activeLoadingImage,
    inactiveLoading: inactiveLoadingImage,
    setMessage: setMessageImage,
  } = useLoading();

  useEffect(() => {
    setValue("urlPhoto", supportImage);
  }, [supportImage]);

  return (
    <SupportContainer>
      <SidebarDefault />
      <Content>
        <PageTitle>
          <div>
            <h1>Enviar solicitud de soporte</h1>
            <BsClockHistory
              style={{ color: "var(--bg-secondary-color)", fontSize: 40 }}
            />
          </div>
          <DefaultButton
            style={{
              bg: "var(--bg-secondary-color)",
              fontColor: "var(--white)",
              width: "20rem",
            }}
            title={"Volver al historial"}
            label="Volver"
            onClick={() => navigate("/userPanel/support")}
          >
            <BiArrowBack
              style={{ color: "var(--white)", fontSize: 30, marginRight: 10 }}
            />
          </DefaultButton>
        </PageTitle>
        <FormContainer width={40} style={{ margin: "0 auto" }}>
          <CustomForm
            formTitle=""
            config={{
              activeLoading,
              inactiveLoading,
              setMessage,
            }}
            formType="SupportRequestForm"
            handleSubmit={handleSubmit}
            action={sendUserSupportRequest}
            reset={reset}
          >
            <Controller
              control={control}
              name="category"
              render={({ field: { onChange, value, name, ref } }) => (
                <>
                  <SelectWithLabel
                    defaultValue="Selecciona la categoria"
                    label="Categoria"
                    Icon={BiSolidCategory}
                    name={name}
                    value={value}
                    ref={ref}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                      onChange(e);
                    }}
                  >
                    {categories.map((category, i) => (
                      <option key={i} value={category}>
                        {category}
                      </option>
                    ))}
                  </SelectWithLabel>
                  {errors.category ? (
                    <ErrorMessage message={errors.category.message} />
                  ) : null}
                </>
              )}
            />
            <TextareaInput
              type={"text"}
              placeholder={"Tu mensaje aqui maximo 500 caracteres"}
              label={"Mensaje"}
              Icon={AiFillMessage}
              register={register}
              name="question"
            />
            {errors.question ? (
              <ErrorMessage message={errors.question.message} />
            ) : null}
            <OptionsContainer>
              {isLoading ? (
                <LoadingButton
                  message={loadingMessage}
                  style={{
                    bg: "var(--black)",
                    fontColor: "var(--white)",
                  }}
                />
              ) : (
                <DefaultSubmit
                  style={{
                    bg: "var(--black)",
                    fontColor: "var(--white)",
                  }}
                  title={"Enviar solicitud"}
                  label="Enviar"
                >
                  <MdSend
                    style={{
                      color: "var(--white)",
                      fontSize: 30,
                      marginRight: 10,
                    }}
                  />
                </DefaultSubmit>
              )}
              {isLoadingImage ? (
                <LoadingButton
                  message={loadingMessageImage}
                  style={{
                    bg: "var(--gray)",
                    fontColor: "var(--dark-gray)",
                    width: "10rem",
                  }}
                />
              ) : (
                <DefaultButton
                  style={{
                    bg: "var(--gray)",
                    fontColor: "var(--dark-gray)",
                    width: "10rem",
                  }}
                  title={"Adjuntar imagen"}
                >
                  <AiOutlinePaperClip
                    style={{
                      color: "var(--dark-gray)",
                      fontSize: 30,
                    }}
                  />
                  <InputFile
                    name="urlPhoto"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      uploadSupportImage(e, {
                        activeLoading: activeLoadingImage,
                        inactiveLoading: inactiveLoadingImage,
                        setMessage: setMessageImage,
                      })
                    }
                  />
                </DefaultButton>
              )}
            </OptionsContainer>
          </CustomForm>
        </FormContainer>
        <Footer />
      </Content>
    </SupportContainer>
  );
};

export default SupportPage;
