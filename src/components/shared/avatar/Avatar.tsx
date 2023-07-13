import { FaUser } from "react-icons/fa6";
import { BiSolidCloudUpload } from "react-icons/bi";

import { AvatarProps } from "types";
import { useLoading, useUserProfileContext } from "@hooks/index";

import {
  DefaultButton,
  Image,
  InputFile,
  LoadingButton,
} from "@components/index";

import {
  AvatarContainer,
  Caption,
  UploadButtonContainer,
} from "./Avatar.style";

const Avatar = (props: AvatarProps): JSX.Element => {
  const { photo, username } = props;
  const { uploadUserProfilePhoto } = useUserProfileContext();
  const {
    isLoading,
    loadingMessage,
    activeLoading,
    inactiveLoading,
    setMessage,
  } = useLoading();

  return (
    <AvatarContainer>
      <Caption>
        <div>
          {photo === "" ? (
            <FaUser style={{ color: "var(--gray)", fontSize: 30 }} />
          ) : (
            <Image
              source={photo}
              alt={"Foto de perfil"}
              size={{
                lg: 70,
                md: 40,
                sm: 40,
              }}
            />
          )}
        </div>
        <UploadButtonContainer>
          <p>{username}</p>
          {isLoading ? (
            <LoadingButton
              message={loadingMessage}
              style={{
                bg: "var(--light-gray)",
                fontColor: "var(--dark-gray)",
                width: "10rem",
              }}
            />
          ) : (
            <DefaultButton
              style={{
                bg: "var(--white)",
                fontColor: "var(--dark-gray)",
                width: "10rem",
              }}
              title={"Subir foto de perfil"}
            >
              <BiSolidCloudUpload
                style={{ color: "var(--dark-gray)", fontSize: 50 }}
              />
              <InputFile
                name="photo"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  uploadUserProfilePhoto(e, {
                    activeLoading,
                    inactiveLoading,
                    setMessage,
                  })
                }
              />
            </DefaultButton>
          )}
        </UploadButtonContainer>
      </Caption>
    </AvatarContainer>
  );
};

export default Avatar;
