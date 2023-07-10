import { BiSolidUser } from "react-icons/bi";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { FaHashtag, FaLevelUpAlt } from "react-icons/fa";
import { PiIdentificationBadgeFill } from "react-icons/pi";

import { useRealTimeFecher } from "@hooks/index";
import { UserProfileService } from "@services/userProfile.service";
import { tableHeaders } from "./constants";
import { formatDate } from "@utils/index";

import {
  Image,
  Footer,
  Loading,
  Table,
  SidebarDefault,
  Empty,
} from "@components/index";

import { PageTitle, TeamPageContainer } from "./TeamPage.style";
import { Team3dIcon } from "@assets/index";

const TeamPage = (): JSX.Element => {
  const userProfileService = new UserProfileService();
  const { data: userTeam, isLoading } = useRealTimeFecher(
    "/users/referrals/team",
    userProfileService.getUserTeam
  );

  return (
    <TeamPageContainer>
      <SidebarDefault />
      <PageTitle>
        <h1>Mi Equipo</h1>
        <Image
          source={Team3dIcon}
          alt="Bet billion equipo"
          size={{ lg: 20, md: 20, sm: 20 }}
        />
      </PageTitle>
      {isLoading ? (
        <Loading
          message="Cargando tu red de referidos..."
          textColor="var(--bg-secondary-color)"
        />
      ) : (
        <Table
          headers={tableHeaders}
          columnsNumber={5}
          title="Mi red de referidos"
        >
          {userTeam?.length === 0 ? (
            <Empty message="¡No tienes referidos aún!" />
          ) : (
            userTeam?.map((referral) => (
              <Table.Row key={referral.id} columnsNumber={5}>
                <Table.Item value={referral.id} Icon={FaHashtag} label="Id" />
                <Table.Item
                  value={referral.userName}
                  Icon={BiSolidUser}
                  label="Usuario"
                />
                <Table.Item
                  value={referral.fullName}
                  Icon={PiIdentificationBadgeFill}
                  label="Nombre"
                />
                <Table.Item
                  value={formatDate(referral.dateRegistered)}
                  Icon={BsFillCalendarDateFill}
                  label="Registro"
                />
                <Table.Item
                  value={referral.level}
                  Icon={FaLevelUpAlt}
                  label="Nivel"
                />
              </Table.Row>
            ))
          )}
        </Table>
      )}
      <Footer />
    </TeamPageContainer>
  );
};

export default TeamPage;
