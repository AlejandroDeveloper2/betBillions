import { EmptyProps } from "types";

import { Image } from "@components/index";

import { EmptyContainer, EmptyMessage } from "./Empty.style";
import { NoDataEmpty } from "@assets/index";

const Empty = (props: EmptyProps): JSX.Element => {
  const { message } = props;

  return (
    <EmptyContainer>
      <Image
        source={NoDataEmpty}
        alt={"No data"}
        size={{
          lg: 20,
          md: 40,
          sm: 40,
        }}
      />
      <EmptyMessage>{message}</EmptyMessage>
    </EmptyContainer>
  );
};

export default Empty;
