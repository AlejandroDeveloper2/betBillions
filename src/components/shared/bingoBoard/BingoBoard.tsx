import { BsFillCartPlusFill } from "react-icons/bs";

import { BingoBoardProps } from "types";
import { setColorBingoBalls } from "@utils/index";
import { useShoppingCartContext } from "@hooks/index";

import { DefaultButton, Image } from "@components/index";

import {
  BoardBody,
  BoardContainer,
  BoardHead,
  BoardColumn,
  Ball,
} from "./BingoBard.style";
import { Logo } from "@assets/index";

const BingoBoard = (props: BingoBoardProps): JSX.Element => {
  const { board, toastConfig } = props;
  const bingoStyledBalls = setColorBingoBalls(board);
  const { addBingoBoardToCart } = useShoppingCartContext();

  return (
    <BoardContainer>
      <DefaultButton
        style={{
          bg: "var(--black)",
          fontColor: "var(--white)",
          width: "4rem",
          padding: "1rem 1rem",
        }}
        title={"Seleccionar cartón"}
        onClick={() => addBingoBoardToCart(board, toastConfig)}
      >
        <BsFillCartPlusFill style={{ color: "var(--white)", fontSize: 20 }} />
      </DefaultButton>
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
      <BoardBody>
        {/*B */}
        <BoardColumn>
          {bingoStyledBalls.slice(0, 5).map((ball, index) => (
            <Ball key={index} color={ball.color}>
              <span>{ball.numbers.substring(1, 3)}</span>
            </Ball>
          ))}
        </BoardColumn>
        {/*I */}
        <BoardColumn>
          {bingoStyledBalls.slice(5, 10).map((ball, index) => (
            <Ball key={index} color={ball.color}>
              <span>{ball.numbers.substring(1, 3)}</span>
            </Ball>
          ))}
        </BoardColumn>
        {/*N */}
        <BoardColumn>
          {bingoStyledBalls.slice(10, 15).map((ball, index) => (
            <Ball key={index} color={ball.color}>
              <span>{ball.numbers.substring(1, 3)}</span>
            </Ball>
          ))}
        </BoardColumn>
        {/*G */}
        <BoardColumn>
          {bingoStyledBalls.slice(15, 20).map((ball, index) => (
            <Ball key={index} color={ball.color}>
              <span>{ball.numbers.substring(1, 3)}</span>
            </Ball>
          ))}
        </BoardColumn>
        {/*O */}
        <BoardColumn>
          {bingoStyledBalls.slice(20, 25).map((ball, index) => (
            <Ball key={index} color={ball.color}>
              <span>{ball.numbers.substring(1, 3)}</span>
            </Ball>
          ))}
        </BoardColumn>
      </BoardBody>
    </BoardContainer>
  );
};

export default BingoBoard;