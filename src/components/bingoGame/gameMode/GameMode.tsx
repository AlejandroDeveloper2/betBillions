import { useGameMode } from "@hooks/index";
import { GameModeProps } from "types";

import { GameModeContainer } from "./GameMode.style";

const GameMode = (props: GameModeProps): JSX.Element => {
  const { mode } = props;
  const { exampleBoard } = useGameMode(mode);

  return (
    <GameModeContainer>
      {exampleBoard.map((ball, i) => (
        <span
          key={i}
          style={{
            backgroundColor: ball.active ? "var(--dark-gray)" : "var(--gray)",
          }}
        ></span>
      ))}
    </GameModeContainer>
  );
};

export default GameMode;
