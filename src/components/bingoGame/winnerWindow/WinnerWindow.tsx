import { VscDebugContinue } from "react-icons/vsc";

import { WinnerWindowProps } from "types";

import { DefaultButton, Image } from "@components/index";

import { ModalMessage } from "@pages/protectedPages/userPages/bingoGame/BingoGame.style";
import { PartyGift } from "@assets/index";

const WinnerWindow = ({
  userWinner,
  hideModal,
}: WinnerWindowProps): JSX.Element => {
  return (
    <>
      <Image
        source={PartyGift}
        alt={"Bet billions ganador"}
        size={{
          lg: 40,
          md: 40,
          sm: 60,
        }}
      />
      <ModalMessage>
        ¡Felicitaciones <span>{userWinner}</span> has sido el primero en decir
        BINGO!
      </ModalMessage>
      <DefaultButton
        style={{
          bg: "var(--bg-secondary-color)",
          fontColor: "var(--white)",
        }}
        title={"Continuar siguiente ronda"}
        label="Continuar"
        onClick={hideModal}
      >
        <VscDebugContinue
          style={{ color: "var(--white)", fontSize: 30, marginRight: 10 }}
        />
      </DefaultButton>
    </>
  );
};

export default WinnerWindow;
