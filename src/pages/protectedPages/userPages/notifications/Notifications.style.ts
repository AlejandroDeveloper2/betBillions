import styled from "styled-components";

const NotificationsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 1rem;
  padding-bottom: 5.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  background-color: var(--white);
  gap: 2rem;

  @media (min-width: 1000px) {
    align-items: flex-start;
    width: 100%;
    padding-bottom: 1rem;
    flex-direction: row-reverse;
  }
  button {
    margin: 0 auto;
  }
`;

const PageTitle = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  h1 {
    font-weight: bold;
    color: var(--bg-secondary-color);
    text-align: center;
    font-size: 2rem;
  }
  @media (min-width: 1000px) {
    justify-content: flex-start;
    h1 {
      display: inline-block;
      text-align: left;
      font-size: 2.5rem;
    }
  }
`;

const EmptyNotifications = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  p {
    font-size: 1.2rem;
    font-weight: 500;
    text-align: center;
    color: var(--bg-secondary-color);
  }
`;

export { NotificationsContainer, PageTitle, EmptyNotifications };
