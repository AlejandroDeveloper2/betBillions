import { IndicatorProps } from "types";

import { IndicatorContainer } from "./Indicator.style";

const Indicator = (props: IndicatorProps): JSX.Element => {
  const { children, width } = props;
  return <IndicatorContainer width={width}>{children}</IndicatorContainer>;
};

export default Indicator;
