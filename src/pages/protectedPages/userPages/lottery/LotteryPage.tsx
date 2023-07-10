import { useEffect } from "react";

import { useLoading, useLotteryContext } from "@hooks/index";
import { formatDate } from "@utils/index";

import { AdCard, Footer, Loading, SidebarBalance } from "@components/index";

import { Datetext } from "../userPanel/UserPanel.style";
import { LotteryContainer } from "./LotteryPage.style";
import { CardAdTitle } from "@styles/GlobalStyles.style";

const LotteryPage = (): JSX.Element => {
  const { reffels, getAllBingoReffels } = useLotteryContext();
  const {
    isLoading,
    loadingMessage,
    activeLoading,
    inactiveLoading,
    setMessage,
  } = useLoading();

  useEffect(() => {
    getAllBingoReffels({
      activeLoading,
      inactiveLoading,
      setMessage,
    });
  }, []);

  return (
    <LotteryContainer>
      <SidebarBalance />
      <h1>Sorteos</h1>
      {isLoading ? (
        <Loading
          message={loadingMessage}
          textColor="var(--bg-secondary-color)"
        />
      ) : (
        reffels
          .filter((reffel) => reffel.state === true)
          .map((reffel) => (
            <AdCard key={reffel.id} play={reffel.state} lotteryId={reffel.id}>
              <CardAdTitle>Juega y gana </CardAdTitle>
              <Datetext>{formatDate(reffel.startDate)}</Datetext>
            </AdCard>
          ))
      )}
      <Footer />
    </LotteryContainer>
  );
};

export default LotteryPage;
