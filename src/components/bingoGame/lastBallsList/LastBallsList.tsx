import { useGame, useSearch } from "@hooks/index";

import { Dropdown, Loading, SearchInput } from "@components/index";

import {
  Ball,
  LastBallsContainer,
  NumberBallVariant,
} from "./LastBallsList.style";
import { FiSearch } from "react-icons/fi";

const LastBallsList = (): JSX.Element => {
  const { showedBalls } = useGame();
  const { searchedElement, filteredList, handleChange } =
    useSearch(showedBalls);

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
            <SearchInput
              name="searchShownBall"
              value={searchedElement}
              placeholder="Buscar balota por nombre"
              onChange={handleChange}
              Icon={FiSearch}
            />
            {filteredList.map((showedBall, index) => (
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
