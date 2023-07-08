import styled from "styled-components";

const SidebarContainer = styled.aside`
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  display: flex;
  @media (min-width: 1000px) {
    flex-direction: column;
    width: 20%;
    gap: 2rem;
    position: absolute;
    top: 0;
    right: 2rem;
    padding-bottom: 2rem;
  }
`;

const WinnersList = styled.div`
  width: 100%;
  border-radius: 2rem;
  background-color: var(--light-gray);
  padding: 1rem 1.5rem;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media (min-width: 1000px) {
    width: 100%;
  }
`;

const WinnerListHead = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
`;

const WinnerListTitle = styled.h2`
  font-weight: bold;
  font-size: 1.8rem;
  text-align: center;
  color: var(--bg-secondary-color);
`;

const WinnerInfo = styled.div`
  width: 100%;
  display: inline-flex;
  gap: 0.5rem;
  justify-content: flex-start;
  align-items: center;

  @media (min-width: 768px) {
    justify-content: center;
  }
`;

const Info = styled.div`
  display: flex;
  gap: 0.4rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const UserName = styled.p`
  font-weight: 500;
  font-size: 1.5rem;
  text-align: left;
  color: var(--bg-secondary-color);
  span {
    font-size: 1rem;
    font-weight: 300;
    color: var(--gray);
  }
`;

const TeamIndicator = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  background-color: var(--bg-secondary-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  h2 {
    font-size: 1.2rem;
    font-weight: 500;
    text-align: left;
    color: var(--white);
    gap: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    span {
      font-size: 3rem;
      font-weight: bolder;
      text-align: center;
    }
  }
`;

const SocialMedia = styled.div`
  width: 100%;
  display: flex;
  padding: 2rem 1.5rem;
  background-color: var(--light-gray);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 1rem;
  gap: 1rem;
  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: left;
    color: var(--bg-secondary-color);
  }
  @media (min-width: 768px) {
    width: 100%;
    h2 {
      font-size: 1.8rem;
    }
  }
`;

const SecondContent = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
  @media (min-width: 1000px) {
    flex-direction: column;
  }
`;

const SocialLinks = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  svg {
    width: 30px;
    height: 30px;
  }
`;

export {
  SidebarContainer,
  WinnersList,
  WinnerListTitle,
  WinnerListHead,
  WinnerInfo,
  UserName,
  Info,
  TeamIndicator,
  SocialMedia,
  SocialLinks,
  SecondContent,
};
