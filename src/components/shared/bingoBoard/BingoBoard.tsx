import { Image } from "@components/index";

import { BoardBody, BoardContainer, BoardHead } from "./BingoBard.style";
import { Logo } from "@assets/index";

const BingoBoard = (): JSX.Element => {
  return (
    <BoardContainer>
      <Image
        source={Logo}
        alt={"Logo betBillions"}
        size={{
          lg: 40,
          md: 30,
          sm: 30,
        }}
      />
      <BoardHead>
        <span>B</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
        <span>O</span>
      </BoardHead>
      <BoardBody></BoardBody>
    </BoardContainer>
  );
};

export default BingoBoard;
