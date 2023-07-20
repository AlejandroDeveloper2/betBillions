import { useGame } from "@hooks/index";

import { Dropdown, Loading } from "@components/index";

import {
  Ball,
  LastBallsContainer,
  NumberBallVariant,
} from "./LastBallsList.style";

const LastBallsList = (): JSX.Element => {
  const { showedBalls } = useGame();

  return (
    <LastBallsContainer>
      {showedBalls ? (
        <>
          {showedBalls.slice(0, 4).map((ball, index) => (
            <Ball key={index}>
              <div></div>
              <NumberBallVariant>
                <span>{ball}</span>
              </NumberBallVariant>
            </Ball>
          ))}
          <Dropdown
            style={{
              direction: "row",
              wrap: true,
            }}
          >
            {showedBalls.map((showedBall, index) => (
              <DropdownElement key={index} ball={showedBall} />
            ))}
          </Dropdown>
        </>
      ) : (
        <Loading message="Cargando balotas..." textColor="var(--dark-gray)" />
      )}
    </LastBallsContainer>
  );
};

const DropdownElement = (props: { ball: string }): JSX.Element => {
  const { ball } = props;
  return (
    <Ball>
      <div></div>
      <NumberBallVariant>
        <span>{ball}</span>
      </NumberBallVariant>
    </Ball>
  );
};

export default LastBallsList;
