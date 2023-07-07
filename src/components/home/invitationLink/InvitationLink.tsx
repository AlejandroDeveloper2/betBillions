import { useRealTimeFecher } from "@hooks/index";
import { copyToClipBoard } from "@utils/index";
import { InvitationLinkProps } from "types";
import { UserProfileService } from "@services/userProfile.service";

import { DefaultButton, Image } from "@components/index";

import { CopyLinkIcon } from "@assets/index";
import { LinkContainer, LinkContent } from "./InvitationLink.style";

const InvitationLink = (props: InvitationLinkProps): JSX.Element => {
  const { toastConfig } = props;
  const userProfileService = new UserProfileService();
  const { data: userPanelData } = useRealTimeFecher(
    "/users/panel",
    userProfileService.getUserPanelData
  );

  const invitationLink = userPanelData
    ? userPanelData.link
    : "Link de invitación 2";

  return (
    <LinkContainer>
      <h2>¡Comparte de diversión!</h2>
      <LinkContent>
        <span>{invitationLink}</span>
        <DefaultButton
          style={{
            bg: "transparent",
            fontColor: "var(--white)",
            width: "auto",
          }}
          title={"Copiar link de invitación"}
          onClick={() => copyToClipBoard(invitationLink, toastConfig)}
        >
          <Image
            source={CopyLinkIcon}
            alt={"Copy link button"}
            size={{ lg: 100, md: 100, sm: 60 }}
          />
        </DefaultButton>
      </LinkContent>
    </LinkContainer>
  );
};

export default InvitationLink;
