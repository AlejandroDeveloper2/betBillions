import { AdCardProps } from "../../../types";

import { Image } from "../..";

import { BingoFigure, DateAlertFigure } from "../../../assets";

import {
  CardContainer,
  Column,
  ColumnVariant,
  Figure,
  PlayLink,
} from "./AdCard.style";

const AdCard = (props: AdCardProps): JSX.Element => {
  const { children, play } = props;

  return (
    <CardContainer>
      <ColumnVariant>{children}</ColumnVariant>
      <Column>
        <Figure>
          <Image
            source={DateAlertFigure}
            alt={"Bet billions bingo date"}
            size={{ lg: 40, md: 20, sm: 20 }}
          />
        </Figure>
        {play && <PlayLink to="/userPanel/lottery/details">Jugar</PlayLink>}
        <Image
          source={BingoFigure}
          alt={"Bet billions bingo"}
          size={{ lg: 70, md: 100, sm: 80 }}
        />
      </Column>
    </CardContainer>
  );
};

export default AdCard;
