import { useState } from "react";
import { GiEightBall } from "react-icons/gi";

import { DropdownProps } from "types";

import { DefaultButton } from "@components/index";

import { DropdownContainer, DropdownItemsContainer } from "./Dropdown.style";

function Dropdown(props: DropdownProps): JSX.Element {
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
  const { style, children } = props;

  return (
    <DropdownContainer>
      <DefaultButton
        style={{
          bg: "var(--white)",
          fontColor: "var(--dark-gray)",
          padding: "0.5rem 0.5rem",
        }}
        label="Ver balotas"
        title={"Ver balotas que ya salieron"}
        onClick={() => setIsDropdownVisible(!isDropdownVisible)}
      >
        <GiEightBall
          style={{
            color: "var(--dark-gray)",
            fontSize: 30,
            marginRight: 10,
          }}
        />
      </DefaultButton>
      <DropdownItemsContainer
        visible={isDropdownVisible.toString()}
        direction={style.direction}
        wrap={style.wrap.toString()}
      >
        {children}
      </DropdownItemsContainer>
    </DropdownContainer>
  );
}

export default Dropdown;
