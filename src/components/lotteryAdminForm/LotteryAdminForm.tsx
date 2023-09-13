import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { GrStatusCriticalSmall } from "react-icons/gr";
import { AiOutlineAppstoreAdd, AiOutlineNumber } from "react-icons/ai";
import { BsCalendar2DateFill } from "react-icons/bs";
import { ImPriceTag } from "react-icons/im";

import { useGenerateFields, useLoading, useLotteryContext } from "@hooks/index";
import { LotteryFormValues } from "types";
import { DEFAULTVALUES, lotteryStates, schema } from "./constants";

import {
  CustomForm,
  ErrorMessage,
  SelectWithLabel,
  DefaultSubmit,
  LoadingButton,
  InputWithLabel,
  NormalInput,
  NormalSelect,
} from "@components/index";

import { FormGrid, FormRow } from "@pages/publicPages/signup/SignupPage.style";

const LotteryAdminForm = (): JSX.Element => {
  const {
    register,
    control,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<LotteryFormValues>({
    defaultValues: DEFAULTVALUES,
    resolver: yupResolver(schema),
  });

  const { createLottery } = useLotteryContext();
  const { roundsData, handleChange, generateDynamicFields } =
    useGenerateFields();

  const {
    isLoading,
    loadingMessage,
    activeLoading,
    inactiveLoading,
    setMessage,
  } = useLoading();

  useEffect(() => {
    setValue("rounds", roundsData);
  }, [roundsData]);

  useEffect(() => {
    generateDynamicFields(watch("numberOfRounds"));
  }, [watch("numberOfRounds")]);

  return (
    <CustomForm
      formTitle={""}
      config={{ activeLoading, inactiveLoading, setMessage }}
      formType="LotteryForm"
      action={createLottery}
      handleSubmit={handleSubmit}
      reset={reset}
    >
      <FormGrid>
        <FormRow>
          <InputWithLabel
            type="datetime-local"
            placeholder="Fecha del sorteo"
            label="Fecha de inicio"
            Icon={BsCalendar2DateFill}
            register={register}
            name="startDate"
          />
          {errors.startDate ? (
            <ErrorMessage message={errors.startDate.message} />
          ) : null}
        </FormRow>
        <FormRow>
          <InputWithLabel
            type="number"
            placeholder="Número de rondas"
            label="Número de rondas"
            Icon={AiOutlineNumber}
            register={register}
            name="numberOfRounds"
          />
          {errors.numberOfRounds ? (
            <ErrorMessage message={errors.numberOfRounds.message} />
          ) : null}
        </FormRow>
        <Controller
          control={control}
          name="state"
          render={({ field: { onChange, value, name } }) => (
            <FormRow>
              <SelectWithLabel
                defaultValue="..Selecciona.."
                label="Estado del sorteo"
                Icon={GrStatusCriticalSmall}
                name={name}
                value={value}
                onChange={onChange}
              >
                {lotteryStates.map((option) => (
                  <option key={option.label} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </SelectWithLabel>
              {errors.state ? (
                <ErrorMessage message={errors.state.message} />
              ) : null}
            </FormRow>
          )}
        />
        <FormRow>
          <InputWithLabel
            type="number"
            placeholder="Precio del cartón del bingo"
            label="Precio del cartón"
            Icon={ImPriceTag}
            register={register}
            name="price"
          />
          {errors.price ? (
            <ErrorMessage message={errors.price.message} />
          ) : null}
        </FormRow>
      </FormGrid>
      {roundsData.map((round, i) => (
        <FormRow key={i}>
          <NormalSelect
            id="typeGame"
            name={`typeGame-${i}`}
            value={round.typeGame}
            onChange={(e) => handleChange(e, i, "typeGame")}
            label="Tipo de juego"
            defaultValue="..Selecciona un tipo de juego.."
          >
            {["X", "L"].map((option, i) => (
              <option key={i} value={option}>
                {option}
              </option>
            ))}
          </NormalSelect>
          {errors.rounds ? (
            errors.rounds[i]?.typeGame ? (
              <ErrorMessage message={errors.rounds[i]?.typeGame?.message} />
            ) : null
          ) : null}
          <NormalInput
            type="number"
            id="award"
            name={`award-${i}`}
            value={round.award}
            onChange={(e) => handleChange(e, i, "award")}
            placeholder="Premio"
          />
          {errors.rounds ? (
            errors.rounds[i]?.award ? (
              <ErrorMessage message={errors.rounds[i]?.award?.message} />
            ) : null
          ) : null}
        </FormRow>
      ))}
      {isLoading ? (
        <LoadingButton
          message={loadingMessage}
          style={{
            bg: "var(--bg-secondary-color)",
            fontColor: "var(--white)",
            width: "20rem",
          }}
        />
      ) : (
        <DefaultSubmit
          style={{
            bg: "var(--bg-secondary-color)",
            fontColor: "var(--white)",
            width: "20rem",
          }}
          title="Lanzar sorteo"
          label="Crear sorteo"
        >
          <AiOutlineAppstoreAdd
            style={{ color: "var(--white)", fontSize: 30, marginRight: 20 }}
          />
        </DefaultSubmit>
      )}
    </CustomForm>
  );
};

export default LotteryAdminForm;
