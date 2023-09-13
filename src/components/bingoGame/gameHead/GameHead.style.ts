import styled from "styled-components";

const GameHeadContainer = styled.header`
  width: 100%;
  padding: 2rem 1rem;
  background-image: linear-gradient(
    to left,
    var(--bg-secondary-color) 60%,
    var(--black)
  );
  display: flex;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
  button {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    padding: 0.5rem;
  }

  @media (min-width: 768px) {
    padding: 1rem 1rem;
    justify-content: space-around;
    border-radius: 0;
  }
`;

const GameModesContainer = styled.div`
  width: auto;
  height: auto;
  border-radius: 0.5rem;
  background-color: var(--green);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 1.5rem;
  gap: 1rem;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    height: 6rem;
  }
`;

const Span = styled.span`
  font-size: 1rem;
  color: var(--dark-gray);
  font-weight: bold;
  text-align: center;
  display: flex;
  align-items: center;
  small {
    padding: 0.3rem 0.5rem;
    background-color: var(--white);
    color: var(--bg-secondary-color);
    font-weight: 900;
    margin-left: 1rem;
    border-radius: 0.3rem;
  }
`;

const CurrentBall = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background-color: var(--dark-gray);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.6);
  position: relative;
  div:first-of-type {
    width: 70%;
    height: 70%;
    border: 2px solid var(--white);
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border-radius: 50%;
  }
`;

const NumberBall = styled.div`
  width: 60%;
  height: 60%;
  background-color: var(--white);
  border-radius: 50%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    color: var(--dark-gray);
    font-size: 1.5rem;
    font-weight: 900;
    text-align: center;
    vertical-align: middle;
  }
`;

const CurrentBallContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
`;

export {
  GameHeadContainer,
  GameModesContainer,
  Span,
  CurrentBall,
  NumberBall,
  CurrentBallContainer,
};
