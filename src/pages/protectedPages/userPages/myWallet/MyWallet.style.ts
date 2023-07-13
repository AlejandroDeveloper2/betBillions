import styled from "styled-components";

const MyWalletContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 1rem;
  padding-bottom: 6rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  background-color: var(--white);
  gap: 2rem;

  @media (min-width: 1000px) {
    width: 100%;
    align-items: flex-start;
    padding-bottom: 1rem;
    flex-direction: row-reverse;
  }
`;

const PageTitle = styled.h1`
  font-weight: bold;
  color: var(--bg-secondary-color);
  text-align: center;
  font-size: 2rem;

  @media (min-width: 1000px) {
    text-align: left;
    font-size: 2.5rem;
  }
`;

const PageHeader = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  @media (min-width: 1000px) {
    justify-content: flex-start;
  }
`;

const Text = styled.p`
  font-weight: 500;
  color: var(--bg-secondary-color);
  text-align: left;
  font-size: 1.2rem;
  span {
    text-transform: uppercase;
    font-weight: 900;
  }
`;

const WalletAddress = styled(Text)`
  text-align: center;
  font-size: 0.8rem;
  text-overflow: ellipsis;
  white-space: pre-wrap;
  overflow: hidden;
  span {
    font-size: 1rem;
  }
  @media (min-width: 768px) {
    font-size: 1.3rem;
    span {
      font-size: 1.4rem;
    }
  }
`;

const WalletCard = styled.div`
  width: 100%;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 0;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right, var(--gray), var(--blue));
`;

const WalletAddressContainer = styled.div`
  width: 100%;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  padding-bottom: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    padding-bottom: 0;
    border-radius: 2rem;
  }
`;

const WalletInputContainer = styled(WalletAddressContainer)`
  gap: 1rem;
  padding: 1rem 1rem;
  @media (min-width: 768px) {
    gap: 3rem;
    padding: 0.2rem 0;
  }
`;

const WalletBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    gap: 0;
  }
`;

const InputRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    width: 50%;
  }
`;

const Paragraph = styled.p`
  width: 100%;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  color: var(--dark-gray);
  padding: 1rem;
  background-color: var(--green);
  border-radius: 1rem;
`;

export {
  MyWalletContainer,
  PageTitle,
  PageHeader,
  Text,
  WalletCard,
  WalletAddressContainer,
  WalletAddress,
  WalletBody,
  WalletInputContainer,
  InputRow,
  Paragraph,
};
