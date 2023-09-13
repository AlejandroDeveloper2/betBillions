import { Footer, Image, SidebarDefault } from "@components/index";

import {
  EmptyNotifications,
  NotificationsContainer,
  PageTitle,
} from "./Notifications.style";
import { Content } from "@styles/GlobalStyles.style";

import { NoNotifications, Notification3DICon } from "@assets/index";

const Notifications = (): JSX.Element => {
  return (
    <NotificationsContainer>
      <SidebarDefault />
      <Content>
        <PageTitle>
          <h1>Notificaciones</h1>
          <Image
            source={Notification3DICon}
            alt="Notificaciones bet billions"
            size={{
              lg: 10,
              md: 10,
              sm: 20,
            }}
          />
        </PageTitle>
        <EmptyNotifications>
          <Image
            source={NoNotifications}
            alt={"Sin notificaciones"}
            size={{
              lg: 40,
              md: 40,
              sm: 40,
            }}
          />
          <p>¡No tienes notificaciones aún! </p>
        </EmptyNotifications>
        <Footer />
      </Content>
    </NotificationsContainer>
  );
};

export default Notifications;
