import { useState, useEffect } from "react";

const useGameMode = (typeGame: string | null) => {
  const [ball] = useState<{ active: boolean }>({ active: false });
  const [exampleBoard, setExampleBoard] = useState<{ active: boolean }[]>(
    new Array(25).fill(ball, 0)
  );

  const drawGameMode = (): void => {
    if (typeGame === "X") {
      drawXGameMode();
      return;
    }
    if (typeGame === "L") {
      drawLGameMode();
      return;
    }
  };

  const drawXGameMode = (): void => {
    const gameMode = exampleBoard.map((ball, i) => {
      const updatedBall =
        i % 6 === 0 || i % 4 === 0 ? { ...ball, active: true } : ball;
      return updatedBall;
    });
    setExampleBoard(gameMode);
  };

  const drawLGameMode = (): void => {
    const gameMode = exampleBoard.map((ball, i) => {
      const updatedBall =
        i % 5 === 0 || (i > 19 && i < 25) ? { ...ball, active: true } : ball;
      return updatedBall;
    });
    setExampleBoard(gameMode);
  };

  useEffect(() => {
    drawGameMode();
    return () => {
      setExampleBoard(new Array(25).fill({ active: false }, 0));
    };
  }, [typeGame]);

  return {
    exampleBoard,
  };
};
export default useGameMode;
