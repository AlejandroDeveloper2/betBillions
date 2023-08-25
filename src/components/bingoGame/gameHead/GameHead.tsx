import { useNavigate } from "react-router-dom";

import { AiFillHome } from "react-icons/ai";

import { useGame } from "@hooks/index";

import {
  DefaultButton,
  LastBallsList,
  GameMode,
  Counter,
} from "@components/index";

import {
  CurrentBall,
  CurrentBallContainer,
  GameHeadContainer,
  GameModesContainer,
  NumberBall,
  Span,
} from "./GameHead.style";

const GameHead = (): JSX.Element => {
  const { round, currentBall, gameMode } = useGame();
  const navigate = useNavigate();

  return (
    <GameHeadContainer>
      <DefaultButton
        style={{
          bg: "var(--white)",
          fontColor: "var(--dark-gray)",
          width: "auto",
          padding: "0.5rem 0.5rem",
        }}
        title={"Ir al inicio"}
        onClick={() => navigate("/userPanel")}
      >
        <AiFillHome
          style={{ color: "var(--bg-secondary-color)", fontSize: 30 }}
        />
      </DefaultButton>

      <GameModesContainer>
        <Span>
          Ronda <small>{round}</small>
        </Span>
        <GameMode mode={gameMode} />
      </GameModesContainer>
      <CurrentBallContainer>
        <CurrentBall>
          <div></div>
          <NumberBall>
            <span>{currentBall}</span>
          </NumberBall>
        </CurrentBall>
        <Counter />
      </CurrentBallContainer>
      <LastBallsList />
    </GameHeadContainer>
  );
};

export default GameHead;
