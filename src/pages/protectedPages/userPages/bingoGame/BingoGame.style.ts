import styled from "styled-components";

const BingoGameContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding-bottom: 8rem;
  background-color: var(--light-gray);
  gap: 1rem;
  position: relative;
`;

const BingoGameBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
  flex-direction: column;
  gap: 1.5rem;
`;

const BingoButtonText = styled.p`
  font-size: 1.5rem;
  font-weight: 900;
  color: var(--white);
  text-transform: uppercase;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  letter-spacing: 5px;
`;

const BoardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    width: 30rem;
  }
`;

const AwardContainer = styled.div`
  width: 15rem;
  height: 10rem;
  background-image: linear-gradient(
    to right,
    var(--bg-primary-color),
    var(--bg-secondary-color)
  );
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  animation-name: bounce-in;
  animation-duration: 3s;
  animation-timing-function: ease;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
  @keyframes bounce-in {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px);
    }
  }
  p {
    font-size: 1.2rem;
    color: var(--white);
    font-weight: 600;
    text-align: center;
  }
  span {
    font-size: 1.5rem;
    color: var(--green);
    font-weight: 900;
    text-align: center;
  }

  @media (min-width: 1000px) {
    position: fixed;
    left: 20rem;
    top: 10rem;
  }
`;

const ModalMessage = styled.p`
  font-size: 1.2rem;
  color: var(--dark-gray);
  font-weight: 600;
  text-align: center;
`;

export {
  BingoGameContainer,
  BingoGameBody,
  BingoButtonText,
  BoardContainer,
  AwardContainer,
  ModalMessage,
};
