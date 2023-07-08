import { useState } from "react";

import { BingoBoard } from "types";

const useCarousel = (bingoBoards: BingoBoard[]) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [selectedBingoBoards, setSelectedBingoBoards] = useState<BingoBoard[]>(
    bingoBoards.slice(undefined, 1)
  );

  const selectNewBingoBoard = (
    index: number,
    boards: BingoBoard[],
    next = true
  ) => {
    const condition: boolean = next ? index < boards.length - 1 : index > 0;
    const nextIndex = next
      ? condition
        ? index + 1
        : 0
      : condition
      ? index - 1
      : boards.length - 1;
    setSelectedBingoBoards(boards.slice(nextIndex, boards.length - nextIndex));
    setSelectedIndex(nextIndex);
  };

  const previous = (): void => {
    selectNewBingoBoard(selectedIndex, bingoBoards, false);
  };

  const next = (): void => {
    selectNewBingoBoard(selectedIndex, bingoBoards);
  };

  return {
    selectedBingoBoards,
    previous,
    next,
  };
};

export default useCarousel;
