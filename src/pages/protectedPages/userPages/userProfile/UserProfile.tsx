import { CgProfile } from "react-icons/cg";

import { Footer, SidebarDefault } from "@components/index";

import { PageTitle, UserProfileContainer } from "./UserProfile.style";

const UserProfile = (): JSX.Element => {
  return (
    <UserProfileContainer>
      <SidebarDefault />
      <PageTitle>
        <h1>Mi perfil de usuario</h1>
        <CgProfile
          style={{ color: "var(--bg-secondary-color)", fontSize: 50 }}
        />
      </PageTitle>

      <Footer />
    </UserProfileContainer>
  );
};

export default UserProfile;
