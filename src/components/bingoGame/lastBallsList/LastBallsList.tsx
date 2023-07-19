import { GiEightBall } from "react-icons/gi";

import { useBingoContext } from "@hooks/index";

import { DefaultButton, Loading } from "@components/index";

import {
  Ball,
  LastBallsContainer,
  NumberBallVariant,
} from "./LastBallsList.style";

const LastBallsList = (): JSX.Element => {
  const { bingoRound } = useBingoContext();

  return (
    <LastBallsContainer>
      {bingoRound ? (
        <>
          {bingoRound.balls.slice(0, 4).map((ball, index) => (
            <Ball key={index}>
              <div></div>
              <NumberBallVariant>
                <span>{ball}</span>
              </NumberBallVariant>
            </Ball>
          ))}
          <DefaultButton
            style={{
              bg: "var(--white)",
              fontColor: "var(--dark-gray)",
              padding: "0.5rem 0.5rem",
            }}
            label="Ver balotas"
            title={"Ver balotas que ya salieron"}
          >
            <GiEightBall
              style={{
                color: "var(--dark-gray)",
                fontSize: 30,
                marginRight: 10,
              }}
            />
          </DefaultButton>
        </>
      ) : (
        <Loading message="Cargando balotas..." textColor="var(--dark-gray)" />
      )}
    </LastBallsContainer>
  );
};

export default LastBallsList;
