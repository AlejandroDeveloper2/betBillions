import styled from "styled-components";

import { ImageStyledProps } from "../../../types";

const Image = styled.img<ImageStyledProps>`
  width: ${(props: ImageStyledProps) => props.sm}%;
  height: ${(props: ImageStyledProps) => props.sm}%;
  object-fit: contain;
  @media (min-width: 768px) {
    width: ${(props: ImageStyledProps) => props.md}%;
    height: ${(props: ImageStyledProps) => props.md}%;
  }
  @media (min-width: 1000px) {
    width: ${(props: ImageStyledProps) => props.lg}%;
    height: ${(props: ImageStyledProps) => props.lg}%;
  }
`;

export { Image };
