import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { MdQuestionAnswer } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import { BiSolidCategory } from "react-icons/bi";
import { AiFillMessage } from "react-icons/ai";

import { AnswerRequestModalProps, SupportAnswerFormValues } from "types";
import { useLoading, useSupportContext } from "@hooks/index";
import { DEFAULTVALUES, schema } from "./constants";

import {
  CustomForm,
  DefaultSubmit,
  ErrorMessage,
  LoadingButton,
  Modal,
  TextareaInput,
} from "@components/index";

import { DialogMessage } from "@styles/GlobalStyles.style";
import { InfoBar } from "./AnswerRequestModal.style";

const AnswerRequestModal = (props: AnswerRequestModalProps): JSX.Element => {
  const { hideModal, requestData, isModalVisible } = props;
  const {
    register,
    reset,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SupportAnswerFormValues>({
    defaultValues: DEFAULTVALUES,
    resolver: yupResolver(schema),
  });
  const { answerSupportUserRequest } = useSupportContext();

  const {
    isLoading,
    loadingMessage,
    activeLoading,
    inactiveLoading,
    setMessage,
  } = useLoading();

  useEffect(() => {
    setValue("id", requestData ? requestData.id : 0);
  }, [requestData]);

  return (
    <Modal isModalVisible={isModalVisible}>
      <Modal.Head
        title="Responder solicitud de soporte"
        hideModal={hideModal}
      />
      <Modal.Body>
        <DialogMessage>Información de la solicitud</DialogMessage>
        <InfoBar>
          <span>
            <BiSolidCategory />
            Categoria
          </span>
          <p>{requestData?.category}</p>
        </InfoBar>
        <InfoBar>
          <span>
            <AiFillMessage />
            Mensaje
          </span>
          <p>{requestData?.question}</p>
        </InfoBar>
        <CustomForm
          formTitle=""
          config={{
            activeLoading,
            inactiveLoading,
            setMessage,
          }}
          formType="SupportRequestForm"
          handleSubmit={handleSubmit}
          action={answerSupportUserRequest}
          reset={reset}
        >
          <DialogMessage>Responder solicitud</DialogMessage>
          <TextareaInput
            register={register}
            type={"text"}
            placeholder={"Escribe la respuesta aqui maximo 500 caracteres"}
            label={null}
            Icon={MdQuestionAnswer}
            name={"answer"}
          />
          {errors.answer ? (
            <ErrorMessage message={errors.answer.message} />
          ) : null}
          {isLoading ? (
            <LoadingButton
              message={loadingMessage}
              style={{
                bg: "var(--back)",
                fontColor: "var(--white)",
                width: "100%",
              }}
            />
          ) : (
            <DefaultSubmit
              style={{
                bg: "var(--black)",
                fontColor: "var(--white)",
              }}
              title={"Enviar respuesta"}
              label="Enviar"
            >
              <IoSend
                style={{ color: "var(--white)", fontSize: 30, marginRight: 10 }}
              />
            </DefaultSubmit>
          )}
        </CustomForm>
      </Modal.Body>
    </Modal>
  );
};

export default AnswerRequestModal;
