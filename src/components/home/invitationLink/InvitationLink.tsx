import { useUserProfileContext } from "../../../hooks";
import { copyToClipBoard } from "../../../utils";
import { InvitationLinkProps } from "../../../types";

import { DefaultButton, Image } from "../..";

import { CopyLinkIcon } from "../../../assets";
import { LinkContainer, LinkContent } from "./InvitationLink.style";

const InvitationLink = (props: InvitationLinkProps): JSX.Element => {
  const { toastConfig } = props;
  const { userPanelData } = useUserProfileContext();

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
