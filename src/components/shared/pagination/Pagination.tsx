import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

import { PaginationProps } from "types";

import { DefaultButton } from "@components/index";

import { PaginationContainer, IndicatorLabel } from "./Pagination.style";

const Pagination = ({ config }: PaginationProps): JSX.Element => {
  const { next, prev, goBack, goNext, getPaginationIndicators } = config;
  const paginationIndicators = getPaginationIndicators();

  return (
    <PaginationContainer>
      <DefaultButton
        style={{
          bg: "var(--bg-secondary-color)",
          fontColor: "var(--white)",
          width: "5rem",
          padding: "0.5rem 0.5rem",
        }}
        title={"Pagina anteriror"}
        onClick={goBack}
        disabled={!prev}
      >
        <BiLeftArrow style={{ color: "var(--white)", fontSize: 30 }} />
      </DefaultButton>
      <IndicatorLabel>
        {`Mostrando ${paginationIndicators.presented} al ${paginationIndicators.of} de ${paginationIndicators.total} registros`}
      </IndicatorLabel>
      <DefaultButton
        style={{
          bg: "var(--bg-secondary-color)",
          fontColor: "var(--white)",
          width: "5rem",
          padding: "0.5rem 0.5rem",
        }}
        title={"Pagina siguiente"}
        onClick={goNext}
        disabled={!next}
      >
        <BiRightArrow style={{ color: "var(--white)", fontSize: 30 }} />
      </DefaultButton>
    </PaginationContainer>
  );
};

export default Pagination;
