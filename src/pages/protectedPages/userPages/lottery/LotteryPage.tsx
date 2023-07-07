import { useEffect } from "react";

import { useLoading, useLotteryContext, useToast } from "@hooks/index";
import { formatDate } from "@utils/index";

import {
  AdCard,
  Footer,
  Loading,
  SidebarBalance,
  Toast,
} from "@components/index";

import { Datetext } from "../userPanel/UserPanel.style";
import { LotteryContainer } from "./LotteryPage.style";
import { CardAdTitle } from "@styles/GlobalStyles.style";

const LotteryPage = (): JSX.Element => {
  const { reffels, getAllBingoReffels } = useLotteryContext();

  const {
    isToastVisible,
    toast,
    showToast,
    hideToast,
    getToastColor,
    configToast,
  } = useToast();

  const {
    isLoading,
    loadingMessage,
    activeLoading,
    inactiveLoading,
    setMessage,
  } = useLoading();

  useEffect(() => {
    getAllBingoReffels({
      toastConfig: {
        showToast,
        hideToast,
        configToast,
      },
      loadingConfig: {
        activeLoading,
        inactiveLoading,
        setMessage,
      },
    });
  }, []);

  return (
    <>
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
      <Toast
        message={toast.toastMessage}
        type={toast.toastType}
        toastConfig={{
          isToastVisible,
          getToastColor,
          hideToast,
        }}
      />
    </>
  );
};

export default LotteryPage;
