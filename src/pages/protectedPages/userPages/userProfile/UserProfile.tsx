import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { CgProfile } from "react-icons/cg";
import { FaLocationArrow, FaUserAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { GoSponsorTiers } from "react-icons/go";
import { RxUpdate } from "react-icons/rx";

import {
  useLoading,
  useLocationContext,
  useRealTimeFecher,
  useUserProfileContext,
} from "@hooks/index";
import { UserProfileData, UserProfileFormValues } from "types";
import { DEFAULTVALUES, schema } from "./constants";
import { setFormValues } from "@utils/index";

import { UserProfileService } from "@services/userProfile.service";

import {
  CustomForm,
  ErrorMessage,
  Footer,
  InputWithLabel,
  SidebarDefault,
  SelectWithLabel,
  DefaultSubmit,
  LoadingButton,
  Avatar,
} from "@components/index";

import {
  PageTitle,
  UserProfileContainer,
  FormGrid,
  FormRow,
} from "./UserProfile.style";
import { Content } from "@styles/GlobalStyles.style";

const userProfileService = new UserProfileService();
const UserProfile = (): JSX.Element => {
  const { userPhotoUrl, updateUserProfile } = useUserProfileContext();
  const { countries, cities, getCitiesPerCountry } = useLocationContext();
  const { data: userProfile } = useRealTimeFecher(
    "/users/getUser",
    userProfileService.getUserProfile,
    undefined
  );
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<UserProfileFormValues>({
    defaultValues: DEFAULTVALUES,
    resolver: yupResolver(schema),
  });

  const {
    isLoading,
    loadingMessage,
    setMessage,
    activeLoading,
    inactiveLoading,
  } = useLoading();

  useEffect(() => {
    setValue("photo", userPhotoUrl);
  }, [userPhotoUrl]);

  useEffect(() => {
    setFormValues<UserProfileData | null>(
      userProfile ? userProfile : null,
      setValue
    );
  }, [userProfile]);

  useEffect(() => {
    getCitiesPerCountry(userProfile ? userProfile.country : "Colombia");
  }, [userProfile?.country]);

  return (
    <UserProfileContainer>
      <SidebarDefault />
      <Content>
        <PageTitle>
          <h1>Mi perfil de usuario</h1>
          <CgProfile
            style={{ color: "var(--bg-secondary-color)", fontSize: 50 }}
          />
        </PageTitle>
        <Avatar
          photo={userProfile?.photo ? userProfile.photo : ""}
          username={userProfile?.username ? userProfile.username : ""}
        />
        <CustomForm
          formTitle={""}
          config={{
            activeLoading,
            inactiveLoading,
            setMessage,
          }}
          formType="ProfileForm"
          handleSubmit={handleSubmit}
          action={updateUserProfile}
        >
          <FormGrid>
            <FormRow>
              <InputWithLabel
                type="text"
                placeholder="Nombre de usuario"
                label="Nombre de usuario"
                Icon={FaUserAlt}
                register={register}
                name="username"
              />
              {errors.username ? (
                <ErrorMessage message={errors.username.message} />
              ) : null}
            </FormRow>
            <FormRow>
              <InputWithLabel
                type="text"
                placeholder="Nombre completo"
                label="Nombre completo"
                Icon={FaUserAlt}
                register={register}
                name="fullName"
              />
              {errors.fullName ? (
                <ErrorMessage message={errors.fullName.message} />
              ) : null}
            </FormRow>
            <FormRow>
              <InputWithLabel
                type="text"
                placeholder="Correo electronico"
                label="Correo"
                Icon={MdAlternateEmail}
                register={register}
                name="email"
              />
              {errors.email ? (
                <ErrorMessage message={errors.email.message} />
              ) : null}
            </FormRow>
            <FormRow>
              <InputWithLabel
                type="number"
                placeholder="Número de telefono"
                label="Telefono"
                Icon={BsTelephoneFill}
                register={register}
                name="phone"
              />
              {errors.phone ? (
                <ErrorMessage message={errors.phone.message} />
              ) : null}
            </FormRow>

            <Controller
              control={control}
              name="country"
              render={({ field: { onChange, value, name, ref } }) => (
                <FormRow>
                  <SelectWithLabel
                    defaultValue="Selecciona tu país"
                    label="Tu país de residencia"
                    Icon={FaLocationArrow}
                    name={name}
                    value={value}
                    ref={ref}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                      onChange(e);
                      getCitiesPerCountry(e.target.value);
                    }}
                  >
                    {countries.map((option) => (
                      <option key={option.id} value={option.name}>
                        {option.name}
                      </option>
                    ))}
                  </SelectWithLabel>
                  {errors.country ? (
                    <ErrorMessage message={errors.country.message} />
                  ) : null}
                </FormRow>
              )}
            />

            <Controller
              control={control}
              name="city"
              render={({ field: { onChange, value, name, ref } }) => (
                <FormRow>
                  <SelectWithLabel
                    defaultValue="Selecciona tu ciudad | provincia | municipio"
                    label="Tu ciudad | provincia | municipio"
                    Icon={FaLocationDot}
                    name={name}
                    value={value}
                    ref={ref}
                    onChange={onChange}
                  >
                    {cities.map((option) => (
                      <option key={option.id} value={option.name}>
                        {option.name}
                      </option>
                    ))}
                  </SelectWithLabel>
                  {errors.city ? (
                    <ErrorMessage message={errors.city.message} />
                  ) : null}
                </FormRow>
              )}
            />
          </FormGrid>
          <InputWithLabel
            type="text"
            placeholder="Nombre de patrocinador"
            label="Patrocinador"
            Icon={GoSponsorTiers}
            register={register}
            name="sponsorName"
            disabled
          />
          {errors.sponsorName ? (
            <ErrorMessage message={errors.sponsorName.message} />
          ) : null}
          {isLoading ? (
            <LoadingButton
              message={loadingMessage}
              style={{
                bg: "var(--bg-secondary-color)",
                fontColor: "var(--white)",
                width: "30rem",
              }}
            />
          ) : (
            <DefaultSubmit
              style={{
                bg: "var(--bg-secondary-color)",
                fontColor: "var(--white)",
                width: "30rem",
              }}
              title={"Actualizar perfil de usuario"}
              label="Actualizar Perfil"
            >
              <RxUpdate
                style={{ color: "var(--white)", fontSize: 30, marginRight: 8 }}
              />
            </DefaultSubmit>
          )}
          {errors.photo ? (
            <ErrorMessage message={errors.photo.message} />
          ) : null}
        </CustomForm>
        <Footer />
      </Content>
    </UserProfileContainer>
  );
};

export default UserProfile;
