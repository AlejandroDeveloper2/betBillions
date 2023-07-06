import styled from "styled-components";

import { ImageStyledProps } from "../../../types";

const Image = styled.img<ImageStyledProps>`
  width: ${(props: ImageStyledProps) => props.sm.width}%;
  height: ${(props: ImageStyledProps) => props.sm.height}%;
  object-fit: contain;
  @media (min-width: 768px) {
    width: ${(props: ImageStyledProps) => props.md.width}%;
    height: ${(props: ImageStyledProps) => props.md.height}%;
  }
  @media (min-width: 1000px) {
    width: ${(props: ImageStyledProps) => props.lg.width}%;
    height: ${(props: ImageStyledProps) => props.lg.height}%;
  }
`;

export { Image };
