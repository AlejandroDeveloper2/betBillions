import { AdCardProps } from "types";

import { Image } from "@components/index";

import { BingoFigure, DateAlertFigure } from "@assets/index";

import {
  CardContainer,
  Column,
  ColumnVariant,
  Figure,
  PlayLink,
} from "./AdCard.style";

const AdCard = (props: AdCardProps): JSX.Element => {
  const { children, play, lotteryKey } = props;

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
        {play && (
          <PlayLink to={`/userPanel/lottery/details/${lotteryKey}`}>
            Jugar
          </PlayLink>
        )}
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
