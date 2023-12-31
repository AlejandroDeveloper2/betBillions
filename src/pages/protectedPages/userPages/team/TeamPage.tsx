import { BiSolidUser } from "react-icons/bi";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { FaHashtag, FaLevelUpAlt } from "react-icons/fa";

import { useListPagination, useRealTimeFecher } from "@hooks/index";
import { UserProfileService } from "@services/userProfile.service";
import { tableHeaders } from "./constants";
import { formatDate, sortListPerDate } from "@utils/index";

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
import { Content } from "@styles/GlobalStyles.style";

const TeamPage = (): JSX.Element => {
  const userProfileService = new UserProfileService();
  const { data: userTeam, isLoading } = useRealTimeFecher(
    "/users/referrals/team",
    userProfileService.getUserTeam
  );

  const sortedTeam = sortListPerDate(userTeam, "dateRegistered");

  const { records, PaginationComponent } = useListPagination(
    sortedTeam ? sortedTeam : []
  );

  return (
    <TeamPageContainer>
      <SidebarDefault />
      <Content>
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
            columnsNumber={4}
            title="Mi red de referidos"
          >
            {records.length === 0 ? (
              <Empty message="¡No tienes referidos aún!" />
            ) : (
              records?.map((referral) => (
                <Table.Row key={referral.id} columnsNumber={4}>
                  <Table.Item value={referral.id} Icon={FaHashtag} label="Id" />
                  <Table.Item
                    value={referral.userName}
                    Icon={BiSolidUser}
                    label="Usuario"
                  />
                  <Table.Item
                    value={formatDate(referral.dateRegistered, "numeric")}
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
        <PaginationComponent />
        <Footer />
      </Content>
    </TeamPageContainer>
  );
};

export default TeamPage;
